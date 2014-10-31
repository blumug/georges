Template.bookmarkItem.helpers({
    tags: function() {
        return (this.tags);
    }
});
Template.bookmarkItem.events({
    'click #btnDelete': function() {
        Bookmarks.remove(this._id);
    }
});