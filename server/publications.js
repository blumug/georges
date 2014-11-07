Meteor.publish('bookmarks', function(option) {
    return Bookmarks.find({
        userId: this.userId
    }, option);
});
Meteor.publish('bookmark', function(id) {
    check(id, String);
    return Bookmarks.find(id);
});
Meteor.publish('search', function(filter) {
	check(filter, String);
    if (filter === undefined || filter === '') {
        return (Bookmarks.find({
            userId: this._id
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
});
Meteor.publish('tags', function() {
    return Tags.find();
});