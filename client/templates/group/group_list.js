Template.groupList.helpers({
	'groupList': function() {
		return Groups.find();
	}
});

Template.groupItem.helpers({
	'nameCreator': function() {
		return Meteor.users.findOne({
			_id: this.creator
		}).profile.name;
	}
});