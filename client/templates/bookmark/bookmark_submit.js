Template.bookmarkSubmit.events(
{
	'submit form': function(events) 
	{
		events.preventDefault();

		var post = 
		{
			url: $(events.target).find('[name=url]').val(),
			title: $(events.target).find('[name=title]').val()
		};

		post._id = Posts.insert(post);
		Router.go('postPage', post);
	}
});