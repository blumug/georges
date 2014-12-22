var $select;

Template.bookmarkPage.events({
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
        thumbnail: $(events.target).find('[name=thumbnail]').val(),
        tags: tags,
        groups: groups,
        dateCreated: this.dateCreated,
        dateModified: new Date(),
        counterView: this.counterView,
        counterClick: this.counterView,
        summary: this.summary,
        userId: this.userId
      };
      if (bookmark.url.indexOf("://") == -1) bookmark.url = "http://" + bookmark.url;
      CreatedTags(tags);
      if (this.url == bookmark.url || Bookmarks.find({
        url: bookmark.url,
        userId: bookmark.userId
      }).count() == 0) {
        Meteor.call('bookmarkUpdate', bookmark, this._id, function(error, result) {
          if (error) return alert(error.reason);
          if (!result.success) {
            DisplayErrorSubmit(result.message);
            return;
          }
          Router.go('/home');
        });
      } else {
        DisplayErrorSubmit("Url already use.");
      }
    } else {
      DisplayErrorSubmit("You need to be connected.");
    }
  },

  'click .btnDelete': function(e) {
    e.preventDefault();
    var idDelete = this._id;
    bootbox.dialog({
      message: "Do you want delete this bookmark",
      title: "Warning",
      buttons: {
        main: {
          label: "Cancel",
          className: "btn-primary"
        },
        danger: {
          label: "Delete",
          className: "btn-danger",
          callback: function() {
            Meteor.call("removeBookmark", idDelete);
            Router.go('/home');
          }
        }
      }
    });
  },

  'click .refreshView': function(e) {
    e.preventDefault();
    $("#nuage").css("color", "rgb(65, 65, 178)");

    var retry = 0;
    var new_bookmark = this;
    var _id = new_bookmark._id;
    new_bookmark = _.omit(new_bookmark, '_id');

    Meteor.call("analyzeText", new_bookmark.url, function(error, result) {
      var id = result;

      var check = function(id) {
        Meteor.call("getText", id, function(error, result) {
          retry++;
          if (retry >= 10) {

            console.log("analyzeText Failed");
            $("#nuage").css("color", "rgb(188, 0, 0)");

          } else if (result.status == "finished") {

            new_bookmark.summary = result;
            Meteor.call("bookmarkUpdate", new_bookmark, _id, function(error, result) {
              if (error != undefined) $("#nuage").css("color", "rgb(188, 0, 0)");
              else $("#nuage").css("color", "");
              console.log(error);
            });

          } else {
            Meteor.setTimeout(function() {
              check(id);
            }, 4000);
          }
        });
      }
      Meteor.setTimeout(function() {
        check(id);
      }, 4000);
    });
  }
});

Template.bookmarkPage.helpers({
  domain: function () {
    var url = this.url;
    var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var domain = matches && matches[1];
    return domain;
  },
  favicon: function () {
    var url = this.url;
    pathArray = url.split( '/' );
    var protocol = pathArray[0];
    var host = pathArray[2];
    var domain = protocol + '//' + host; 
    return domain + "/favicon.ico";
  }  
})

Handlebars.registerHelper("prettifyDate", function(timestamp) {
  return new Date(timestamp).toLocaleDateString();
});

Handlebars.registerHelper("prettifyTags", function(tags) {
  var tagString = '';
  _.each(tags, function(tag) {
    tagString = '#' + tag + ' ' + tagString;
  })
  return tagString.trim();
});

Template.bookmarkPage.rendered = function() {

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
    var searchTerm = groups[x]._id,
      index = -1;
    for (var i = 0, len = this.data.groups.length; i < len; i++) {
      if (this.data.groups[i]._id === searchTerm) {
        index = i;
        break;
      }
    }

    if (index != -1) {
      control.addItem(x);
    }
  }
};