Template.bookmarksList.helpers({
    bookmarks: function() {
        if (Meteor.user()) {
            var searchTags = document.getElementById("tagSearch").value;
            if (searchTags != undefined) {
                return Bookmarks.find({
                    tags: searchTags
                }, {
                    sort: {
                        dateCreated: -1
                    }
                })
            } else {
                return (Bookmarks.find({
                    userId: Meteor.user()._id
                }))
            }
        }
    }
});