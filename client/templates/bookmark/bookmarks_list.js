Template.bookmarksList.helpers({
    bookmarks: function() {
        if (Meteor.user()) {
            return (Bookmarks.find({
                userId: Meteor.user()._id
            }))
        }
    }
});