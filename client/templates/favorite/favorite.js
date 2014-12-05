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
    var sortName = "";
    var sortValue = 0;
    if (Meteor.isClient) {
      sortName = Session.get("sortName");
      sortValue = Session.get("sortValue");
    }
    if (Favorites.find({
      userId: Meteor.userId(),
      favorite: $("#tagSearch").val(),
      sortName: sortName,
      sortValue: sortValue
    }).count() > 0) {
      return "Delete";
    } else {
      return "Save query";
    }
  },
  'search': function() {
    return Session.get("searchBar");
  },
  'myUnvisibility': function() {
    if (Session.get("searchBar") === undefined || Session.get("searchBar") === "")
      return "myUnvisibility";
    else
      return "";
  }
});