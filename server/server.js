Meteor.startup(function() {
  try {
    Houston.add_collection(Meteor.users);
    Houston.add_collection(Houston._admins);
    Houston.add_collection(Notifications);
    Houston.add_collection(Bookmarks);
    Houston.add_collection(Groups);
    Houston.add_collection(Tags);
    Houston.add_collection(Favorites);
  } catch (err) {

  }

  if (Meteor.users.find().count() === 0) {
    _.each(Meteor.settings.users, function(user) {
      var id;
      id = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: {
          name: user.name
        }
      });
      if (user.roles.length > 0) {
        Roles.addUsersToRoles(id, user.roles);
      }
      Houston._admins.insert({
        "user_id": id
      });
    });
  } else {
    var users = Meteor.users.find().fetch();

    Tags.remove();
    _.each(users, function(user) {
      var tab = [];
      var bookmarks;
      var groups = Groups.find({
        $or: [{
          creator: user._id
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
      bookmarks = Bookmarks.find({
        $or: [{
          userId: user._id
        }, {
          groups: {
            $elemMatch: {
              _id: {
                $all: tab
              }
            }
          }
        }]
      }).fetch();
      var tags = [];

      for (var i = bookmarks.length - 1; i >= 0; i--) {
        tags = tags.concat(bookmarks[i].tags);
      };

      CreatedTagsServer(tags, user._id);
    });
  }
});

CreatedTagsServer = function(arrayTags, userId) {
    var x = 0;
    var newUserTag = {
      name: "",
      userId: userId,
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
        userId: userId
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