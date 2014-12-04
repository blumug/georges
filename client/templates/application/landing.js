Template.landing.events({
    'click .logout': function() {
        Meteor.logout(function(error) {
            if (error) {
                DisplayErrorSubmit("Bad login or password");
                console.log(error);
            } else {
                DisplaySuccessSubmit("Login success");
                Router.go('/');
            }
        });
    }
})