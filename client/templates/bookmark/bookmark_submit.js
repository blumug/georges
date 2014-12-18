var $select;

Template.bookmarkSubmit.events({
  'submit form': function(events) {
    events.preventDefault();
    var user = Meteor.user();
    if (user !== null) {
      var tags = ParsedTags($(events.target).find('[name=tags]').val());
      var tabGroup = [];
      if ($select) {
        for (var i = 0; i < $select[0].selectize.items.length; i++) {
          tabGroup.push($select[0].selectize.getItem($select[0].selectize.items[i]).text());
        };
      }
      var groups = ParsedGroups(tabGroup);
      var bookmark = {
        url: $(events.target).find('[name=url]').val(),
        title: $(events.target).find('[name=title]').val(),
        description: $(events.target).find('[name=description]').val(),
        tags: tags,
        groups: groups,
        userId: user._id
      };
      if (bookmark.url.indexOf("://") == -1) bookmark.url = "http://" + bookmark.url;
      CreatedTags(tags);
      Meteor.call('bookmarkInsert', bookmark, function(error, result) {
        if (error) return alert(error.reason);
        if (!result.success) {
          DisplayErrorSubmit(result.message);
          return;
        }
        Router.go('/home');
      });
    } else DisplayErrorSubmit("You need to be connected.");
  }
});

Template.bookmarkSubmit.helpers({
  'allGroups': function() {
    return Groups.find();
  }
});

Template.bookmarkSubmit.rendered = function() {
  $('input[name="url"]').focus();
  
  $select = $('#groups').selectize({
    maxItems: null,
    valueField: 'id',
    labelField: 'title',
    searchField: 'title',
    options: [],
    create: false
  });

  var control = $select[0].selectize;

  var groups = Groups.find().fetch();

  for (var x = 0; x < groups.length; x++) {
    control.addOption({
      id: x,
      title: "@" + groups[x].name
    });
    if (this.data.groups.indexOf(groups[x]._id) != -1) {
      control.addItem(x);
    }
  }
};