Notifications = new Mongo.Collection("notifications");

Notifications.allow({
	update: function(userId, doc) {
		return !!userId;
	}
});

Meteor.methods({
	'createInvitationNotification': function(group) {
		Notifications.insert({
			members: group.members,
			groupId: group._id,
			message: Meteor.user().emails[0].address + " souhaite vous inviter dans son groupe.",
			groupCreator: group.creator,
			type: "invitation",
			read: false
		});
	},
	'createDesinscriptionNotification': function(userId, group, message) {
		Notifications.insert({
			userId: userId,
			groupId: group._id,
			groupCreator: group.creator,
			message: message,
			type: "desinscription",
			read: false
		});
	},
});