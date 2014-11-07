Meteor.publish('bookmarks', function(option, filter) {
  if (!filter || filter === '') {
    return (Bookmarks.find({
      userId: this.userId
    }, option));
  } else {
    if (filter.indexOf("#") != -1) {
      var parsedTags = ParsedTags(filter);
      return Bookmarks.find({
        tags: {
          $in: parsedTags
        }
      }, {
        sort: {
          dateCreated: -1
        }
      })
    } else {
      return Bookmarks.find({
        $or: [{
          $where: "this.url.indexOf(\"" + filter + "\") != -1"
        }, {
          $where: "this.title.indexOf(\"" + filter + "\") != -1"
        }, {
          $where: "this.description.indexOf(\"" + filter + "\") != -1"
        }]
      }, options);
    }
  }
});

Meteor.publish('bookmark', function(id) {
  check(id, String);
  return Bookmarks.find(id);
});

Meteor.publish('tags', function() {
  return Tags.find();
});