Meteor.publish('groups', function() {
  return Groups.find({
    $or: [{
      creator: this.userId
    }, {
      members: {
        $elemMatch: {
          id: this.userId,
          accepted: true
        }
      }
    }]
  });
});

Meteor.publish('groupPage', function(id) {
  check(id, String);
  return Groups.find(id);
});
