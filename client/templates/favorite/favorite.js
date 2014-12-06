Template.favorite.events({
  'click .registerFavorite': function(events) {
    if (Favorites.findOne({
      userId: Meteor.userId(),
      favorite: $("#tagSearch").val()
    })) {
      Meteor.call("removeToFavorites", $("#tagSearch").val());
    } else {
      var sortName = "";
      var sortValue = 0;
      if (Meteor.isClient) {
        sortName = Session.get("sortName");
        sortValue = Session.get("sortValue");
      }
      Meteor.call("addToFavorites", $("#tagSearch").val(), sortName, sortValue);
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
      return "Save";
    }
  },
  'search': function() {
    var search = Session.get("searchBar");
    var fav = Favorites.findOne({
      userId: Meteor.userId(),
      favorite: search
    });

    if (fav) {
      Session.set("sortValue", fav.sortValue);
      Session.set("sortName", fav.sortName);
    }
    return Session.get("searchBar");
  },
  'myUnvisibility': function() {
    if (Session.get("searchBar") === undefined || Session.get("searchBar") === "")
      return "myUnvisibility";
    else
      return "";
  }
});