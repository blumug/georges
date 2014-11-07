Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});
BookmarksListController = RouteController.extend({
    template: 'bookmarksList',
    increment: 50,
    limit: function() {
        return parseInt(this.params.bookmarksLimit) || this.increment;
    },
    findOptions: function() {
        return {
            sort: {
                dateCreated: -1
            },
            limit: this.limit()
        };
    },
    waitOn: function() {
        var filter = Session.get('searchBar');
        return Meteor.subscribe('bookmarks', this.findOptions(), filter);
    },
    bookmarks: function() {
        return Bookmarks.find({}, this.findOptions());
    },
    data: function() {
        var hasMore = this.bookmarks().fetch().length === this.limit();
        var nextPath = this.route.path({
            bookmarksLimit: this.limit() + this.increment
        });
        return {
            bookmarks: this.bookmarks(),
            nextPath: hasMore ? nextPath : null
        };
    }
});
Router.route('/submit', {
    name: 'bookmarkSubmit'
});
Router.route('/bookmark/:_id', {
    name: 'bookmarkPage',
    waitOn: function() {
        return Meteor.subscribe('bookmark', this.params._id);
    },
    data: function() {
        return Bookmarks.findOne(this.params._id);
    }
});
Router.map(function() {
    this.route('bookmarksList', {
        path: '/:bookmarksLimit?',
        controller: BookmarksListController
    });
});
var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};
Router.onBeforeAction('dataNotFound', {
    only: 'bookmarkPage'
});
Router.onBeforeAction(requireLogin, {
    only: 'bookmarkSubmit'
});