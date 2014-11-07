Meteor.publish('bookmarks', function(option) {
    return Bookmarks.find({userId: this.userId}, option);
});
Meteor.publish('bookmark', function(id) {
    check(id, String);
    return Bookmarks.find(id);
});
Meteor.publish('tags', function() {
    return Tags.find();
});