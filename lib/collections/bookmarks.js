Bookmarks = new Mongo.Collection('bookmarks');

Bookmarks.allow(
{
	insert: function(userId, doc)
	{
		return !! userId;
	}
});
