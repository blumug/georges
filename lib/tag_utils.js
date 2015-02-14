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
      var group = Groups.findOne({
        name: groups[x]
      });
      parsedGroups.push(group);
    }
    return (parsedGroups);
  }
  return [];
}

ParsedGroupsToTable = function(groups) {
  groups = ParsedGroups(groups);
  data = []
  _.each(groups, function (group) {
    data.push(group.name)
  });
  return data;
}


// Inc value count of tags and userTags
UpdateTagCollections = function(bookmark) {
  var arrayTags = bookmark.tags;
  var arrayIds = GetAllUserId(bookmark);

  _.each(arrayIds, function(id) {
    _.each(arrayTags, function(tagName) {
      Meteor.call("UpdateUserTags", tagName, id);
    });
  });
}


// Empty the bookmark of tags
// before edit bookmark
// Dec value count of tags and userTags
EmptyTagsCollections = function(bookmark) {
  var arrayTags = bookmark.tags;
  var arrayIds = GetAllUserId(bookmark);

  _.each(arrayIds, function(id) {
    _.each(arrayTags, function(tagName) {
      Meteor.call("DecrementUserTags", tagName, id);
    });
  });
}

// Get in a bookmark
// each id of each user or member
// delete double
GetAllUserId = function(bookmark) {
  var ids = [];

  if (Meteor.userId() != undefined) {
    ids.push(Meteor.userId());
  }
  _.each(bookmark.groups, function(group) {
    if (ids.indexOf(group.creator) == -1 && ids.indexOf(group.creator) != undefined) {
      ids.push(group.creator);
    }
    _.each(group.members, function(member) {
      if (ids.indexOf(member.id) == -1 && ids.indexOf(member.id) != undefined) {
        ids.push(member.id);
      }
    });
  });
  return ids;
}
