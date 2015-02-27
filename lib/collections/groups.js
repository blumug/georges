Groups = new Mongo.Collection('groups');

// Groups.allow({
//   insert: function(userId, doc) {
//     return !!userId;
//   },
//   remove: function(userId, doc) {
//     if (!userId) {
//       return false;
//     }
//     if (userId == doc.userId) {
//       return true;
//     }
//     return false;
//   },
//   update: function(userId, doc) {
//     return !!userId;
//   }
// });

Meteor.methods({
  'createGroup': function(name, idCreator) {
    var group = {
      name: name,
      creator: idCreator,
      members: []
    };
    var id;
    if (Groups.find({
        name: name,
        creator: idCreator
      }).count() > 0) {
      console.log("Group already exist");
    } else {
      console.log("Group created");
      id = Groups.insert(group);
    }
    return id;
  },

  'removeGroup': function(name, idCreator) {
    Meteor.call("createKickingNotification", Groups.findOne({
      name: name,
      creator: idCreator
    }));
    Groups.remove({
      name: name,
      creator: idCreator
    });
  },

  'removeGroupById': function(id) {
    Meteor.call("createKickingNotification", Groups.findOne(id), function() {
      Meteor.call("deleteAllMember", id, function() {
        Groups.remove(id);
      });
    });
  },

  'leaveGroupById': function(email, groupId) {
    var memberId = Meteor.call("deleteMember", email, groupId);
    Groups.update({
      _id: groupId
    }, {
      $pull: {
        members: memberId
      }
    }, function(err) {});
    Meteor.call("createLeavingNotification", Groups.findOne({
      _id: groupId
    }));
  },

  'addMember': function(groupId, idMember, adressMember) {
    var memberId = Meteor.call("newMember", adressMember, groupId);

    Groups.update({
      _id: groupId
    }, {
      $addToSet: {
        members: memberId
      }
    }, function(err) {});

    Meteor.call("createSubscribingNotification", adressMember, Groups.findOne({
      _id: groupId
    }));
  },

  'removeMember': function(groupId, adressMember) {
    var memberId = Meteor.call("deleteMember", adressMember, groupId);
    Groups.update({
      _id: groupId
    }, {
      $pull: {
        members: memberId
      }
    }, function(err) {});
    Meteor.call("createUnsubscribingNotification", adressMember, Groups.findOne({
      _id: groupId
    }));
  }
});
