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

        options = {
          allowedTags: [ 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
          allowedAttributes: {
            a: [ 'href', 'name', 'target' ],
            // We don't currently allow img itself by default, but this
            // would make sense if we did
            img: [ 'src' ]
          },
          // Lots of these won't come up by default because we don't allow them
          selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
          // URL schemes we permit
          allowedSchemes: [ 'http', 'https', 'ftp', 'mailto' ]
        };


        return {
            id: response.data.id,
            status: response.data.status,
            text: response.data.summary,
            readable: sanitizeHtml(response.data.readable, options),
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