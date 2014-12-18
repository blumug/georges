Template.notifications.helpers({
	'notifications': function() {
		return Notifications.find();
	},
	'notificationCount': function() {
		return Notifications.find().count();
	}
});

Template.notificationItem.helpers({
	'message': function() {
		if (this.type == "invitation") {
			var user = Meteor.users.findOne(this.groupCreator);
			return user.emails[0].address + " souhaite vous inviter dans son groupe ";
		}
	}
});