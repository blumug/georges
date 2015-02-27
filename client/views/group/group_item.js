Template.groupItem.events({
  'click .deleteGroup': function() {
    var idDelete = this._id;
    bootbox.dialog({
      message: "Do you want delete this Group",
      title: "Warning",
      buttons: {
        main: {
          label: "Cancel",
          className: "btn-primary"
        },
        danger: {
          label: "Delete",
          className: "btn-danger",
          callback: function() {
            Meteor.call("removeGroupById", idDelete);
          }
        }
      }
    });
  },
  'click .leaveGroup': function() {
    var idDelete = this._id;
    var email = Meteor.user().emails[0]['address'];
    bootbox.dialog({
      message: "Do you want leave this Group",
      title: "Warning",
      buttons: {
        main: {
          label: "Cancel",
          className: "btn-primary"
        },
        danger: {
          label: "Leave",
          className: "btn-danger",
          callback: function() {
            Meteor.call("leaveGroupById", email, idDelete);
          }
        }
      }
    });
  },

  'input .email': function(event, template) {
    var filter = $(event.target).val();
    var user = Meteor.users.find({
      emails: {
        $elemMatch: {
          address: filter
        }
      }
    });

    if (user && user._id != Meteor.userId()) {
      $(event.target).css("border-color", "greenyellow");
    } else {
      $(event.target).css("border-color", "");
    }
  },

  'keypress .addMember': function(event, template) {
    if (event.charCode == 13) {
      if (Meteor.userId() == this.creator) {
        var filter = $(event.target).val();
        var user = Meteor.users.findOne({
          emails: {
            $elemMatch: {
              address: filter
            }
          }
        });
        if (!user) {
          DisplayErrorSubmit("User unknown.");          
        } else if (!Members.findOne({
            groupId: this._id,
            email: user.emails[0].address
          })) {
          Meteor.call("addMember", this._id, user._id, user.emails[0].address);
        } else {
          DisplayErrorSubmit("Member already exist.");
        }
      }
      event.stopPropagation();
      return false;
    }
  },
  'click .btn-delete-member': function(e) {
    e.preventDefault();
    var email = this.email;
    var group = Groups.findOne(this.groupId);
    bootbox.dialog({
      message: "Do you want delete this member",
      title: "Warning",
      buttons: {
        main: {
          label: "Cancel",
          className: "btn-primary"
        },
        danger: {
          label: "Delete",
          className: "btn-danger",
          callback: function() {
            Meteor.call("createUnsubscribingNotification", email, group);
            Meteor.call("removeMember", group._id, email);
          }
        }
      }
    });
  },

  'click .nameGroup': function(e) {
    e.preventDefault();
    Router.go('/home/?filter=' + $(".nameGroup").text());
  }
});

Template.groupItem.helpers({
  'allMembers': function() {
    return Members.find({
      _id: {
        $in: this.members
      }
    });
  },
  'isCreator': function() {
    if (Meteor.userId() == this.creator) {
      return true;
    } else {
      return false;
    }
  },
  'nameCreator': function() {
    var user = Meteor.users.findOne({
      _id: this.creator
    });
    if (user) {
      if (user.profile && user.profile.name) {
        return user.profile.name;
      } else {
        return user.emails[0].address;
      }
    } else {
      return "author undefined";
    }
  }
});

Template.member.helpers({
  'isMember': function() {
    var group = Groups.findOne(this.groupId);
    if (!group && Meteor.isClient) {
      return false;
    }

    var user = Meteor.users.find({
      emails: {
        $elemMatch: {
          address: this.email
        }
      }
    });
    if (Meteor.userId() == group.creator) {
      return true;
    } else {
      return false;
    }
  }
})
