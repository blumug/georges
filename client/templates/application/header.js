var delayed;
Template.header.events({

  'input #tagSearch': function(e) {
    console.log('input #tagSearch')
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

  'click .search': function (e) {
    e.preventDefault();
    $('#tagSearch').focus();
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
    return Favorites.find();
  }
})

Template.optionDropdown.helpers({
  'query': function() {
    var query = this.favorite;
    query = query.replace(/#/g, '%23');
    return query;
  }
})