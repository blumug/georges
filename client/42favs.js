Meteor.subscribe('tags');
if (Meteor.isClient) {
  Deps.autorun(function() {
    if(Accounts.loginServicesConfigured() && Meteor.userId()) {
    	Cookie.set("meteor_userid", Meteor.userId());
    	Cookie.set("meteor_logintoken", localStorage.getItem("Meteor.loginToken"));
    }
  });
}