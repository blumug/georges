Bookmarks = new Mongo.Collection('bookmarks');
Bookmarks.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        return !!userId;
    },
});

Meteor.methods({
	'bookmarkInsert': function(bookmark)
	{
		check(Meteor.userId(), String);
		check(bookmark, 
		{
			url: String,
			title: String,
			description: String,
			thumbnail: String,
			dateCreated: Date,
			dateModified: Date,
			counterView: int,
			counterClick: int,
			summary: String,
			versionText: String,
			userId: String
		});
		// var user = Meteor.user();
		// var post = _.extend(postAttributes,
		// {
		// 	userId: user._id, 
		// 	author: user.username, 
		// 	submitted: new Date()
		// });
		// var postId = Posts.insert(post);
		// return
		// {
		// 	_id: postId
		// };
	}
});