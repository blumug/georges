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
			Meteor.call("addMember", group.creator, user.emails[0].address);
		} else {}
	}
});