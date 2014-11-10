var delayed;

Template.header.events({
  'keyup #tagSearch': function(events) {
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

  'keydown #tagSearch': function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  }
});
Template.header.helpers({
  'searchBar': function() {
    return Session.get("searchBar");
  }
})