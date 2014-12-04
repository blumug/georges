Template.login.events({
    'submit #login-form': function(e, t) {
        e.preventDefault();
        var email = t.find('#login-email').value,
            password = t.find('#login-password').value;
        Meteor.loginWithPassword(email, password, function(err) {
            if (err) {
                DisplayErrorSubmit("Bad email or password");
            } else { // The user has been logged in.
                DisplaySuccessSubmit("Login success");
                Router.go('/home');
            }
        });
        return false;
    }
});
Meteor.autorun(function() {
    // Whenever this session variable changes, run this function.
    var message = Session.get('displayMessage');
    if (message) {
        var stringArray = message.split('&amp;');
        ui.notify(stringArray[0], stringArray[1]).effect('slide').closable();
        Session.set('displayMessage', null);
    }
});
if (Accounts._resetPasswordToken) {
    Session.set('resetPassword', Accounts._resetPasswordToken);
}
trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
}
isValidPassword = function(val, field) {
    if (val.length >= 6) {
        return true;
    } else {
        Session.set('displayMessage', 'Error &amp; Too short.')
        return false;
    }
}