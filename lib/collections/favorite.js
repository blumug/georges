Favorites = new Mongo.Collection('favorites');

Meteor.methods({
    'addToFavorites': function(favorite) {
    	check(favorite, String);
    	var newFavorite = {
    		favorite: favorite,
    		userId: Meteor.userId()
    	}
        console.log("New favorite add: " + newFavorite.favorite);
    	Historical.insert(newFavorite);
    },
    'removeToFavorites': function(oldFavorite) {
        check(oldFavorite.favorite, String);
        console.log("Favorite remove: " + oldFavorite.favorite);
        Bookmarks.remove({userId: oldFavorite.userId, favorite: oldFavorite.favorite});
    }
});