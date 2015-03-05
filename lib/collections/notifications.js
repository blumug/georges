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
    if (!email && !group && !Meteor.isClient) {
      return;
    }
    var user = Meteor.users.findOne({
      emails: {
        $elemMatch: {
          address: email
        }
      }
    });
    Notifications.update({
      receiver: user._id,
      sender: Meteor.userId(),
      group: {
        name: group.name,
        groupId: group._id
      },
      history: false,
      type: "subscribing"
    }, {
      receiver: user._id,
      sender: Meteor.userId(),
      group: {
        name: group.name,
        groupId: group._id
      },
      date: new Date(),
      history: false,
      type: "subscribing"
    }, {
      upsert: true
    });
  },

  'createUnsubscribingNotification': function(email, group) {
    if (!email && !group && !Meteor.isClient) {
      return;
    }
    var user = Meteor.users.findOne({
      emails: {
        $elemMatch: {
          address: email
        }
      }
    });

    Notifications.update({
      receiver: user._id,
      sender: Meteor.userId(),
      group: {
        name: group.name,
        groupId: group._id
      },
      type: "unsubscribing"
    }, {
      receiver: user._id,
      sender: Meteor.userId(),
      group: {
        name: group.name,
        groupId: group._id
      },
      date: new Date(),
      history: false,
      type: "unsubscribing"
    }, {
      upsert: true
    });
  },

  'createLeavingNotification': function(group) {
    if (!group && !Meteor.isClient) {
      return;
    }
    Notifications.update({
      receiver: group.creator,
      sender: Meteor.userId(),
      group: {
        name: group.name,
        groupId: group._id
      },
      type: "leaving"
    }, {
      receiver: group.creator,
      sender: Meteor.userId(),
      group: {
        name: group.name,
        groupId: group._id
      },
      date: new Date(),
      history: false,
      type: "leaving"
    }, {
      upsert: true
    });
  },

  'createKickingNotification': function(group) {
    if (!group && !Meteor.isClient) {
      return;
    }
    var allId = GetAllIdInGroup(group);

    allId.splice(allId.indexOf(Meteor.userId()), 1);

    _.each(allId, function(id) {
      Notifications.update({
        receiver: id,
        sender: Meteor.userId(),
        group: {
          name: group.name,
          groupId: group._id
        },
        type: "kicking"
      }, {
        receiver: id,
        sender: Meteor.userId(),
        group: {
          name: group.name,
          groupId: group._id
        },
        date: new Date(),
        history: false,
        type: "kicking"
      }, {
        upsert: true
      });
    });
  },

  'createAddBookmark': function(group, bookmark) {
    if (!bookmark && !group && !Meteor.isClient) {
      return;
    }
    var allId = GetAllIdInGroup(group);

    allId.splice(allId.indexOf(Meteor.userId()), 1);

    _.each(allId, function(id) {

      Notifications.update({
        receiver: id,
        sender: Meteor.userId(),
        group: {
          name: group.name,
          groupId: group._id
        },
        bookmark: bookmark,
        type: "addBookmark"
      }, {
        receiver: id,
        sender: Meteor.userId(),
        group: {
          name: group.name,
          groupId: group._id
        },
        bookmark: bookmark,
        date: new Date(),
        history: false,
        type: "addBookmark"
      }, {
        upsert: true
      });
    });
  },

  'createDeleteBookmark': function(group, bookmark) {
    if (!bookmark && !group && !Meteor.isClient) {
      return;
    }
    var allId = GetAllIdInGroup(group);

    allId.splice(allId.indexOf(Meteor.userId()), 1);

    _.each(allId, function(id) {

      Notifications.update({
        receiver: id,
        sender: Meteor.userId(),
        bookmark: bookmark,
        group: {
          name: group.name,
          groupId: group._id
        },
        type: "deleteBookmark"
      }, {
        receiver: id,
        sender: Meteor.userId(),
        bookmark: bookmark,
        group: {
          name: group.name,
          groupId: group._id
        },
        date: new Date(),
        history: false,
        type: "deleteBookmark"
      }, {
        upsert: true
      });
    });
  },

  'createEditBookmark': function(group, bookmark) {
    if (!bookmark && !group && !Meteor.isClient) {
      return;
    }
    var allId = GetAllIdInGroup(group);

    allId.splice(allId.indexOf(Meteor.userId()), 1);

    _.each(allId, function(id) {
      Notifications.update({
        receiver: id,
        sender: Meteor.userId(),
        bookmark: bookmark,
        group: {
          name: group.name,
          groupId: group._id
        },
        type: "editBookmark"
      }, {
        receiver: id,
        sender: Meteor.userId(),
        bookmark: bookmark,
        group: {
          name: group.name,
          groupId: group._id
        },
        date: new Date(),
        history: false,
        type: "editBookmark"
      }, {
        upsert: true
      });
    });
  },

  'pushToHistory': function(notificationId) {
    Notifications.update({
      _id: notificationId
    }, {
      $set: {
        history: true
      }
    })
  }
});

GetAllIdInGroup = function(group) {
  var tabId = [];
  var members = Members.find({
    groupId: group._id,
    accepted: true
  }).fetch();

  tabId.push(group.creator);
  _.each(members, function(member) {
    var user = Meteor.users.findOne({
      emails: {
        $elemMatch: {
          address: member.email
        }
      }
    })
    tabId.push(user._id);
  });
  return tabId;
}
