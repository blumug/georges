Template.register.events({
    'submit #register-form': function(e, t) {
        e.preventDefault();
        var email = trimInput(t.find('#account-email').value),
            password = t.find('#account-password').value;
        if (isValidPassword(password)) {
            Accounts.createUser({
                email: email,
                password: password
            }, function(err) {
                if (err) {
                    // Inform the user that account creation failed
                } else {
                    // Success. Account has been created and the user
                    // has logged in successfully. 
                    Router.go('/home');
                }
            });
        }
        return false;
    }
});