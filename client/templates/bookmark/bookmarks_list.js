Template.bookmarksList.helpers(
{
	bookmarks: function()
	{
		return (Bookmarks.find({idUser: Meteor.user()._id}))
	}
});