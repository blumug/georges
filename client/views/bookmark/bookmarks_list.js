var _Self = null;



Template.bookmarksList.created = function() {

  _Self = Template.instance();
  _Self.isRendered = new ReactiveVar();
  _Self.isRendered.set(false);
}


Template.bookmarksList.rendered = function () {

  _Self.isRendered.set(true);

  var cookie = Cookie.get("bookmarks-view");

  if (!cookie)
    Cookie.set("bookmarks-view", "cards", {"years": 10});
  else if (cookie == "list") {
    switchToListView();
  }
}


function switchToListView() {

  Cookie.set("bookmarks-view", "list", {"years": 10});
  $(".bookmarksList").addClass("bookmarksList-list");
  $(".switch-view-cards").removeClass("active");
  $(".switch-view-list").addClass("active");
}

function switchToCardsView() {
  Cookie.set("bookmarks-view", "cards", {"years": 10});
  $(".bookmarksList").removeClass("bookmarksList-list");
  $(".switch-view-cards").addClass("active");
  $(".switch-view-list").removeClass("active");
}

Template.bookmarksList.helpers({

  isEmpty: function () {

    var isRendered = _Self.isRendered.get();
    if (!isRendered)
      return false;

    return (this.bookmarks.count() == 0);
  }
});

Template.bookmarksList.events({

  'click .switch-view-list': function (e) {

    e.preventDefault();

    var cookie = Cookie.get("bookmarks-view");
    if (cookie == "cards") {
      switchToListView();
    }
  },

  'click .switch-view-cards': function (e) {
    e.preventDefault();

    var cookie = Cookie.get("bookmarks-view");
    if (cookie == "list") {
      switchToCardsView();
    }
  },

  'click .downloadChromeExtension button': function(e) {

    window.location = Settings.URL.STORE_CHROME_EXTENSION;
  }

});