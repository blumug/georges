Template.header.events(
{
	'keyup #tagSearch': function(events)
	{
		Session.set("searchBar", $("#tagSearch").val());
	}
});

Template.header.helpers({
	'searchBar': function()
	{
		return Session.get("searchBar");
	}
})