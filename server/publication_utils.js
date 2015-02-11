GetMyAllTags = function(id) {
  var tabOfIdGroup = [];
  var bookmarks = [];
  var tags = [];
  var groups = [];


  groups = Groups.find({
    $or: [{
      creator: id
    }, {
      members: {
        $elemMatch: {
          id: id,
          accepted: true
        }
      }
    }]
  }).fetch();

  _.each(groups, function(group) {
    tabOfIdGroup.push(group._id);
  });

  bookmarks = Bookmarks.find({
    $or: [{
      userId: id
    }, {
      groups: {
        $elemMatch: {
          _id: {
            $all: tabOfIdGroup
          }
        }
      }
    }]
  }).fetch();

  _.each(bookmarks, function(bookmark) {
    tags = tags.concat(bookmark.tags);
  });

  return tags;
}