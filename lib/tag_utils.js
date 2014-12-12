// parse the input "tags"
// return a list of string (tags)
// ex: "#unpeu #beaucoup #alafolie"
//  |=> [ "#unpeu", "#beaucoup", #alafolie" ]
ParsedTags = function(tags) {
    var parsedTags = [];
    var splittedTags = [];
    splittedTags = tags.split(" ");
    _.each(splittedTags, function(tag) {
        if (tag.length == 0) {
            return;
        }
        if (tag.length == 1 && tag[0] == '#') {
            return;
        }
        if (tag[0] == '#') {
            tag = tag.slice(1);
        }
        parsedTags.push(tag.toLowerCase());
    });
    return (parsedTags);
}
// parse the input "groups"
// return a list of string (groups)
// ex: "@42favs @friends @family"
//  |=> [ "@42favs", "@friends", "@family" ]
ParsedGroups = function(groups) {
    var parsedGroups = [];
    var splittedGroups = [];
    splittedGroups = groups.split(" ");
    _.each(splittedGroups, function(group) {
        if (group.length == 0) {
            return;
        }
        if (group.length == 1 && tag[0] == '@') {
            return;
        }
        if (group[0] == '@') {
            group = group.slice(1);
        }
        parsedGroups.push(group.toLowerCase());
    });
    return (parsedGroups);
}
// created new Element od collection Tags
// or up the value counterWrite of the element
// return void
CreatedTags = function(arrayTags) {
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