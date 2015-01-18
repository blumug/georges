GotoHome = function() {
  var filter = $("#tagSearch").val();
  Router.go('bookmarksList', {}, {
    query: {
      filter: filter
    }
  });
}
