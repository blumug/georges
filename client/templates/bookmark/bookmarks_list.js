Template.bookmarksList.helpers({
    bookmarks: function() {
        var filter = Session.get('searchBar');
        return Bookmarks.find();
    }
});