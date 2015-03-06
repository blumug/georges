Meteor.publish('tags', function() {
  return Tags.find();
});

Meteor.publish('user-tags', function() {
  return UserTags.find({
    userId: this.userId
  });
});
