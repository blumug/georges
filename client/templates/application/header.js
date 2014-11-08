Template.header.events({
    'keyup #tagSearch': function(events) {
        var setFilter = function () {
            var filter = $("#tagSearch").val();
            Router.go('bookmarksList', {}, {query: {filter: filter}});
        }
        if ($("#tagSearch").val() == '') {
            setFilter();
            return;
        }
        var debounced = _.debounce(setFilter, 600);
        debounced();
    }
});
Template.header.helpers({
    'searchBar': function() {
        return Session.get("searchBar");
    }
})