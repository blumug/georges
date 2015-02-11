// parse the input "tags"
// return a list of string (tags)
// ex: "#unpeu #beaucoup #alafolie" or [ "#unpeu", "#beaucoup", #alafolie" ]
//  |=> [ "unpeu", "beaucoup", alafolie" ]
ParsedTags = function(tags) {
  if (tags) {
    var parsedTags = [];
    if (_.isString(tags) == true) {
      tags = tags.split(' ');
    }
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

// parse the input "groups"
// return a list of string (groups)
// ex: "@42favs @friends @family" or [ "@42favs", "@friends", "@family" ]
//  |=> [ "42favs", "friends", "family" ]
ParsedGroups = function(groups) {
  if (groups) {
    if (_.isString(groups) == true) {
      groups = groups.split(' ');
    }
    var parsedGroups = [];
    for (var x = 0; x < groups.length; x++) {
      if (groups[x][0] == '@') {
        groups[x] = groups[x].substr(1);
      }
      var group = Groups.findOne({name: groups[x]});
      parsedGroups.push(group);
    }
    return (parsedGroups);
  }
  return [];
}


// Inc value count of tags and userTags
UpdateTagCollections = function(arrayTags) {
  _.each(arrayTags, function(tagName) {
    if (Meteor.userId() != undefined) {
      Meteor.call("UpdateUserTags", tagName);      
    }
  });
}


// Empty the bookmark of tags
// before edit bookmark
// Dec value count of tags and userTags
EmptyTagsCollections = function(arrayTags, allId) {
  _.each(arrayTags, function(tagName) {
    if (Meteor.userId() != undefined) {
      Meteor.call("DecrementUserTags", tagName, allId);
    }
  });
}
