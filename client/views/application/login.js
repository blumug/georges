Template.login.events({
    'submit #login-form': function (e, t) {
        e.preventDefault();
        var email = t.find('#login-email').value,
            password = t.find('#login-password').value;
        Meteor.loginWithPassword(email, password, function (err) {
            if (err) {
                DisplayErrorSubmit("Bad email or password");
            } else {
                DisplaySuccessSubmit("Welcome back " + Meteor.user().emails[0].address);
                Router.go('/home');
            }
        });
        return false;
    }
});

if (Accounts._resetPasswordToken) {
    Session.set('resetPassword', Accounts._resetPasswordToken);
}
var trimInput = function (val) {
    return val.replace(/^\s*|\s*$/g, "");
}
var isValidPassword = function (val, field) {
    if (val.length >= 6) {
        return true;
    }
    else {
        DisplaySuccessSubmit('Error &amp; Too short.');
        return false;
    }
}