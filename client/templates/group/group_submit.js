Template.groupSubmit.events({
	'submit form': function(events) {
		var name = $(events.target).find('[name=nameGroup]').val();

		if (name) {
			Meteor.call("createGroup", name, Meteor.userId(), function() {
			});
		}
	}
})