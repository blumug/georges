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
        if (groups[x][0] == '@') {
          groups[x] = groups[x].substr(1);
        }
        parsedGroups.push(groups[x]);
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
    var newUserTag = {
      name: "",
      userId: Meteor.userId(),
      count: 1
    };
    var newTag = {
      name: "",
      count: 1
    };

    while (x < arrayTags.length) {

      var tag = Tags.findOne({
        name: arrayTags[x]
      });

      var userTag = UserTags.findOne({
        name: arrayTags[x],
        userId: Meteor.userId()
      });

      if (tag == undefined) {
        newTag.name = arrayTags[x];
        Tags.insert(newTag);
      } else if (userTag == undefined) {
        Meteor.call("incTags", tag._id);
      }

      if (userTag == undefined) {
        newUserTag.name = arrayTags[x];
        UserTags.insert(newUserTag);
      } else {
        Meteor.call("incTagsUser", userTag._id);
      }
      x++;
    }
  }
  // empty the bookmark of tags
EmptyTags = function(bookmark) {
  var arrayTags = bookmark.tags;
  var x = 0;

  while (x < arrayTags.length) {

    var userTag = UserTags.findOne({
      name: arrayTags[x],
      userId: Meteor.userId()
    });
    var tag = Tags.findOne({
      name: arrayTags[x]
    });

    if (userTag != undefined) {
      Meteor.call("decTagsUser", userTag._id);
    }

    userTag = UserTags.findOne({
      name: arrayTags[x],
      userId: Meteor.userId()
    });



    if (userTag != undefined && userTag.count == 0) {
      UserTags.remove(userTag._id);
      Meteor.call("decTags", tag._id);
    }

    tag = Tags.findOne({
      name: arrayTags[x]
    });

    if (tag != undefined && tag.count == 0) {
      Tags.remove(tag._id);
    }
    x++;
  }


}
