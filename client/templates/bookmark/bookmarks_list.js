Template.bookmarksList.helpers({
    bookmarks: function() {
        var filter = Session.get('searchBar');
        if (Meteor.user()) {
            if (filter === undefined) {
                return (Bookmarks.find({
                    userId: Meteor.user()._id
                }));
            } else {
                return (Bookmarks.find({
                    tags: filter
                }, {sort: {dateCreated: -1}}));
            }
        }
    }
});