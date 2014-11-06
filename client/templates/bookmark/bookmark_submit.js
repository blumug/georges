Template.bookmarkSubmit.events({
    'submit form': function(events) {
        events.preventDefault();
        var user = Meteor.user();
        if (user !== null) {
            var tags = ParsedTags($(events.target).find('[name=tags]').val());
            var bookmark = {
                url: $(events.target).find('[name=url]').val(),
                title: $(events.target).find('[name=title]').val(),
                description: $(events.target).find('[name=description]').val(),
                tags: tags,
                userId: user._id
            };
            if (bookmark.url.indexOf("://") == -1) bookmark.url = "http://" + bookmark.url;
            CreatedTags(tags);
            Meteor.call('bookmarkInsert', bookmark, function(error, result) {
                if (error) return alert(error.reason);
                if (result.bookmarkExists) DisplayErrorSubmit("This url does already exist in your list.");
                Router.go('/');
            });
        } else DisplayErrorSubmit("You need to be connected.");
    }
});