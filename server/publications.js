Meteor.publish('bookmarks', function(option, filter) {
  if (!filter || filter === '') {
    return (Bookmarks.find({
      userId: this.userId
    }, option));
  } else {
    if (filter.indexOf("#") != -1) {
      var parsedTags = ParsedTags(filter);
      return Bookmarks.find({
        userId: this.userId,
        tags: {
          $in: parsedTags
        }
      }, option)
    } else if (filter.indexOf("@") != -1) {
      var parsedGroups = ParsedGroupsToTable(filter);
      return Bookmarks.find({
        userId: this.userId,
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
        userId: this.userId,
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
Meteor.publish('allBookmarks', function() {
  return Bookmarks.find({
    userId: this.userId
  });
});
Meteor.publish('tags', function() {
  return Tags.find();
});
Meteor.publish('favorites', function() {
  return Favorites.find({
    userId: this.userId
  });
});
Meteor.publish('groups', function() {
  return Groups.find({
    creator: this.userId
  });
});
Meteor.publish('groupPage', function(id) {
  check(id, String);
  return Groups.find(id);
});
Meteor.publish('allUser', function() {
  var options = {
    fields: {
      profile: 1,
      emails: 1
    }
  };
  return Meteor.users.find({}, options);
});

Meteor.publish('notifications', function() {
  var user = Meteor.users.findOne(this.userId);
  return Notifications.find({
    read: false,
    members: {
      $elemMatch: {
        name: user.emails[0].address
      }
    }
  });
});