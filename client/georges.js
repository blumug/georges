Meteor.subscribe('tags');
Meteor.subscribe('favorites');

if (Meteor.isClient) {

	Deps.autorun(function() {

    if (Accounts.loginServicesConfigured() && Meteor.userId()) {

      Cookie.set("meteor_userid", Meteor.userId(), {"years":10});
			Cookie.set("meteor_logintoken", localStorage.getItem("Meteor.loginToken"), {"years":"10"});
		}
	});
}