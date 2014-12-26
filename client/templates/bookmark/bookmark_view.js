Template.bookmarkView.helpers({
    'summary': function() {
        return this.summary.text;
    },
    'readable': function() {
        return this.summary.readable;
    },
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

});

Template.bookmarkView.events({
    'click .refreshView': function(e) {
        e.preventDefault()
        $("#nuage").css("color", "rgb(65, 65, 178)");
        var inc = 0;
        var new_bookmark = this;
        var _id = new_bookmark._id;
        new_bookmark = _.omit(new_bookmark, '_id');
        Meteor.call("analyzeText", new_bookmark.url, function(error, resultat) {
            console.log(error);
            var id = resultat;
            var check = function(id) {
                Meteor.call("getText", id, function(error, resultat) {
                    console.log(error);
                    inc++;
                    if (inc >= 10) {
                        console.log("analyzeText Failed");
                        $("#nuage").css("color", "rgb(188, 0, 0)");
                    } else if (resultat.status == "finished") {
                        new_bookmark.summary = resultat;
                        Meteor.call("bookmarkUpdate", new_bookmark, _id, function(error, resultat) {
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