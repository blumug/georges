Meteor.publish('bookmarks', function(options) {
  return Bookmarks.find({}, options);
});
Meteor.publish('tags', function() {
    return Tags.find();
});