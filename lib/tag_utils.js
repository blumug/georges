// parse the input "tags"
// return a list of string (tags)
// ex: "#unpeu #beaucoup #alafolie"
//  |=> [ "#unpeu", "#beaucoup", #alafolie" ]
ParsedTags = function(tags) {
  var parsedTags = []
  var splittedTags = [];

  splittedTags = tags.split(" ");
  _.each(splittedTags, function(tag) {
    if (tag.length == 0) {
      return;
    }
    if (tag.length == 1 && tag[0] == '#') {
      return;
    }
    if (tag[0] != '#') {
      tag = '#' + tag;
    }
    parsedTags.push(tag.toLowerCase());
  });
  return (parsedTags);
}

// created new Element od collection Tags
// or up the value counterWrite of the element
// return void
CreatedTags = function(arrayTags) {
  var x = 0;
  var newTag = {
    name: "",
    counterWrite: 1
  };
  while (x < arrayTags.length) {
    var tag = Tags.findOne({
      name: arrayTags[x]
    });
    if (tag == undefined) {
      newTag.name = arrayTags[x]
      Tags.insert(newTag);
    } else {
      Meteor.call("upCounterWrite", tag._id);
    }
    x++;
  }
}
// display message error submit
DisplayErrorSubmit = function(message) {
  var e = $('<div class="alert alert-dismissable alert-warning"><button type="button" class="close" data-dismiss="alert">×</button><h4>Warning!</h4><p>' + message + '</p></div>');
  $("#alertConnexion").append(e);
  e.attr('id', 'myid');
}