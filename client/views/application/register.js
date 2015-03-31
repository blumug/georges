

Template.register.events({
    'submit #register-form': function (e, t) {
        e.preventDefault();

        var cguAccepted = Session.get("cguAccepted");

        if (cguAccepted != true) {

            DisplayErrorSubmit("You must agree to the terms and conditions.");
            return;
        }

        var isValidPassword = function (val, field) {
            if (val.length >= 6) {
                return true;
            } else {
                return false;
            }
        }

        var trimInput = function (val) {
            return val.replace(/^\s*|\s*$/g, "");
        }

        var email = trimInput(t.find('#account-email').value),
            password = t.find('#account-password').value;


        if (isValidPassword(password)) {
            Accounts.createUser({
                email: email,
                password: password
            }, function (err) {
                if (err) {
                    console.log(err);
                    DisplayErrorSubmit(err.reason);
                    // Inform the user that account creation failed
                } else {
                    // Success. Account has been created and the user
                    // has logged in successfully.
                    Router.go('/home');
                }
            });
        } else {
            DisplayErrorSubmit("Invalid password");
        }
        return false;
    },


    'click input#account-cgu' : function(e,t) {

        var checkbox = t.find('#account-cgu');
        var checked = $(checkbox).prop("checked");
        var button = t.find('input[type="submit"]');

        if (checked === true) {

            Session.set('cguAccepted', true);
            $(button).removeClass("disabled");
        }
        else {

            Session.set('cguAccepted', null);
            $(button).addClass("disabled");
        }
    }

});


Template.modalCGU.helpers({

  'getCGU' : function() {

    Meteor.call('getCGU', function(err, result) {

      if (err)
        return;
      Session.set('CGU', result);
    });
    return Session.get('CGU');
  }
});

