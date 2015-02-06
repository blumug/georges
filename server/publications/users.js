Meteor.publish('allUser', function() {
  var options = {
    fields: {
      profile: 1,
      emails: 1
    }
  };
  return Meteor.users.find({}, options);
});
