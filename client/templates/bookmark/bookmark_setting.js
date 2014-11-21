Template.bookmarkSetting.helpers({
    'rendu': function() {
        var allFavorites = Favorites.find({
            userId: Meteor.userId()
        }).fetch();
        var allFavoritesString = "[";
        for (var i = allFavorites.length - 1; i >= 0; i--) {
            allFavoritesString += EJSON.stringify(allFavorites[i]);
            if (i != 0) allFavoritesString += ",";
        };
        allFavoritesString += "]";
        return allFavoritesString;
    }
});