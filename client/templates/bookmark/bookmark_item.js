Template.bookmarkItem.helpers({
  tags: function() {
    return (this.tags);
  },
  status: function() {
    if (this.summary.text == "") return "unvisible";
    else return "";
  }
});
Template.bookmarkItem.events({
  'click .btnPreviewDelete': function(event) {
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
Template.titleItem.events({
  'click a': function(e) {
    e.preventDefault();
    Bookmarks.update({
      _id: this._id
    }, {
      $inc: {
        counterClick: 1
      }
    });
    var link = $(e.target).attr('href');
    window.open(link, '_blank');
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
    var filter = bar.trim();
    Router.go('bookmarksList', {}, {
      query: {
        filter: filter
      }
    });
  }
});