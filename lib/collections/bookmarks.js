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
            console.log("Bookmark already exist: " + bookmark.url);
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
                text: ""
            },
            versionText: "",
            thumbnail: ""
        });
        var inc = 0;
        Meteor.call("analyzeText", new_bookmark.url, function(error, resultat) {
            console.log("analyze text id: " + resultat);
            console.log("analyze text error: " + error);
            var id = resultat;
            var check = function(id) {
                Meteor.call("getText", id, function(error, resultat) {
                    console.log("getText text resultat: " + resultat);
                    console.log("getText text error: " + error);
                    console.log("incrementation: " + inc);
                    inc++;
                    if (inc >= 10) {
                        console.log("analyzeText Failed");
                    } else if (resultat.status == "finished") {
                        new_bookmark.summary = resultat;
                        Meteor.call("bookmarkUpdate", new_bookmark, "", function(error, resultat) {
                            console.log("Update " + resultat.message + " of " + resultat.url);
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
        console.log("New bookmark: " + new_bookmark.url);
        return {
            success: true,
            url: new_bookmark.url,
            message: "Successful"
        }
    },
    'bookmarkUpdate': function(bookmark, id) {
        check(id, String);
        if (!id) {
            return Bookmarks.insert(bookmark);
        } else {
            Bookmarks.update({
                _id: id
            }, {
                $set: bookmark
            });
        }
        return {
            success: true,
            url: bookmark.url,
            message: "Successful"
        }
    },
    'removeBookmark': function(id) {
        check(id, String);
        console.log("Bookmark remove: " + id);
        Bookmarks.remove(id);
    },
    'removeBookmarkByUrl': function(url, id) {
        check(url, String);
        console.log("Bookmark remove: " + url);
        console.log("by " + id);
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
var request = function(new_bookmark) {
    var isFinished = false;
    console.log("COUCOU");
    setTimeout(function() {
        Meteor.call("getTexapi", new_bookmark.url, function(error, resultat) {
            new_bookmark.summary.id = resultat.id;
            console.log(resultat.id);
            new_bookmark.summary.status = resultat.status;
            if (resultat.status == "finished") {
                new_bookmark.summary.text = resultat.summary;
                isFinished = true;
                Bookmarks.insert(new_bookmark);
            } else request(new_bookmark);
        });
    }, 3000);
}