Meteor.publish('notifications', function() {
	return Notifications.find({
		members: {
			$elemMatch: {
				id: this.userId,
				accepted: false
			}
		}
	});
});