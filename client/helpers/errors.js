Errors = Mongo.collection(null);
throwError = function(message) {
    Errors.insert({
        message: message
    })
}