Template.groupSubmit.events({
  'submit form': function(events) {
    events.preventDefault();
    var name = $(events.target).find('[name=nameGroup]').val();

    if (name) {
      Meteor.call("createGroup", name, Meteor.userId());
    } else {
      Router.go('bookmarksList');
    }
  }
})
