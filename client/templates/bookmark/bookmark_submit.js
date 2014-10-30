Template.bookmarkSubmit.events(
{
	'submit form': function(events) 
	{
		events.preventDefault();

		var user = Meteor.user();

		var bookmark = 
		{
			url: $(events.target).find('[name=url]').val(),
			title: $(events.target).find('[name=title]').val(),
			summuary: $(events.target).find('[name=summuary]').val(),
			thumbnail: "",
			tag: "",
			dateCreated: new Date(),
			dateModified: new Date(),
			counterView: 0,
			counterClick: 0,
			versionText: "",
			idUser: user._id
		};

		Bookmarks.insert(bookmark);
		Router.go('/');
	}
});