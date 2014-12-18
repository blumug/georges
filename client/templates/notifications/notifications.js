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

Template.notificationItem.events({
	'click .accept': function() {
		var members = this.members;

		for (var x = 0; x < members.length; x++) {
			if (Meteor.user() && members[x].name == Meteor.user().emails[0].address) {
				members[x].accepted = true;
			}
		}
		Groups.update(this.groupId, {
			$set: {
				members: members
			}
		});
		Notifications.update(this._id, {
			$set: {
				members: members,
				read: true
			}
		});
	},
	'click .refuse': function() {
		var members = this.members;

		for (var x = 0; x < members.length; x++) {
			if (Meteor.user() && members[x].name == Meteor.user().emails[0].address) {
				members.splice(x, 1);
			}
		}
		Groups.update(this.groupId, {
			$set: {
				members: members
			}
		});
		Notifications.update(this._id, {
			$set: {
				members: members,
				read: true
			}
		});
	},
})