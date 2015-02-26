Groups = new Mongo.Collection('groups');

Groups.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  remove: function(userId, doc) {
    if (!userId) {
      return false;
    }
    if (userId == doc.userId) {
      return true;
    }
    return false;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

/* test */

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
    Meteor.call("createKickingNotification", Groups.findOne(id));
    Groups.remove(id);
  },
  'leaveGroupById': function(id) {
    var group = Groups.findOne({
      _id: id
    });
    Meteor.call("createLeavingNotification", group);
    var members = group.members;
    var index = -1;

    _.each(members, function(member, x) {
      if (member.id == Meteor.userId()) {
        index = x;
      }
    });

    if (index != -1) {
      members.splice(index, 1);
    }

    Groups.update({
      _id: id
    }, {
      $set: {
        members: members
      }
    });
  },

  'addMember': function(id, idMember, adressMember) {
    var group = Groups.findOne(id);
    var id = group._id;
    var member = {};

    member["id"] = idMember;
    member["name"] = adressMember;
    member["idGroup"] = id;
    member["accepted"] = false;
    group = _.omit(group, "_id");
    group.members.push(member);
    Groups.update(id, {
      $set: {
        members: group.members
      }
    });
    group._id = id;
    Meteor.call("createSubscribingNotification", adressMember, group);
  },
  'removeMember': function(idGroup, name) {
    var group = Groups.findOne(idGroup);
    index = -1;
    for (var i = 0, len = group.members.length; i < len; i++) {
      if (group.members[i].name === name) {
        index = i;
        break;
      }
    }

    if (index != -1) {
      group.members.splice(index, 1);
    }
    Groups.update(idGroup, {
      $set: {
        members: group.members
      }
    });
    Meteor.call("createUnsubscribingNotification", adressMember, group);
  }
});
