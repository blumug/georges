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
            userId: this._id
        });
        if (bookmarkWithSameUrl) {
            return {
                bookmarkExists: true
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
        return {
            bookmarkExists: false
        }
    },
    'bookmarkUpdate': function(bookmark, id) {
        var user = Meteor.user();
        check(user._id, String);
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
        var user = Meteor.user();
        check(user._id, String);
        Bookmarks.remove(id);
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