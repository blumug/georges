Meteor.publish('groups', function() {
  var membersId = [];
  if (this.userId) {
    var user = Meteor.users.findOne(this.userId);
    var members = Members.find({
      email: user.emails[0].address
    }).fetch();

    _.each(members, function(member) {
      membersId.push(member._id);
    });
  }
  return Groups.find({
    $or: [{
      creator: this.userId
    }, {
      members: {
        $in: membersId
      }
    }]
  });
});

Meteor.publish('groupPage', function(id) {
  check(id, String);
  return Groups.find(id);
});
