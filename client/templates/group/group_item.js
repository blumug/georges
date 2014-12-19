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
	'click .btn-delete-member': function() {
		var group = Groups.findOne(Session.get("idGroup"));
		if (Meteor.userId() == group.creator) {

			Meteor.call("removeMember", Session.get("idGroup"), this.name);
		}
	}
});

Template.groupItem.helpers({
	'allMembers': function() {
		Session.set("idGroup", this._id);
		return this.members;
	},
	'isCreator': function() {
		if (Meteor.userId() == this.creator) {
			return true;
		} else {
			return false;
		}
	},
	'isMember': function() {
		var group = Groups.findOne(Session.get("idGroup"));
		var userId = Meteor.userId();
		if (userId == group.creator || userId == this.id) {
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