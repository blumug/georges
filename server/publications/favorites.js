Meteor.publish('favorites', function() {
	return Favorites.find({
		userId: this.userId
	});
});