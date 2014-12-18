Template.groupItem.events({
	'click .deleteGroup': function()
	{
		Meteor.call("removeGroupById", this._id);
	}
});

Template.groupItem.helpers({
	'allMembers': function()
	{
		return this.members;
	}
});