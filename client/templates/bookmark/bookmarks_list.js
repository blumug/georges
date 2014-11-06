Template.bookmarksList.helpers({
    bookmarks: function() {
        var filter = Session.get('searchBar');
        if (Meteor.user()) 
        {
            
            if (filter === undefined || filter === '')
            {
                return (Bookmarks.find({
                    userId: Meteor.user()._id
                }));
            } 
            else
            {
                if (filter.indexOf("#") != -1)
                {
                    var parsedTags = ParsedTags(filter)
                    return (Bookmarks.find({tags: { $all: parsedTags}}, {sort: {dateCreated: -1}}));
                }
                else
                {
                    return (Bookmarks.find({url: /.*filter.*/}, {sort: {dateCreated: -1}}));
                }
            }
        }
    }
});