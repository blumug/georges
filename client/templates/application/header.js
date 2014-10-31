Template.header.events(
{
	'keyup #tagSearch': function(events)
	{
		Session.set("searchBar", $("#tagSearch").val());
	}
});
