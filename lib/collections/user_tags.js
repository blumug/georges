User_tags = new Mongo.Collection('user_tags');
User_tags.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});
