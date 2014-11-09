Template.header.events({
    'keyup #tagSearch': function(events) {
        var setFilter = function () {
            var filter = $("#tagSearch").val();
            console.log(filter)
            Router.go('bookmarksList', {}, {query: {filter: filter}});
        }
        if ($("#tagSearch").val() == '') {
            setFilter();
            return;
        }
        var debounced = _.debounce(setFilter, 1200);
        debounced();
    },

    'keydown #tagSearch': function (e) {
        if(e.keyCode == 13) {
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