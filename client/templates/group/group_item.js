Template.groupItem.events({
	'click .deleteGroup': function()
	{
		Meteor.call("removeGroupById", this._id);
	}
})