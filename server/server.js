Meteor.startup(function() {
    console.log("startup");
    if (Meteor.users.find().count() === 0) {
        console.log("createUser");
        _.each(Meteor.settings.users, function(user) {
            var id;
            id = Accounts.createUser({
                email: user.email,
                password: user.name,
                profile: {
                    name: user.name
                }
            });
            if (user.roles.length > 0) {
                Roles.addUsersToRoles(id, user.roles);
            }
        });
    }
});