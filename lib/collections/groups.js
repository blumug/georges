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
    if (!userId) {
      return false;
    }
    if (userId == doc.userId) {
      return true;
    }
    return false;
  },
});

/* test */

Meteor.methods({
  'createGroup': function(name, idCreator) {
    var group = {
      name: name,
      creator: idCreator,
      members: []
    };
    if (Groups.find({
      name: name,
      creator: idCreator
    }).count() > 0) {
      console.log("Group already exist");
    } else {
      Groups.insert(group);
    }
  },
  'removeGroup': function(name, idCreator) {
    console.log("Group already exist");
    Groups.remove({
      name: name,
      creator: idCreator
    });
  },
  'addMember': function(id, adressMember) {
    var group = Groups.findOne(id);
    var id = group._id;

    group = _.omit(group, _id);
    group.members.push(name);
    Groups.update(id, group);
  },
  'removeMember': function(name) {
    var group = Groups.findOne(id);
    var id = group._id;
    var index = group.members.indexOf(name);

    group = _.omit(group, _id);
    if (index != -1) {
      group.members.splice(index, 1);
    }
    Groups.update(id, group);
  }
});