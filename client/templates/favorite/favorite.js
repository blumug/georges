Template.favorite.events({
    'click .registerFavorite': function(events) {
        if (Favorites.findOne({
            userId: Meteor.userId(),
            favorite: $("#tagSearch").val()
        })) {
            Meteor.call("removeToFavorites", $("#tagSearch").val());
        } else {
            Meteor.call("addToFavorites", $("#tagSearch").val());
        }
    }
});
Template.favorite.helpers({
    'btnFavorite': function() {
        if (Favorites.find({
            userId: Meteor.userId(),
            favorite: $("#tagSearch").val()
        }).count() > 0) {
            return "Delete";
        } else {
            return "Register";
        }
    },
    'search': function()
    {
    	return $("#tagSearch").val(); 	
    }
});