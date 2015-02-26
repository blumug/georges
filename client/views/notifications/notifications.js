Template.notifications.helpers({
  'notifications': function() {
    return Notifications.find();
  },
  'notificationCount': function() {
    return Notifications.find().count();
  }
});

Template.subscribingNotification.events({
  'click .accept': function() {
    var members = this.group.members;

    for (var x = 0; x < members.length; x++) {
      if (Meteor.user() && members[x].name == Meteor.user().emails[0].address) {
        members[x].accepted = true;
      }
    }
    Groups.update(this.group._id, {
      $set: {
        members: members
      }
    });
    Notifications.remove(this._id);
  },

  'click .refuse': function() {
    var members = this.group.members;

    for (var x = 0; x < members.length; x++) {
      if (Meteor.user() && members[x].name == Meteor.user().emails[0].address) {
        members.splice(x, 1);
      }
    }
    Groups.update(this.group._id, {
      $set: {
        members: members
      }
    });
    Notifications.remove(this._id);
  }
});

Template.unsubscribingNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Notifications.remove(this._id);
  }
});

Template.leavingNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Notifications.remove(this._id);
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
    Notifications.remove(this._id);
  }
});

Template.addBookmarkNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Notifications.remove(this._id);
  },

  'click .btn-bookmark': function() {
    Notifications.remove(this._id);
  }
});

Template.deleteBookmarkNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Notifications.remove(this._id);
  }
});

Template.editBookmarkNotification.events({
  'click .btn-remove-notification': function(e) {
    e.preventDefault();
    Notifications.remove(this._id);
  },

  'click .btn-bookmark': function() {
    Notifications.remove(this._id);
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
