Members = new Mongo.Collection('members');

Meteor.methods({
  'newMember': function(email, groupId) {
    if (!Meteor.isClient) {
      return;
    }
    var response = Members.findAndModify({
      query: {
        email: email,
        groupId: groupId
      },
      update: {
        email: email,
        userId: Meteor.userId(),
        groupId: groupId,
        accepted: false
      },
      upsert: true,
      new: true
    });
    return response._id;
  },

  'deleteMember': function(email, groupId) {
    var response = Members.findAndModify({
      query: {
        email: email,
        groupId: groupId
      },
      remove: true
    });
    return response._id;
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
