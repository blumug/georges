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
Template.tag.events({
	'click a': function()
	{
		var bar = Session.get("searchBar");

		if (bar == undefined || bar == '' || bar.indexOf(this.toString()) != -1)
			Session.set("searchBar", bar + " " + this.toString());
	}
});