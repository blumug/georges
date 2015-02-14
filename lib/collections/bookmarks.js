Bookmarks = new Mongo.Collection('bookmarks');

NotifyGroupMembers = function(bookmark, currentUserId) {
  _.each(bookmark.groups, function(group) {
    var groupObject = Groups.findOne({name: group.name});
    _.each(group.members, function(member) {
      console.log(member)
      if (member.id != currentUserId) {
        Meteor.call("createAddBookmark", member, groupObject);
      }
    });
    if (groupObject.creator != currentUserId) {
        Meteor.call("createAddBookmark", groupObject.creator, groupObject);
    }
  });
}

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

    if (Bookmarks.findOne({
        url: bookmark.url
      })) {
      return {
        success: false,
        url: bookmark.url,
        message: "Bookmark already exist"
      }
    }

    UpdateTagCollections(bookmark);

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

    NotifyGroupMembers(bookmark, Meteor.userId());

    var _id = Bookmarks.insert(new_bookmark);

    if (!Meteor.isServer) {
      return {
        success: true,
        url: new_bookmark.url,
        message: "Successful"
      }
    }

    AnalyzeText(new_bookmark, _id);

    return {
      success: true,
      url: new_bookmark.url,
      message: "Successful"
    }
  },


  'bookmarkUpdate': function(bookmark, id) {
    check(id, String);
    var oldBookmark = Bookmarks.findOne({
      _id: id
    });

    if (oldBookmark) {
      EmptyTagsCollections(oldBookmark)
      UpdateTagCollections(bookmark);
      NotifyGroupMembers(bookmark, Meteor.userId());
      Bookmarks.update({
        _id: id
      }, {
        $set: bookmark

      });
    } else {
      Meteor.call("bookmarkInsert", bookmark);
    }
  },

  'removeBookmark': function(id) {
    check(id, String);
    EmptyTagsCollections(Bookmarks.findOne(id));
    Bookmarks.remove(id);
    return {
      success: true,
      url: id,
      message: "Remove success"
    }
  },

  'removeBookmarkByUrl': function(url, id) {
    check(url, String);
    EmptyTagsCollections(Bookmarks.findOne(id));
    Bookmarks.remove({
      userId: id,
      url: url
    });
    return {
      success: true,
      url: url,
      message: "Remove success"
    }
  },

  'findBookmark': function(url) {
    check(url, String);
    console.log("Find bookmark: " + url);
    return Bookmarks.findOne({
      url: url
    })
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