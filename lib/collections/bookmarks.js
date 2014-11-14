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
            console.log("Bookmark already exist: " + new_bookmark.url);
            return {
                success: false,
                url: new_bookmark.url,
                message: "Fail"
            }
        }
        var new_bookmark = _.extend(bookmark, {
            dateCreated: new Date(),
            dateModified: new Date(),
            counterView: 0,
            counterClick: 0,
            summary: "",
            versionText: "",
            thumbnail: ""
        });
        Bookmarks.insert(new_bookmark);
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
            Bookmarks.insert(bookmark);
        } else {
            Bookmarks.update({
                _id: id
            }, {
                $set: bookmark
            });
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
            message: "Successful"
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
// if (Meteor.isServer) {
//   Meteor.startup(function() {
//     if (Bookmarks.find().count() === 0) {
//       for (var i = 0; i < 30; i++) {
//         var bookmark = {
//           url: "www.tap" + i + ".com",
//           title: "Tap" + i,
//           description: "",
//           tags: [],
//           userId: "H9fYmbNcC2MmTtjea"
//         }
//         Bookmarks.insert(bookmark);
//       }
//     }
//   });
// }