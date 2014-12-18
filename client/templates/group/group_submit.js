Template.groupSubmit.events({
	'submit form': function(events) {
		events.preventDefault();
		var name = $(events.target).find('[name=nameGroup]').val();

		if (name) {
			Meteor.call("createGroup", name, Meteor.userId(), function(error, resultat) {
				if (resultat) {
					Meteor.call("createInvitationNotification", Groups.findOne(resultat))
					Router.go('/groupPage/' + resultat);
				}
			});
		} else {
			Router.go('bookmarksList');
		}
	}
})