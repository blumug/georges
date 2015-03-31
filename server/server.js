Meteor.startup(function () {
  try {
    Houston.add_collection(Meteor.users);
    Houston.add_collection(Houston._admins);
  } catch (err) {
    console.log(err);
  }

  if (Meteor.users.find().count() === 0) {
    _.each(Meteor.settings.users, function (user) {
      var id;
      id = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: {
          name: user.name
        }
      });
      if (user.roles.length > 0) {
        Roles.addUsersToRoles(id, user.roles);
      }
      Houston._admins.insert({
        "user_id": id
      });
    });
  }


  Meteor.methods({

    getCGU: function() {

      var txt = Assets.getText('terms_and_conditions.txt');
      console.log("server : getCgu");
      return txt;
    }

  });

});



