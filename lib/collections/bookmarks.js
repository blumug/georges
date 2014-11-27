Bookmarks = new Mongo.Collection('bookmarks');
Bookmarks.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        if (!userId) {
            return false;
        }
        if (userId == doc.userId) {
            return true;
        }
        return false;
    },
    update: function(userId, doc) {
        if (!userId) {
            return false;
        }
        if (userId == doc.userId) {
            return true;
        }
        return false;
    },
});
Meteor.methods({
    'bookmarkInsert': function(bookmark) {
        check(bookmark, {
            url: String,
            title: String,
            tags: Array,
            description: String,
            userId: String
        });
        var bookmarkWithSameUrl = Bookmarks.findOne({
            url: bookmark.url,
            userId: bookmark.userId
        });
        if (bookmarkWithSameUrl) {
            return {
                success: false,
                url: bookmark.url,
                message: "Bookmark already exist"
            }
        }
        var new_bookmark = _.extend(bookmark, {
            dateCreated: new Date(),
            dateModified: new Date(),
            counterView: 0,
            counterClick: 0,
            summary: {
                id: "",
                status: "empty",
                text: "",
                readable: "",
            },
            thumbnail: ""
        });
        var inc = 0;
        var _id = Bookmarks.insert(new_bookmark);
        Meteor.call("analyzeText", new_bookmark.url, function(error, resultat) {
            console.log(error);
            var id = resultat;
            var check = function(id) {
                Meteor.call("getText", id, function(error, resultat) {
                    console.log(error);
                    inc++;
                    if (inc >= 10) {
                        console.log("analyzeText Failed");
                    } else if (resultat.status == "finished") {
                        new_bookmark.summary = resultat;
                        Meteor.call("bookmarkUpdate", new_bookmark, _id, function(error, resultat) {
                            console.log(error);
                        });
                    } else {
                        Meteor.setTimeout(function() {
                            check(id);
                        }, 4000);
                    }
                });
            }
            Meteor.setTimeout(function() {
                check(id);
            }, 4000);
        });
        return {
            success: true,
            url: new_bookmark.url,
            message: "Successful"
        }
    },
    'bookmarkUpdate': function(bookmark, id) {
        check(id, String);
        var resultat = {
            message: "success",
            url: "",
            success: ""
        };
        if (!id && Bookmarks.find({
            userId: Meteor.userId(),
            url: bookmark.url
        }).count() == 0) {
            resultat.message = "New bookmark: " + id;
            Bookmarks.insert(bookmark);
        } else if (Bookmarks.find({
            userId: Meteor.userId(),
            url: bookmark.url
        }).count() == 0) {
            resultat.message = "Update bookmark: " + id;
            Bookmarks.update({
                _id: id
            }, {
                $set: bookmark
            });
        }
        else
            resultat.message = "already exist";
        resultat.success = true;
        resultat.url = bookmark.url;
        return resultat;
    },
    'removeBookmark': function(id) {
        check(id, String);
        Bookmarks.remove(id);
        return {
            success: true,
            url: id,
            message: "Remove success"
        }
    },
    'removeBookmarkByUrl': function(url, id) {
        check(url, String);
        Bookmarks.remove({
            userId: id,
            url: url
        });
        return {
            success: true,
            url: url,
            message: "Remove success"
        }
    },
    'findBookmark': function(url) {
        check(url, String);
        console.log("Finf bookmark: " + url);
        return Bookmarks.findOne({
            url: url
        })
    }
});