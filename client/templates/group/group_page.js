Template.groupPage.events({
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
	'submit form': function() {
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
	},
	'click .btn-delete-member': function() {
		Meteor.call("removeMember", Session.get("idGroup"), this.toString());
	}
});

Template.groupPage.helpers({
	'listMembers': function() {
		Session.set("idGroup", this._id);
		return this.members;
	}
});