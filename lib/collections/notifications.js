Notifications = new Mongo.Collection("notifications");

Notifications.allow({
  remove: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

Meteor.methods({
  'createSubscribingNotification': function(email, group) {
    var user = Meteor.users.findOne({
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
      type: "subscribing"
    });
  },

  'createUnsubscribingNotification': function(email, group) {
    var user = Meteor.users.findOne({
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
      type: "unsubscribing"
    });
  },

  'createLeavingNotification': function(group) {
    var allId = GetAllIdInGroup(group);

    allId.splice(allId.indexOf(Meteor.userId()), 1);

    _.each(allId, function(id) {
      Notifications.insert({
        receiver: id,
        sender: Meteor.userId(),
        group: group,
        type: "leaving"
      });
    });
  },

  'createKickingNotification': function(group) {
    var allId = GetAllIdInGroup(group);

    allId.splice(allId.indexOf(Meteor.userId()), 1);

    _.each(allId, function(id) {
      Notifications.insert({
        receiver: id,
        sender: Meteor.userId(),
        group: group,
        type: "kicking"
      });
    });
  },

  'createAddBookmark': function(group, bookmark) {
    var allId = GetAllIdInGroup(group);

    allId.splice(allId.indexOf(Meteor.userId()), 1);

    _.each(allId, function(id) {
      var num = Notifications.find({
        receiver: id,
        sender: Meteor.userId(),
        bookmark: bookmark,
      }).count();

      if (num == 0) {
        Notifications.insert({
          receiver: id,
          sender: Meteor.userId(),
          group: group,
          bookmark: bookmark,
          type: "addBookmark"
        });
      }
    });
  },

  'createDeleteBookmark': function(group, bookmark) {
    var allId = GetAllIdInGroup(group);

    allId.splice(allId.indexOf(Meteor.userId()), 1);

    _.each(allId, function(id) {
      var num = Notifications.find({
        receiver: id,
        sender: Meteor.userId(),
        bookmark: bookmark,
      }).count();

      if (num == 0) {
        Notifications.insert({
          receiver: id,
          sender: Meteor.userId(),
          bookmark: bookmark,
          group: group,
          type: "deleteBookmark"
        });
      }
    });
  },

  'createEditBookmark': function(group, bookmark) {
    var allId = GetAllIdInGroup(group);

    allId.splice(allId.indexOf(Meteor.userId()), 1);

    _.each(allId, function(id) {
      var num = Notifications.find({
        receiver: id,
        sender: Meteor.userId(),
        bookmark: bookmark,
      }).count();

      if (num == 0) {
        Notifications.insert({
          receiver: id,
          sender: Meteor.userId(),
          bookmark: bookmark,
          group: group,
          type: "editBookmark"
        });
      }
    });
  }
});

GetAllIdInGroup = function(group) {
  var tabId = [];

  tabId.push(group.creator);
  _.each(group.members, function(member) {
    tabId.push(member.id);
  });
  return tabId;
}
