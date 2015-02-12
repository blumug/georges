Tags = new Mongo.Collection('tags');
UserTags = new Mongo.Collection('user_tags');

Meteor.methods({
  'UpdateTags': function(name) {
    Tags.upsert({
      name: name
    }, {
      $inc: {
        count: 1
      }
    });
  },

  'UpdateUserTags': function(name, id) {

    if (UserTags.findOne({
        name: name,
        userId: id
      }) == null) {
      Meteor.call("UpdateTags", name);
    }

    UserTags.upsert({
      name: name,
      userId: id
    }, {
      $inc: {
        count: 1
      }
    });
  },

  'DecrementTags': function(name) {
    Tags.upsert({
      name: name
    }, {
      $inc: {
        count: -1
      }
    });

    Tags.remove({
      name: name,
      count: {
        $lt: 1
      }
    });
  },

  'DecrementUserTags': function(name, id) {
    UserTags.upsert({
      name: name,
      userId: id
    }, {
      $inc: {
        count: -1
      }
    });

    UserTags.remove({
      name: name,
      userId: id,
      count: {
        $lt: 1
      }
    });

    if (UserTags.findOne({
        name: name,
        userId: id
      }) == null) {
      Meteor.call("DecrementTags", name);
    }
  }
});
