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
                counterView: $(events.target).find('[name=counterView]').val(),
                counterClick: $(events.target).find('[name=counterClick]').val(),
                summary: $(events.target).find('[name=summary]').val(),
                versionText: $(events.target).find('[name=versionText]').val(),
                userId: user._id
            };
            if (bookmark.url.indexOf("://") == -1) bookmark.url = "http://" + bookmark.url;
            CreatedTags(tags);
            if (this.url == bookmark.url || Bookmarks.find({
                url: bookmark.url,
                userId: bookmark.userId
            }).count() == 0) {
                Meteor.call('removeBookmark', this._id);
                Meteor.call('bookmarkUpdate', bookmark, function(error, result) {
                    if (error) return alert(error.reason);
                    Router.go('/');
                });
            } else {
                DisplayErrorSubmit("Url already use.");
            }
        } else {
            DisplayErrorSubmit("You need to be connected.");
        }
    },
    'click #btnDelete': function() {
        Bookmarks.remove(this._id);
        Router.go('/');
    }
});
Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toLocaleDateString();
});
Handlebars.registerHelper("prettifyTags", function(tags) {
  var tagString = '';
    _.each(tags, function (tag) {
      tagString = '#' + tag + ' ';
    })
    return tagString;
});