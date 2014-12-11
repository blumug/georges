Template.groupItem.events({
	'click .deleteGroup': function()
	{
		Meteor.call("removeGroupById", this._id);
	}
});

Template.members.helpers({
	'allMembers': function()
	{
		return this.members;
	}
});