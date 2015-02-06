Meteor.publish('tags', function() {
  var tab = [];
  var bookmarks;
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
  bookmarks = Bookmarks.find({
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
  }).fetch();
  var tags = [];

  for (var i = bookmarks.length - 1; i >= 0; i--) {
  	tags = tags.concat(bookmarks[i].tags);
  };
  // return Tags.find({
  //   name: {
  //     $in: tags
  //   }
  // });
  return Tags.find();
});

Meteor.publish('user-tags', function() {
  return UserTags.find({userId: this.userId});
})