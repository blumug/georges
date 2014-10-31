Tags = new Mongo.Collection('tags');

Tags.allow(
{
	insert: function(userId, doc)
	{
		return !! userId;
	}
});
