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
    Groups.remove({
      name: name,
      creator: idCreator
    });
  },
  'removeGroupById': function(id) {
    Groups.remove(id);
  },
  'addMember': function(id, idMember, adressMember) {
    var group = Groups.findOne(id);
    var id = group._id;
    var member = {};

    member["id"] = idMember;
    member["name"] = adressMember;
    member["accepted"] = false;
    group = _.omit(group, "_id");
    group.members.push(member);
    Groups.update(id, group);
    var notification = Notifications.findOne({
      groupId: id
    });
    Notifications.update(notification, {
      $set: {
        members: group.members
      }
    });
  },
  'removeMember': function(idGroup, name) {
    var group = Groups.findOne(idGroup);
    var index = group.members.indexOf(name);

    if (index != -1) {
      group.members.splice(index, 1);
    }
    Groups.update(idGroup, {
      $set: {
        group: group
      }
    });
    var notification = Notifications.findOne({
      groupId: idGroup
    });
    Notifications.update(notification, {
      $set: {
        members: group.members
      }
    });
  }
});