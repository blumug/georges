Template.sort.events({
  "click .title": function() {
    Session.set("sortName", "title");
    if (Session.get("sortValue") && Session.get("sortValue") == 1) {
      Session.set("sortValue", -1);
    } else {
      Session.set("sortValue", 1);
    }
  },
  "click .url": function() {
    Session.set("sortName", "url");
    if (Session.get("sortValue") && Session.get("sortValue") == 1) {
      Session.set("sortValue", -1);
    } else {
      Session.set("sortValue", 1);
    }
  },
  "click .modified": function() {
    Session.set("sortName", "dateModified");
    if (Session.get("sortValue") && Session.get("sortValue") == 1) {
      Session.set("sortValue", -1);
    } else {
      Session.set("sortValue", 1);
    }
  },
  "click .view": function() {
    Session.set("sortName", "counterView");
    if (Session.get("sortValue") && Session.get("sortValue") == 1) {
      Session.set("sortValue", -1);
    } else {
      Session.set("sortValue", 1);
    }
  },
  "click .click": function() {
    Session.set("sortName", "counterClick");
    if (Session.get("sortValue") && Session.get("sortValue") == 1) {
      Session.set("sortValue", -1);
    } else {
      Session.set("sortValue", 1);
    }
  }
});


Template.sort.helpers({
  'search': function() {
    return Session.get("searchBar");
  },

  'url': function() {
    if (Meteor.isClient) {
      var name = Session.get("sortName")
      var value = Session.get("sortValue")

      if (name == "url") {
        $(".url").css("color", "cornflowerblue");
        if (value == 1) {
          return "fa-sort-asc";
        }
        return "fa-sort-desc";
      }
      $(".url").css("color", "");
      return "fa-sort-desc";
    }
  },
  'title': function() {
    if (Meteor.isClient) {
      var name = Session.get("sortName")
      var value = Session.get("sortValue")

      if (name == "title") {
        $(".title").css("color", "cornflowerblue");
        if (value == 1) {
          return "fa-sort-asc";
        }
        return "fa-sort-desc";

      }
      $(".title").css("color", "");
      return "fa-sort-desc";
    }
  },
  'dateModified': function() {
    if (Meteor.isClient) {
      var name = Session.get("sortName")
      var value = Session.get("sortValue")

      if (name == "dateModified") {
        $(".modified").css("color", "cornflowerblue");
        if (value == 1) {
          return "fa-sort-asc";
        }
        return "fa-sort-desc";
      }
      $(".modified").css("color", "");
      return "fa-sort-desc";
    }
  },
  'counterView': function() {
    if (Meteor.isClient) {
      var name = Session.get("sortName")
      var value = Session.get("sortValue")

      if (name == "counterView") {
        $(".view").css("color", "cornflowerblue");
        if (value == 1) {
          return "fa-sort-asc";
        }
        return "fa-sort-desc";
      }
      $(".view").css("color", "");
      return "fa-sort-desc";
    }
  },
  'counterClick': function() {
    if (Meteor.isClient) {
      var name = Session.get("sortName")
      var value = Session.get("sortValue")

      if (name == "counterClick") {
        $(".click").css("color", "cornflowerblue");
        if (value == 1) {
          return "fa-sort-asc";
        }
        return "fa-sort-desc";
      }
      $(".click").css("color", "");
      return "fa-sort-desc";
    }
  }
});
