Template.bookmarkSubmit.events({
    'submit form': function(events) {
        events.preventDefault();
        var user = Meteor.user();
        if (user !== null) {
            var tags = ParsedTags($(events.target).find('[name=tags]').val());
            var groups = ParsedGroups($(events.target).find('[name=groups]').val());
            var bookmark = {
                url: $(events.target).find('[name=url]').val(),
                title: $(events.target).find('[name=title]').val(),
                description: $(events.target).find('[name=description]').val(),
                tags: tags,
                groups: groups,
                userId: user._id
            };
            if (bookmark.url.indexOf("://") == -1) bookmark.url = "http://" + bookmark.url;
            CreatedTags(tags);
            Meteor.call('bookmarkInsert', bookmark, function(error, result) {
                if (error) return alert(error.reason);
                if (!result.success) {
                    DisplayErrorSubmit(result.message);
                    return;
                }
                Router.go('/home');
            });
        } else DisplayErrorSubmit("You need to be connected.");
    }
});

Template.bookmarkSubmit.helpers({
    'allGroups': function() {
        return Groups.find();
    }
});

Template.bookmarkSubmit.rendered = function() {

    $('#groups').selectize({
        maxItems: null,
        valueField: 'id',
        labelField: 'title',
        searchField: 'title',
        create: false
    });
};