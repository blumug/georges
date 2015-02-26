Template.groupList.created = function() {
  this.filterGroups = new ReactiveVar('');
}

Template.groupList.helpers({
  'groupList': function() {
    var filterGroups = Template.instance().filterGroups.get();
    if (filterGroups != '') {
      var query = {
        $regex: filterGroups,
        $options: "i"
      };
      return Groups.find({
        'name': query,
        creator: {
          $not: Meteor.userId()
        }
      });
    } else {
      return Groups.find({
        creator: {
          $not: Meteor.userId()
        }
      })
    }
  },

  'ownGroupList': function() {
    var filterGroups = Template.instance().filterGroups.get();
    if (filterGroups != '') {
      var query = {
        $regex: filterGroups,
        $options: "i"
      };
      return Groups.find({
        'name': query,
        creator: Meteor.userId()
      });
    } else {
      return Groups.find({
        creator: Meteor.userId()
      });
    }
  }
});

Template.groupList.events({
  'input #filter-groups': function(event, template) {
    event.preventDefault();
    var val = $(event.target).val();
    template.filterGroups.set(val);
  },
  'click .new-group': function(e) {
    e.preventDefault();
    bootbox.prompt({
      title: "Group name",
      value: '',
      callback: function(name) {
        if (name) {
          Meteor.call("createGroup", name, Meteor.userId());
        }
      }
    });
  }
});
