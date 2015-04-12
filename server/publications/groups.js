Meteor.publish('groups', function() {
  var groupsId = [];
  if (this.userId) {
    var user = Meteor.users.findOne(this.userId);
    var members = Members.find({
      email: user.emails[0].address
    }).fetch();

    _.each(members, function(member) {
      groupsId.push(member.groupId);
    });
  }
  return Groups.find({
    $or: [{
      creator: this.userId
    }, {
      _id: {
        $in: groupsId
      }
    }]
  });
});

Meteor.publish('groupPage', function(id) {
  check(id, String);
  return Groups.find(id);
});
