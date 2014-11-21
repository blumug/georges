Template.bookmarkPage.events({
  'submit form': function(events) {
    events.preventDefault();
    var user = Meteor.user();
    if (user !== null) {
      var tags = ParsedTags($(events.target).find('[name=tags]').val());
      var bookmark = {
        url: $(events.target).find('[name=url]').val(),
        title: $(events.target).find('[name=title]').val(),
        description: $(events.target).find('[name=description]').val(),
        thumbnail: $(events.target).find('[name=thumbnail]').val(),
        tags: tags,
        dateCreated: this.dateCreated,
        dateModified: new Date(),
        counterView: this.counterView,
        counterClick: this.counterView,
        summary: this.summary,
        userId: user._id
      };
      if (bookmark.url.indexOf("://") == -1) bookmark.url = "http://" + bookmark.url;
      CreatedTags(tags);
      if (this.url == bookmark.url || Bookmarks.find({
          url: bookmark.url,
          userId: bookmark.userId
        }).count() == 0) {
        Meteor.call('bookmarkUpdate', bookmark, this._id, function(error, result) {
          if (error) return alert(error.reason);
          if (!result.success) {
            DisplayErrorSubmit(result.message);
            return;
          }
          Router.go('/');
        });
      } else {
        DisplayErrorSubmit("Url already use.");
      }
    } else {
      DisplayErrorSubmit("You need to be connected.");
    }
  },
  'click .btnDelete': function() {
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
            Router.go('/');
          }
        }
      }
    });
  }
});

Handlebars.registerHelper("prettifyDate", function(timestamp) {
  return new Date(timestamp).toLocaleDateString();
});

Handlebars.registerHelper("prettifyTags", function(tags) {
  var tagString = '';
  _.each(tags, function(tag) {
    tagString = '#' + tag + ' ' + tagString;
  })
  return tagString.trim();
});