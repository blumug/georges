Template.sort.events({
    "click .title": function() {
        Session.set("sortName", "title");
        if (Session.get("sortValue") && Session.get("sortValue") == 1) {
            Session.set("sortValue", -1);
        } else {
            Session.set("sortValue", 1);
        }
    }
});