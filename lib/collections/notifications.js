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
			groupCreator: group.creator,
			type: "invitation",
			read: false
		});
	}
});