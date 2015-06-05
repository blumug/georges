Meteor.publish('notifications', function() {
  var options = {
    sort: {
      date: -1
    }
  };
  
  return Notifications.find({
    receiver: this.userId
  }, options);
});
