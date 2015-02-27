Meteor.publish('bookmarks', function(option, filter) {
  var tab = [];
  var user = Meteor.users.findOne(this.userId);
  var membersId = [];
  var members = Members.find({
    email: user.emails[0].address,
    accepted: true
  }).fetch();

  _.each(members, function(member) {
    membersId.push(member._id);
  });
  var groups = Groups.find({
    $or: [{
      creator: this.userId
    }, {
      members: {
        $in: membersId
      }
    }]
  }).fetch();
  for (var i = 0; i < groups.length; i++) {
    tab.push(groups[i]._id);
  };

  if (!filter || filter === '') {
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
  } else {
    if (filter.indexOf("#") != -1) {
      var parsedTags = ParsedTags(filter);
      return Bookmarks.find({
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
        }],
        tags: {
          $in: parsedTags
        }
      }, option)
    } else if (filter.indexOf("@") != -1) {
      var parsedGroups = ParsedGroupsToTable(filter);
      return Bookmarks.find({
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
        }],
        groups: {
          $elemMatch: {
            name: {
              $in: parsedGroups
            }
          }
        }
      }, option)
    } else {
      return Bookmarks.find({
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
        }],
        $or: [{
          url: {
            $regex: filter,
            $options: "si"
          }
        }, {
          title: {
            $regex: filter,
            $options: "si"
          }
        }, {
          description: {
            $regex: filter,
            $options: "si"
          }
        }, {
          tags: {
            $regex: filter,
            $options: "si"
          }
        }, {
          groups: {
            $elemMatch: {
              name: {
                $regex: filter,
                $options: "si"
              }
            }
          }
        }]
      }, option);
    }
  }
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
