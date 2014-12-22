Template.groupItem.events({
	'click .deleteGroup': function() {
		Meteor.call("removeGroupById", this._id);
	},
	'input .email': function() {
		var filtre = $(".email").val();
		var user = Meteor.users.findOne({
			emails: {
				$elemMatch: {
					address: filtre
				}
			}
		});
		if (user) {
			$(".email").css("border-color", "greenyellow");
		} else {

		}
	},
	'keypress .addMember': function(event) {
		if (event.charCode == 13) {
			if (Meteor.userId() == this.creator) {
				var filtre = $(".email").val();
				var user = Meteor.users.findOne({
					emails: {
						$elemMatch: {
							address: filtre
						}
					}
				});
				if (user) {
					var group = Groups.findOne({
						creator: Meteor.userId(),
						name: $(".nameGroup").val()
					});
					Meteor.call("addMember", this._id, user._id, user.emails[0].address);
				} else {}
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
		if (Meteor.userId() == this.id) {
			message = "Vous avez quitté le groupe " + group.name + ".";
		} else {
			message = "On vous a exclue du groupe " + group.name + ".";
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
						Meteor.call("removeMember", Session.get("idGroup"), name);
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
			if (user.profile) {
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
		var userId = Meteor.userId();
		if (userId == group.creator || userId == this.id) {
			return true;
		} else {
			return false;
		}
	}
})