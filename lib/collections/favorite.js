Favorites = new Mongo.Collection('favorites');
Favorites.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        if (!userId) {
            return false;
        }
        if (userId == doc.userId) {
            return true;
        }
        return false;
    },
    update: function(userId, doc) {
        if (!userId) {
            return false;
        }
        if (userId == doc.userId) {
            return true;
        }
        return false;
    },
});
Meteor.methods({
    'addToFavorites': function(favorite) {
        check(favorite, String);
        var newFavorite = {
            favorite: favorite,
            userId: Meteor.userId()
        }
        if (Favorites.find({userId: Meteor.userId(), favorite: newFavorite.favorite}).count() == 0)
        {
            console.log("New favorite add: " + newFavorite.favorite);
            Favorites.insert(newFavorite);            
        }
        else
            console.log("Favorite already exist: " + newFavorite.favorite);            
    },
    'removeToFavorites': function(oldFavorite) {
        check(oldFavorite, String);
        console.log("Favorite remove: " + oldFavorite);
        Favorites.remove({
            userId: Meteor.userId(),
            favorite: oldFavorite
        });
    }
});