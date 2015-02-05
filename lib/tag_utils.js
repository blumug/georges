// parse the input "tags"
// return a list of string (tags)
// ex: "#unpeu #beaucoup #alafolie"
//  |=> [ "#unpeu", "#beaucoup", #alafolie" ]
ParsedTags = function(tags) {
  if (tags) {
    var parsedTags = [];
    for (var x = 0; x < tags.length; x++) {
        if (tags[x][0] == '#') {
          tags[x] = tags[x].substr(1);            
        }
      parsedTags.push(tags[x]);
    }
    return (parsedTags);
  }
  return [];
}

ParsedGroups = function(groups) {
    if (groups) {
      var parsedGroups = [];
      for (var x = 0; x < groups.length; x++) {
        groups[x] = groups[x].substr(1);
        var group = Groups.findOne({
          creator: Meteor.userId(),
          name: groups[x]
        });
        if (group) {
          parsedGroups.push({
            _id: group._id,
            name: group.name
          });
        }
      }
      return (parsedGroups);
    }
    return [];
  } // parse the input "groups"
  // return a list of string (groups)
  // ex: "@42favs @friends @family"
  //  |=> [ "@42favs", "@friends", "@family" ]
ParsedGroupsToTable = function(groups) {
    var parsedGroups = [];
    var splittedTags = [];
    splittedGroups = groups.split(" ");
    _.each(splittedGroups, function(group) {
      if (group.length == 0) {
        return;
      }
      if (group.length == 1 && group[0] == '@') {
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
