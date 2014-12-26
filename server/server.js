Meteor.startup(function() {

    Houston.add_collection(Meteor.users);
    Houston.add_collection(Houston._admins);
    Houston.add_collection(Notifications);
    try {
      Houston.add_collection(Bookmarks);
    }
    catch (err) {
      
    }
    Houston.add_collection(Groups);
    Houston.add_collection(Tags);
    Houston.add_collection(Favorites);

    if (Meteor.users.find().count() === 0) {
        _.each(Meteor.settings.users, function(user) {
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
});