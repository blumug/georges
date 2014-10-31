Template.bookmarkPage.events({
    'submit form': function(events) {
        events.preventDefault();
        var user = Meteor.user();
        if (user !== null) {
            var tags = parsedTags($(events.target).find('[name=tags]').val());
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
            createdTags(tags);
            Bookmarks.remove(this._id);
            Bookmarks.insert(bookmark);
            Router.go('/');
        } else {
            var e = $('<div class="alert alert-dismissable alert-warning"><button type="button" class="close" data-dismiss="alert">×</button><h4>Warning!</h4><p>You need to be connected.</p></div>');
            $("#alertConnexion").append(e);
            e.attr('id', 'myid');
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
    return tags.join(" ");
});
// parse the input "tags"
// return a list of string (tags)
// ex: "#unpeu #beaucoup #alafolie"
//  |=> [ "#unpeu", "#beaucoup", #alafolie" ]
var parsedTags = function(tags) {
    var parsedTags = [];
    var i = 0;
    var x = 0;
    var y;
    while (tags !== "" && y != -1) {
        x = tags.indexOf("#");
        y = x++;
        while (y != -1 && x < tags.length && tags[x] != ' ' && tags[x] != '#') x++;
        if (y != -1 && (tags[x] == ' ' || tags[x] == '#' || x >= tags.length)) {
            parsedTags[i++] = tags.substr(y, x);
            tags = tags.substr(x);
        }
    }
    return (parsedTags);
}
// created new Element od collection Tags
// or up the value counterWrite of the element
// return void
var createdTags = function(arrayTags) {
    var x = 0;
    var newTag = {
        name: "",
        counterWrite: 1
    };
    while (x < arrayTags.length) {
        var tag = Tags.findOne({
            name: arrayTags[x]
        });
        if (tag == undefined) {
            newTag.name = arrayTags[x]
            Tags.insert(newTag);
        } else {
            Meteor.call("upCounterWrite", tag._id);
        }
        x++;
    }
}