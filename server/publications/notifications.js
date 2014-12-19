Meteor.publish('notifications', function() {
	return Notifications.find({
		read: false,
		members: {
			$elemMatch: {
				id: this.userId
			}
		}
	});
});