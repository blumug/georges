Texapi = {};
Texapi.analyzeText = function(url) {
    if (!Meteor.settings.texapi) throw new Meteor.Error(500, 'Please provide a Texapi token in Meteor.settings');
    var response = Meteor.http.post("http://texapi.jbl2024.com/api/v1/text/analyze/", {
        timeout: 5000,
        params: {
            "url": "url",
        },
        headers: {
            'Authorization': 'Token ' + Meteor.settings.texapi
        }
    });
    if (response.statusCode === 200) {
        //id = response.data.id
        return response;
    } else {
        throw new Meteor.Error(500, "Texapi call failed with error: " + response.status_txt);
    }
}
Meteor.methods({
    'getTexapi': function(url) {
        return Texapi.analyzeText(url);
    }
});