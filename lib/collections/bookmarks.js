Bookmarks = new Mongo.Collection('bookmarks');

Bookmarks.allow({
  insert: function(userId, doc) {
    return !!userId;
  },

  remove: function(userId, doc) {
    return ownsBookmarks(userId, post);
  },

  update: function(userId, doc) {
    return ownsBookmarks(userId, post);
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

    var bookmarkWithSameUrl = Bookmarks.findOne({
      url: bookmark.url,
      userId: bookmark.userId
    });

    if (bookmarkWithSameUrl) {
      return {
        success: false,
        url: bookmark.url,
        message: "Bookmark already exist"
      }
    }

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

    var retry = 0;
    var maxRetry = 10;
    var delay = 4 * 1000;

    var _id = Bookmarks.insert(new_bookmark);

    if (!Meteor.isServer) {
      return {
        success: true,
        url: new_bookmark.url,
        message: "Successful"
      }
    }

    Meteor.call("analyzeText", new_bookmark.url, function(error, result) {
      var id = result;

      var check = function(id) {
        Meteor.call("getText", id, function(error, result) {
          retry++;
          if (retry >= maxRetry) {
            console.log("analyzeText Failed");
          } else if (result.status == "finished") {
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
    return {
      success: true,
      url: new_bookmark.url,
      message: "Successful"
    }
  },
  'bookmarkUpdate': function(bookmark, id) {
    check(id, String);

    var result = {
      message: "failed you are not the owner",
      url: "",
      success: ""
    };
    if (!id && Bookmarks.find({
      userId: Meteor.userId(),
      url: bookmark.url
    }).count() == 0) {
      result.message = "New bookmark: " + id;
      Bookmarks.insert(bookmark);
    } else {
      result.message = "Update bookmark: " + id;
      Bookmarks.update({
        _id: id
      }, {
        $set: bookmark
      });
    }

    result.success = true;
    result.url = bookmark.url;
    return result;
  },

  'removeBookmark': function(id) {
    check(id, String);
    Bookmarks.remove(id);
    return {
      success: true,
      url: id,
      message: "Remove success"
    }
  },

  'removeBookmarkByUrl': function(url, id) {
    check(url, String);
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
    console.log("Finf bookmark: " + url);
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