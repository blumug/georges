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
  'input .email': function(event, template) {
    var filter = $(event.target).val();
    var user = Meteor.users.findOne({
      emails: {
        $elemMatch: {
          address: filter
        }
      }
    });

    var existingMember = _.find(template.data.members, function(member) {
      return member.name == filter;
    });
    if (existingMember) return;

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

        var existingMember = _.find(template.data.members, function(member) {
          return member.name == filter;
        });
        if (existingMember) return;

        var user = Meteor.users.findOne({
          emails: {
            $elemMatch: {
              address: filter
            }
          }
        });
        if (user && user._id != Meteor.userId()) {
          Meteor.call("addMember", this._id, user._id, user.emails[0].address);
        }
      }
      event.stopPropagation();
      return false;
    }
  },
  'click .btn-delete-member': function(e) {
    e.preventDefault();
    var name = this.name;
    var group = Groups.findOne(this.idGroup);
    var message = "";
    var id = this.id;
    var idGroup = this.idGroup;
    if (Meteor.userId() == this.id) {
      message = "You are no longer a member of " + group.name + ".";
    } else {
      message = "You have been kicked out of " + group.name + ".";
    }
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
            Meteor.call("createDesinscriptionNotification", id, group, message);
            Meteor.call("removeMember", idGroup, name);
          }
        }
      }
    });
  }
});

Template.groupItem.helpers({
  'allMembers': function() {
    return this.members;
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
    var group = Groups.findOne(this.idGroup);
    if (!group) {
      return false;
    }

    var userId = Meteor.userId();
    if (userId == group.creator || userId == this.id) {
      return true;
    } else {
      return false;
    }
  }
})
