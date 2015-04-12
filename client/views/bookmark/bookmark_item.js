Template.bookmarkItem.helpers({
  domain: function() {
    var url = this.url;
    var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var domain = matches && matches[1];
    return domain;
  },

  tags: function() {
    return this.tags;
  },

  hasTagsOrGroups: function() {
    return (this.tags && this.tags.length > 0) ||
      (this.groups && this.groups.length > 0);
  },

  hasDescription: function() {
    return this.description && this.description.length > 0;
  },

  status: function() {
    if (this.summary.text == "") return "unvisible";
    else return "";
  },
  favicon: function() {
    var url = this.url;
    pathArray = url.split('/');
    var protocol = pathArray[0];
    var host = pathArray[2];
    var domain = protocol + '//' + host;
    return domain + "/favicon.ico";
  },
  ownBookmark: function() {
    return this.userId === Meteor.userId();
  }
});
Template.bookmarkItem.events({
  'click .btnPreviewDelete': function(event) {
    var idDelete = this._id;
    bootbox.dialog({
      message: "Do you want to delete this bookmark?",
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
  },
  'click a.target': function(e, template) {
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

Template.group.events({
  'click a': function(e) {
    e.preventDefault();
    var bar = $("#tagSearch").val();
    var tag = this.name;
    if (!tag) return;
    if (tag[0] != '@') {
      tag = '@' + tag;
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
