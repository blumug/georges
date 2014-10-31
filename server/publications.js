Meteor.publish('bookmarks', function() {
    return Bookmarks.find();
});
Meteor.publish('tags', function() {
    return Tags.find();
});