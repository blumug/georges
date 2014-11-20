Texapi = {};
Texapi.analyzeText = function(url) {
    if (!Meteor.settings.texapi) throw new Meteor.Error(500, 'Please provide a Texapi token in Meteor.settings');
    var response = Meteor.http.post("http://texapi.jbl2024.com/api/v1/text/analyze/", {
        timeout: 5000,
        params: {
            "url": url,
        },
        headers: {
            'Authorization': 'Token ' + Meteor.settings.texapi
        }
    });
    if (response.statusCode === 200) {
        var id = response.data.id
        return id;
    } else {
        throw new Meteor.Error(500, "Texapi call failed with error: " + response.status_txt);
    }
};
Texapi.getText = function(id) {
    if (!Meteor.settings.texapi) throw new Meteor.Error(500, 'Please provide a Texapi token in Meteor.settings');
    var response = Meteor.http.get("http://texapi.jbl2024.com/api/v1/text/" + id + "/", {
        timeout: 5000,
        headers: {
            'Authorization': 'Token ' + Meteor.settings.texapi
        }
    });
    if (response.statusCode === 200) {
        return {
            id: response.data.id,
            status: response.data.status,
            text: response.data.summary,
        };
    } else {
        throw new Meteor.Error(500, "Texapi call failed with error: " + response.status_txt);
    }
};
Meteor.methods({
    'analyzeText': function(url) {
        return Texapi.analyzeText(url);
    },
    'getText': function(id) {
        return Texapi.getText(id);
    }
});