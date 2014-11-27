Template.bookmarkSetting.events({
    'change .import': function(events, tmp) {
        var files = events.target.files;
        var reader = new FileReader();
        for (var x = 0, x; x < files.length; x++) {
            var file = files[x];
            reader.onload = function(events) {
                var str = reader.result;
                var data = EJSON.parse(str);
                if (data) {
                    _.each(data.bookmarks, function(bookmark) {
                        bookmark.userId = Meteor.userId();
                        Meteor.call("bookmarkUpdate", bookmark, "");
                    });
                    _.each(data.favorites, function(favorite)
                    {
                        Meteor.call("addToFavorites", favorite.favorite);
                    });
                    // alert(data.bookmarks);
                    // alert(data.favorites);
                }
            }
            reader.readAsText(file);
        }
    }
});