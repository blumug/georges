Members = new Mongo.Collection('members');

Meteor.methods({
  'newMember': function(email, groupId) {
    var key = {
      email: email,
      groupId: groupId
    }
    var member = Members.findOne(key);
    if (!member) {
      member = key;
    }
    Members.update(key, {$set: {accepted: false}}, {upsert: true});
  },

  'deleteMember': function(email, groupId) {
    var key = {
      email: email,
      groupId: groupId
    }
    var member = Members.findOne(key);
    if (!member) {
      return;
    }
    Members.remove(key);
  },

  'deleteAllMember': function(groupId) {
    Members.remove({
      groupId: groupId
    });
  },

  'accepting': function(email, groupId) {
    Members.update({
      email: email,
      groupId: groupId
    }, {
      $set: {
        accepted: true
      }
    });
  }
});
