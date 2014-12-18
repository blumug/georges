Notification = new Mongo.Collection("notifications");

Meteor.methods({
	'createInvitationNotification': function(group) {
		Notifications.insert({
			members: group.members,
			groupId: group._id,
			groupCreator: group.creator,
			type: "invitation",
			read: false
		});
	}
});