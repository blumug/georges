Template.bookmarkItem.helpers({
    tags: function() {
        return (this.tags);
    }
});
Template.bookmarkItem.events({
    'click #btnDelete': function() {
        Bookmarks.remove(this._id);
    },
    'click .btnPreviewDelete': function(event, tmp) {
        Session.set("id-delete", this._id);
        bootbox.dialog({
            message: "Do you want delete this bookmark",
            title: "Warning",
            buttons: {
                main: {
                    label: "Cancel",
                    className: "btn-primary"
                },
                danger: {
                    label: "Delete",
                    className: "btn-danger",
                    callback: function() {
                        Meteor.call("removeBookmark", Session.get("id-delete"));
                    }
                }
            }
        });
    }
});
Template.tag.events({
    'click a': function() {
        var bar = Session.get("searchBar");
        if (bar == undefined || bar == '' || bar.indexOf(this.toString()) != -1) Session.set("searchBar", bar + " " + this.toString());
    }
});