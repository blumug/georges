Meteor.publish('bookmarks', function(option, filter) {
    console.log('bookmarks with filter: ' + filter) 
    if (!filter || filter === '') {
        return (Bookmarks.find({
            userId: this.userId
        }, option));
    } else {
        if (filter.indexOf("#") != -1) {
            var parsedTags = ParsedTags(filter);
            return Bookmarks.find({
                userId: this.userId,
                tags: {
                    $in: parsedTags
                }
            }, {
                sort: {
                    dateCreated: -1
                }
            })
        } else {
            return Bookmarks.find({
                userId: this.userId,
                $or: [{
                    url: {
                        $regex: filter,
                        $options: "si"
                    }
                }, {
                    title: {
                        $regex: filter,
                        $options: "si"
                    }
                }, {
                    description: {
                        $regex: filter,
                        $options: "si"
                    }
                }]
            }, option);
        }
    }
});
Meteor.publish('bookmark', function(id) {
    check(id, String);
    return Bookmarks.find(id);
});
Meteor.publish('tags', function() {
    return Tags.find();
});