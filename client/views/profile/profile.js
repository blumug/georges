Meteor.users.allow({
	update: function() {
		return true;
	}
});


Template.profile.helpers({
	'mail': function() {
		return Meteor.user().emails[0].address;
	},
	'username': function() {
		return Meteor.user().profile.name;
	},
	'firstname': function() {
		return Meteor.user().profile.firstname;
	},
	'lastname': function() {
		return Meteor.user().profile.lastname;
	}
})


Template.profile.events({
	'submit .profile': function(events) {
		events.preventDefault();
		var profile = {};

		profile["name"] = $(events.target).find('[name=username]').val();
		profile["firstname"] = $(events.target).find('[name=firstname]').val();
		profile["lastname"] = $(events.target).find('[name=lastname]').val();
		Meteor.users.update({
			_id: Meteor.user()._id
		}, {
			$set: {
				emails: [{
					address: $(events.target).find('[name=mail]').val()
				}],
				profile: profile
			}
		});
	}
})