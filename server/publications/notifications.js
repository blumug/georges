Meteor.publish('notifications-invitation', function() {
  return Notifications.find({
    type: "invitation",
    members: {
      $elemMatch: {
        id: this.userId,
        accepted: false
      }
    }
  });
});

Meteor.publish('notifications-desinscription', function() {
  return Notifications.find({
    type: "desinscription",
    userId: this.userId,
    read: false
  });
});

Meteor.publish('notifications-message', function() {
  return Notifications.find({
    type: "message",
    members: {
      $elemMatch: {
        id: this.userId,
        accepted: true
      }
    },
    read: false
  });
});
