Template.groupList.created = function () {
  this.filterGroups = new ReactiveVar('');
}

Template.groupList.helpers({
	'groupList': function() {
    var filterGroups =  Template.instance().filterGroups.get();
    if (filterGroups != '') {
      var query = {
            $regex: filterGroups,
            $options: "i"
      };
		  return Groups.find({'name': query});
    } else {
      return Groups.find()
    }
	}
});

Template.groupList.events({
  'input #filter-groups': function(event, template) {
    event.preventDefault();
    var val = $(event.target).val();
    template.filterGroups.set(val);
  }
});