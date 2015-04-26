var parseFilterString = function (filter) {

  var tags = [];
  var groups = [];
  var terms = [];
  if (filter) {
    var tokens = filter.split(' ');
    _.each(tokens, function (token) {
      if (token.length == 0) {
        return;
      }
      if (token[0] == '#') {
        tags.push(token.substr(1));
      } else if (token[0] == '@') {
        groups.push(token.substr(1));
      } else {
        terms.push(token);
      }
    });
  }
  return {
    terms: terms.join(" "),
    tags: tags,
    groups: groups
  }
};

Meteor.publish('bookmarks', function(option, filter) {
  if (!this.userId) {
    return;
  }

  var parsedFilter = parseFilterString(filter);

  if (_.isEmpty(option.sort)) {
    option.sort = {dateCreated: -1};
  }

  var tab = [];
  var user = Meteor.users.findOne(this.userId);
  var groupsId = [];
  var members = Members.find({
    email: user.emails[0].address,
    accepted: true
  }).fetch();

  _.each(members, function(member) {
    groupsId.push(member.groupId);
  });
  var groups = Groups.find({
    $or: [{
      creator: this.userId
    }, {
      _id: {
        $in: groupsId
      }
    }]
  }).fetch();
  for (var i = 0; i < groups.length; i++) {
    tab.push(groups[i]._id);
  }
  console.log(parsedFilter);

  var queryTerms;
  var queryTags;
  var queryGroups;

  if (parsedFilter.terms) {
    queryTerms = [{
      url: {
        $regex: parsedFilter.terms,
        $options: "si"
      }
    }, {
      title: {
        $regex: parsedFilter.terms,
        $options: "si"
      }
    }, {
      description: {
        $regex: parsedFilter.terms,
        $options: "si"
      }
    }];
  }
  if (parsedFilter.tags.length > 0) {
    queryTags = [{
      tags: {
        $in: parsedFilter.tags
      }
    }];
  }
  if (parsedFilter.groups.length > 0) {
    queryGroups = [
      {
        groups: {
          $elemMatch: {
            name: {
              $in: parsedFilter.groups
            }
          }
        }
      }
    ];
  }

  var query = {
    $and: [{
      $or: [{
        userId: this.userId
      }, {
        groups: {
          $elemMatch: {
            _id: {
              $in: tab
            }
          }
        }
      }]}, {
      $or: []
    }]
  };

  if (queryTerms) {
    query.$and[1].$or = query.$and[1].$or.concat(queryTerms);
  }
  if (queryTags) {
    query.$and[1].$or = query.$and[1].$or.concat(queryTags);
    console.log('foo')
  }
  if (queryGroups) {
    query.$and[1].$or = query.$and[1].$or.concat(queryGroups);
  }

  if (query.$and[1].$or.length == 0) {
    return (Bookmarks.find({
      $or: [{
        userId: this.userId
      }, {
        groups: {
          $elemMatch: {
            _id: {
              $in: tab
            }
          }
        }
      }]
    }, option));
  }
  return Bookmarks.find(query, option);
});


Meteor.publish('bookmark', function(id) {
  check(id, String);
  return Bookmarks.find(id);
});

Meteor.publish('myBookmark', function() {
  return Bookmarks.find({
    userId: this.userId
  });
});
