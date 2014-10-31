Tags = new Mongo.Collection('tags');
Tags.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});
Meteor.methods({
    'upCounterWrite': function(idTag) {
        var tag = Tags.findOne(idTag);
        if (tag) {
            Tags.update(tag._id, {
                $inc: {
                    counterWrite: 1
                }
            });
        }
    }
});