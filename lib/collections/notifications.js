Notifications = new Mongo.Collection("notifications");

Meteor.methods({
  'createSubscribingNotification': function(email, group) {
    var user = Meteor.users.find({
      emails: {
        $elemMatch: {
          address: email
        }
      }
    });

    Notifications.insert({
      receiver: user._id,
      sender: Meteor.userId(),
      group: group,
      type: "subscribing",
      read: false
    });
  },

  'createUnsubscribingNotification': function(email, group) {
    var user = Meteor.users.find({
      emails: {
        $elemMatch: {
          address: email
        }
      }
    });

    Notifications.insert({
      receiver: user._id,
      sender: Meteor.userId(),
      group: group,
      type: "unsubscribing",
      read: false
    });
  },

  'createLeavingNotification': function(group) {
    var allId = GetAllIdInGroup(group);

    allId.split(allId.indexOf(Meteor.userId(), 1));

    _.each(allId, function(id) {
      Notifications.insert({
        receiver: id,
        sender: Meteor.userId(),
        group: group,
        type: "leaving",
        read: false
      });
    });
  },

  'createKickingNotification': function(group) {
    var allId = GetAllIdInGroup(group);

    allId.split(allId.indexOf(Meteor.userId(), 1));

    _.each(allId, function(id) {
      Notifications.insert({
        receiver: id,
        sender: Meteor.userId(),
        group: group,
        type: "kicking",
        read: false
      });
    });
  },

  'createAddBookmark': function(group, bookmark) {
    var allId = GetAllIdInGroup(group);

    allId.split(allId.indexOf(Meteor.userId(), 1));

    _.each(allId, function(id) {
      Notifications.insert({
        receiver: id,
        sender: Meteor.userId(),
        group: group,
        type: "addBookmark",
        read: false
      });
    });
  },

  'createDeleteBookmark': function(group, bookmark) {
    var allId = GetAllIdInGroup(group);

    allId.split(allId.indexOf(Meteor.userId(), 1));

    _.each(allId, function(id) {
      Notifications.insert({
        receiver: id,
        sender: Meteor.userId(),
        group: group,
        type: "deleteBookmark",
        read: false
      });
    });
  },

  'createEditBookmark': function(group, bookmark) {
    var allId = GetAllIdInGroup(group);

    allId.split(allId.indexOf(Meteor.userId(), 1));

    _.each(allId, function(id) {
      Notifications.insert({
        receiver: id,
        sender: Meteor.userId(),
        group: group,
        type: "editBookmark",
        read: false
      });
    });
  }
});

GetAllIdInGroup = function(group) {
  var tabId;

  tabId.push(group.creator);
  _.each(group.members, function(member) {
    tabId.push(member.id);
  });
  return tabId;
}
