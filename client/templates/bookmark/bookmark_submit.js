Template.bookmarkSubmit.events(
{
	'submit form': function(events) 
	{
		events.preventDefault();

		var user = Meteor.user();

		if (user !== null)
		{
			var bookmark = 
			{
				url: $(events.target).find('[name=url]').val(),
				title: $(events.target).find('[name=title]').val(),
				description: $(events.target).find('[name=description]').val(),
				thumbnail: "",
				tag: "",
				dateCreated: new Date(),
				dateModified: new Date(),
				counterView: 0,
				counterClick: 0,
				versionText: "",
				idUser: user._id
			};

			if (bookmark.url !== "")
			{
				if (Bookmarks.findOne({url: bookmark.url}) !== undefined)
				{
					var e = $('<div class="alert alert-dismissable alert-warning"><button type="button" class="close" data-dismiss="alert">×</button><h4>Warning!</h4><p>This url does already exist in your list.</p></div>');
					$("#alertConnexion").append(e);
					e.attr('id', 'myid');
				}
				else
				{
					Bookmarks.insert(bookmark);
					Router.go('/');
				}
			}
			else
			{
				document.getElementById("spanUrl").style.visibility = "visible";
				document.getElementById("url").focus();
			}			
		}
		else
		{
			var e = $('<div class="alert alert-dismissable alert-warning"><button type="button" class="close" data-dismiss="alert">×</button><h4>Warning!</h4><p>You need to be connected.</p></div>');
			$("#alertConnexion").append(e);
			e.attr('id', 'myid');
		}
	}
});