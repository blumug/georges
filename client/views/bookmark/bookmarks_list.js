
Template.bookmarksList.rendered = function () {

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

Template.bookmarksList.events({

    'click .switch-view-list': function(e) {

        e.preventDefault();

        var cookie = Cookie.get("bookmarks-view");
        if (cookie == "cards") {
            switchToListView();
        }
    },

    'click .switch-view-cards': function(e) {
        e.preventDefault();

        var cookie = Cookie.get("bookmarks-view");
        if (cookie == "list") {
            switchToCardsView();
        }
    }

});