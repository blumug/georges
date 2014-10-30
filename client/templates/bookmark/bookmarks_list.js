Template.bookmarksList.helpers(
{
	bookmarks: function()
	{
		if (Meteor.user())
		{
			return (Bookmarks.find({idUser: Meteor.user()._id}))
		}
	}
});