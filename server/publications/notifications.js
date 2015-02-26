Meteor.publish('notifications', function() {
  return Notifications.find({
    receiver: this.userId
  });
});
