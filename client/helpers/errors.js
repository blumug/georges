Errors = new Mongo.Collection(null);


throwError = function(message) {
  Errors.insert({
    message: message
  })
}


DisplayErrorSubmit = function(message) {
  toastr.warning(message);
}


DisplaySuccessSubmit = function(message) {
  toastr.success(message);
}