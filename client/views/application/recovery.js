
 var trimInput = function(val) {
 	return val.replace(/^\s*|\s*$/g, "");
 }

 var isValidPassword = function(val, field) {
 	if (val.length >= 6) {
 		return true;
 	} else {
        DisplayErrorSubmit('Error. Too short.');
 		return false;
 	}
 }

 if (Accounts._resetPasswordToken) {
 	Session.set('resetPassword', Accounts._resetPasswordToken);
 }

 Template.passwordRecovery.helpers({
 	resetPassword: function(t) {
 		return Session.get('resetPassword');
 	}
 });

 Template.passwordRecovery.events({

 	'submit #recovery-form': function(e, t) {
 		e.preventDefault();
 		var email = trimInput(t.find('#recovery-email').value);

 		if (email && email) {
 			Session.set('loading', true);
 			Accounts.forgotPassword({
 				email: email
 			}, function(err) {
 				if (err) {
                    DisplayErrorSubmit('Password retrieval error: ' + err.reason);
                }
 				else {
                    DisplaySuccessSubmit('Email sent. Please check your email.');
 				}
 				Session.set('loading', false);
 			});
 		}
 		return false;
 	},

 	'submit #new-password': function(e, t) {
 		e.preventDefault();
 		var pw = t.find('#new-password-password').value;
 		if (isNotEmpty(pw) && isValidPassword(pw)) {
 			Session.set('loading', true);
 			Accounts.resetPassword(Session.get('resetPassword'), pw, function(err) {
 				if (err)
                    DisplayErrorSubmit('Password reset error: ' + err.reason);
 				else {
 					Session.set('resetPassword', null);
 				}
 				Session.set('loading', false);
 			});
 		}
 		return false;
 	}
 });