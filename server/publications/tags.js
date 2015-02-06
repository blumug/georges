Meteor.publish('tags', function() {
  return Tags.find();
});

Meteor.publish('user-tags', function() {
  return UserTags.find({
    name: {
      $in: GetMyAllTags(this.userId)
    }
  });
})
