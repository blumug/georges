var delayed;
Template.header.events({
  'input #tagSearch': function(e) {
    Session.set("searchBar", $("#tagSearch").val());
    if (delayed) {
      clearTimeout(delayed);
    }
    var setFilter = function() {
      var filter = $("#tagSearch").val();
      Router.go('bookmarksList', {}, {
        query: {
          filter: filter
        }
      });
    }
    if ($("#tagSearch").val() == '') {
      setFilter();
      return;
    }
    delayed = _.delay(setFilter, 800);
  },
  'click #cleanSearch': function(e) {
    document.getElementById("tagSearch").value = "";
    var filter = document.getElementById("tagSearch").value;
    Router.go('bookmarksList', {}, {
      query: {
        filter: filter
      }
    });
  }
});
Template.header.helpers({
  'searchBar': function() {
    return Session.get("searchBar");
  },
  'listFavorite': function() {
    return Favorites.find({
      userId: Meteor.userId()
    });
  }
})