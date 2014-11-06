Bookmarks = new Mongo.Collection('bookmarks');
Bookmarks.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        return !!userId;
    }
});
Meteor.methods({
    'bookmarkInsert': function(bookmark) {
        var user = Meteor.user();
        check(user._id, String);
        check(bookmark, {
            url: String,
            title: String,
            tags: Array,
            description: String,
            userId: String
        });
        var bookmarkWithSameUrl = Bookmarks.findOne({
            url: bookmark.url,
            userId: user._id
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
    'bookmarkUpdate': function(bookmark) {
        var user = Meteor.user();
        check(user._id, String);
        Bookmarks.insert(bookmark);
    },

    'removeBookmark': function(id) {
        var user = Meteor.user();
        check(user._id, String);
        Bookmarks.remove(id);
    },

});