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

  'UpdateUserTags': function(name) {

    if (UserTags.findOne({
        name: name,
        userId: Meteor.userId()
      }) == null) {
      Meteor.call("UpdateTags", name);
    }

    UserTags.upsert({
      name: name,
      userId: Meteor.userId()
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

  'DecrementUserTags': function(name, allId) {
    UserTags.upsert({
      name: name,
      userId: {
        $in: allId
      }
    }, {
      $inc: {
        count: -1
      }
    });

    UserTags.remove({
      name: name,
      userId: {
        $in: allId
      },
      count: {
        $lt: 1
      }
    });

    if (UserTags.findOne({
        name: name,
        userId: {
          $in: allId
        }
      }) == null) {
      Meteor.call("DecrementTags", name);
    }
  }
});
