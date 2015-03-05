Template.bookmarkSetting.events({
  'change .import': function(events, tmp) {
    if (confirm("Are you sure?", "Confirm your Importation(s)")) {
      var files = events.target.files;
      $("#progressBar").attr("max", files.length);
      var reader = new FileReader();
      for (var x = 0, x; x < files.length; x++) {
        $("#progressBar").attr("value", x);
        var file = files[x];
        reader.onload = function(events) {
          var str = reader.result;
          var data = EJSON.parse(str);
          if (data) {
            _.each(data.bookmarks, function(bookmark) {
              bookmark.userId = Meteor.userId();
              Meteor.call("bookmarkUpdate", bookmark, "");
            });
            _.each(data.favorites, function(favorite) {
              Meteor.call("addToFavorites", favorite.favorite);
            });
          }
        }
        reader.readAsText(file);
      }
      $("#progressBar").attr("value", files.length);
    }
  },

  'click .btn-clean': function() {
    Meteor.call("deleteNotifications", Meteor.userId());
  }
});

Template.bookmarkSetting.helpers({
  'listNotifications': function() {
    return Notifications.find({
      history: true
    }, {
      sort: {
        date: -1
      }
    });
  },

  'notificationCount': function() {
    return Notifications.find({
      history: true
    }).count();
  }
});
