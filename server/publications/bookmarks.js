Meteor.publish('bookmarks', function(option, filter) {
  var tab = [];
  var groups = Groups.find({
    $or: [{
      creator: this.userId
    }, {
      members: {
        $elemMatch: {
          id: this.userId,
          accepted: true
        }
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
              $all: tab
            }
          }
        }
      }]
    }, option));
  } else {
    if (filter.indexOf("#") != -1) {
      var parsedTags = ParsedTags(filter.substr(1));
      return Bookmarks.find({
        $or: [{
          userId: this.userId
        }, {
          groups: {
            $elemMatch: {
              _id: {
                $all: tab
              }
            }
          }
        }],
        tags: {
          $in: parsedTags
        }
      }, option)
    } else if (filter.indexOf("@") != -1) {
      var parsedGroups = ParsedGroupsToTable(filter.substr(1));
      return Bookmarks.find({
        $or: [{
          userId: this.userId
        }, {
          groups: {
            $elemMatch: {
              _id: {
                $all: tab
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
                $all: tab
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