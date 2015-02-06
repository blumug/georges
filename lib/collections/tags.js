Tags = new Mongo.Collection('tags');
UserTags = new Mongo.Collection('user_tags');

UserTags.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        return !!userId;
    }
});

Tags.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        return !!userId;
    }
});

Meteor.methods({
    'incTags': function(idTag) {
        var tag = Tags.findOne(idTag);
        if (tag) {
            Tags.update(tag._id, {
                $inc: {
                    count: 1
                }
            });
        }
    },

    'incTagsUser': function(idTag) {
        var tag = UserTags.findOne(idTag);
        if (tag) {
            UserTags.update(tag._id, {
                $inc: {
                    count: 1
                }
            });
        }
    },

    'decTags': function(idTag) {
        var tag = Tags.findOne(idTag);
        if (tag) {
            Tags.update(tag._id, {
                $inc: {
                    count: -1
                }
            });
        }
    },

    'decTagsUser': function(idTag) {
        var tag = UserTags.findOne(idTag);
        if (tag) {
            UserTags.update(tag._id, {
                $inc: {
                    count: -1
                }
            });
        }
    }
});