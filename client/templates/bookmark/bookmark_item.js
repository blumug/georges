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
        var idDelete = this._id;
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
                        Meteor.call("removeBookmark", idDelete);
                    }
                }
            }
        });
    }
});
Template.tag.events({
    'click a': function(e) {
        e.preventDefault();
        var bar = $("#tagSearch").val();
        var tag = this.toString();
        if (!tag) return;

        if (tag[0] != '#') {
            tag = '#' + tag;
        }
        if (bar == undefined || bar == '' || bar.indexOf(tag) == -1) {
            bar = tag + " " + bar;
        }
        var filter = bar;
        console.log('calling go')
        Router.go('bookmarksList', {}, {query: {filter: filter}});
    }
});