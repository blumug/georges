Template.notifications.helpers({
	'notifications': function() {
		return Notifications.find();
	},
	'notificationCount': function() {
		return Notifications.find().count();
	}
});

Template.notifications.events({
	'blur .btn-notifications': function() {
		var notifications = Notifications.find().fetch();
		for (var x = 0; x < notifications.length; x++) {
			Notifications.update(notifications[x]._id, {
				$set: {
					read: true
				}
			});
		}
	}
});

Template.notificationItem.helpers({
	'isInvitation': function() {
		if (this.type == "invitation") {
			return true;
		} else {
			return false;
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