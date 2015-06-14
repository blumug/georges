Bookmarks = new Mongo.Collection('bookmarks');

Bookmarks.allow({
  insert: function(userId, doc) {
    return !!userId;
  },

  remove: function(userId, doc) {
    return ownsBookmarks(userId, doc);
  },

  update: function(userId, doc) {
    return ownsBookmarks(userId, doc);
  }
});

Meteor.methods({
  'bookmarkInsert': function(bookmark) {
    check(bookmark, {
      url: String,
      title: String,
      groups: Array,
      tags: Array,
      description: String,
      userId: String
    });

    UpdateTagCollections(bookmark);
    var id;
    var new_bookmark = _.extend(bookmark, {
      dateCreated: new Date(),
      dateModified: new Date(),
      counterView: 0,
      counterClick: 0,
      summary: {
        id: "",
        status: "empty",
        text: "",
        readable: "",
      },
      thumbnail: ""
    });

    var existingBookmark = Bookmarks.findOne({
      url: new_bookmark.url,
      userId: new_bookmark.userId
    });
    var message;
    if (!existingBookmark) {
      message = 'bookmark added';
      id = Bookmarks.insert(new_bookmark);
    } else {
      id = existingBookmark._id;
      message = 'bookmark updated';
    }
    new_bookmark._id = id;

    _.each(new_bookmark.groups, function(group) {
      Meteor.call("createAddBookmark", group, {
        _id: new_bookmark._id,
        url: new_bookmark.url
      });
    });
    if (Meteor.isServer) {
      AnalyzeText(new_bookmark, id);
    }

    return {
      success: true,
      url: new_bookmark.url,
      message: message
    };

  },


  'bookmarkUpdate': function(bookmark, id) {
    check(id, String);
    var oldBookmark = Bookmarks.findOne({
      _id: id
    });

    if (oldBookmark) {
      EmptyTagsCollections(oldBookmark)
      UpdateTagCollections(bookmark);
      _.each(bookmark.groups, function(group) {
        Meteor.call("createEditBookmark", group, {
          _id: id,
          url: bookmark.url
        });
      });
      Bookmarks.update({
        _id: id
      }, {
        $set: bookmark

      });
    } else {
      Meteor.call("bookmarkInsert", bookmark);
    }
  },

  'bookmarkImport': function(bookmark) {
    if (Bookmarks.find({userId: bookmark.userId, url: bookmark.url}).count() == 0) {
      Bookmarks.insert(bookmark);
    }
    UpdateTagCollections(bookmark);
  },

  'removeBookmark': function(id) {
    check(id, String);
    var bookmark = Bookmarks.findOne(id);
    _.each(bookmark.groups, function(group) {
      Meteor.call("createDeleteBookmark", group, {
        _id: id,
        url: bookmark.url
      });
    });
    EmptyTagsCollections(Bookmarks.findOne(id));
    Bookmarks.remove(id);
    return {
      success: true,
      url: id,
      message: "bookmark deleted"
    }
  },

  'removeBookmarkByUrl': function(url, id) {
    check(url, String);
    var bookmark = Bookmarks.findOne({
      userId: id,
      url: url
    });

    _.each(bookmark.groups, function(group) {
      Meteor.call("createDeleteBookmark", group, {
        _id: id,
        url: bookmark.url
      });
    });
    EmptyTagsCollections(bookmark);
    Bookmarks.remove(bookmark);
    return {
      success: true,
      url: url,
      message: "bookmark deleted"
    }
  },

  'addTagToBookmark': function(url, id, tags) {
    check(url, String);
    var bookmark = Bookmarks.findOne({
      userId: id,
      url: url
    });

    console.log("existing bookmarks " + bookmark.tags);
    console.log("new bookmark " + tags);

    var new_tags = bookmark.tags.concat(tags);

    console.log("result " + new_tags);


    Bookmarks.update(bookmark._id, {$set : {"tags": new_tags}});
    UpdateTagCollections(bookmark);

    return {
      success: true,
      url: url,
      message: "tag added"
    }
  }
});

addGroupToBookmark = function(id, name) {
  var bookmark = Bookmarks.findOne(id);
  var group = Groups.findOne({
    creator: Meteor.userId(),
    name: name
  });
  if (bookmark.groups.indexOf(group._id) == -1) {
    bookmark.groups.push(group._id);
    bookmark = _.omit(bookmark, '_id');
    Bookmarks.update(id, {
      $set: bookmark
    });
    console.log(name + " added to bookmark: " + bookmark.url);
  } else {
    console.log(name + " already exist in bookmark: " + bookmark.url);
  }
}

AnalyzeText = function(new_bookmark, _id) {
  var retry = 0;
  var maxRetry = 10;
  var delay = 4 * 1000;

  Meteor.call("analyzeText", new_bookmark.url, function(error, result) {
    var id = result;

    var check = function(id) {
      Meteor.call("getText", id, function(error, result) {
        retry++;
        if (retry >= maxRetry) {
          console.log("analyzeText Failed");
        } else if (result && result.status == "finished") {
          new_bookmark.summary = result;
          Meteor.call("bookmarkUpdate", new_bookmark, _id, function(error, result) {
            console.log(error);
          });
        } else {
          Meteor.setTimeout(function() {
            check(id);
          }, delay);
        }
      });
    }
    Meteor.setTimeout(function() {
      check(id);
    }, 4000);
  });
}
