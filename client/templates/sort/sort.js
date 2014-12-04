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