Template.notifications.helpers({
  'notifications': function() {
    return Notifications.find({
      history: false
    }, {
      sort: {
        date: -1
      }
    });
  },
  'notificationCount': function() {
    return Notifications.find({
      history: false
    }).count();
  }
});


Template.notifications.events({

  'click .btn-notifications-clear-all': function(e) {

    Meteor.call("pushToHistory", "all");
  }
});


Template.subscribingNotification.events({
  'click .accept': function() {
    var email = Meteor.user().emails[0].address;

    Meteor.call("accepting", email, this.group.groupId);
    Meteor.call("pushToHistory", this._id);
  },

  'click .refuse': function() {
    var email = Meteor.user().emails[0].address;

    Meteor.call("deleteMember", email, this.group.groupId);
    Meteor.call("pushToHistory", this._id);
  }
});

Template.unsubscribingNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Meteor.call("pushToHistory", this._id);
  }
});

Template.leavingNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Meteor.call("pushToHistory", this._id);
  }
});

Template.leavingNotification.helpers({
  'name': function() {
    var user = Meteor.users.findOne(this.sender);

    if (user) {
      return user.emails[0].address;
    } else {
      return user;
    }
  }
});

Template.subscribingNotification.helpers({
  'name': function() {
    var user = Meteor.users.findOne(this.sender);

    if (user) {
      return user.emails[0].address;
    } else {
      return user;
    }
  },

  'isHistory': function() {
    if (this.history == true) {
      return false;
    } else {
      return true;
    }
  }
});

Template.addBookmarkNotification.helpers({
  'bookmarkId': function() {
    return this.bookmark._id;
  },

  'bookmarkUrl': function() {
    return this.bookmark.url;
  }
});

Template.deleteBookmarkNotification.helpers({
  'bookmarkUrl': function() {
    return this.bookmark.url;
  }
});

Template.editBookmarkNotification.helpers({
  'bookmarkId': function() {
    return this.bookmark._id;
  },

  'bookmarkUrl': function() {
    return this.bookmark.url;
  }
});

Template.kickingNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Meteor.call("pushToHistory", this._id);
  }
});

Template.addBookmarkNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Meteor.call("pushToHistory", this._id);
  },

  'click .btn-bookmark': function() {
    Meteor.call("pushToHistory", this._id);
  }
});

Template.deleteBookmarkNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Meteor.call("pushToHistory", this._id);
  }
});

Template.editBookmarkNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Meteor.call("pushToHistory", this._id);
  },

  'click .btn-bookmark': function() {
    Meteor.call("pushToHistory", this._id);
  }
});

Template.notificationItem.helpers({
  'displayNotification': function() {
    if (this.type == "subscribing") {
      return Template["subscribingNotification"];
    } else if (this.type == "unsubscribing") {
      return Template["unsubscribingNotification"];
    } else if (this.type == "leaving") {
      return Template["leavingNotification"];
    } else if (this.type == "kicking") {
      return Template["kickingNotification"];
    } else if (this.type == "addBookmark") {
      return Template["addBookmarkNotification"];
    } else if (this.type == "deleteBookmark") {
      return Template["deleteBookmarkNotification"];
    } else if (this.type == "editBookmark") {
      return Template["editBookmarkNotification"];
    }
  }
});
