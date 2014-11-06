Template.bookmarksList.helpers({
    bookmarks: function() {
        var filter = Session.get('searchBar');
        if (Meteor.user()) {
            if (filter === undefined || filter === '') {
                return (Bookmarks.find({
                    userId: Meteor.user()._id
                }));
            } else {
                if (filter.indexOf("#") != -1) {
                    var parsedTags = ParsedTags(filter);
                    return Bookmarks.find({
                        tags: {
                            $in: parsedTags
                        }
                    }, {
                        sort: {
                            dateCreated: -1
                        }
                    })
                } else {
                    return (Bookmarks.find({
                        $or: [{
                            $where: "this.url.indexOf(\"" + filter + "\") != -1"
                        }, {
                            $where: "this.title.indexOf(\"" + filter + "\") != -1"
                        }, {
                            $where: "this.description.indexOf(\"" + filter + "\") != -1"
                        }]
                    }, {
                        sort: {
                            dateCreated: -1
                        }
                    }));
                }
            }
        }
    }
});