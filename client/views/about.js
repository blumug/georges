
Template.about.created = function() {

    var self = this;
    self.pressReleaseContents = new ReactiveVar("");
    Meteor.call("pressRelease", function(err, result) {

        if (err) {
            console.log("pressRelease err : "+err);
            return;
        }
        self.pressReleaseContents.set(result);
    });


}

Template.about.helpers ({

    pressRelease: function() {

        return Template.instance().pressReleaseContents.get();
    }

});


