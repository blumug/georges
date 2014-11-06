Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});
Router.map(function() {
    this.route('/bookmarksList', {
        path: '/:bookmarksLimit?',
        waitOn: function() {
            var limit = parseInt(this.params.bookmarksLimit) || 5;
            return Meteor.subscribe('posts', {
                sort: {
                    dateCreated: -1
                },
                limit: limit
            });
        },
        data: function() {
            var limit = parseInt(this.params.bookmarksLimit) || 5;
            return Bookmarks.find({}, {
                sort: {
                    dateCreated: -1
                },
                limit: limit
            })
        }
    });
});
Router.route('/submit', {
    name: 'bookmarkSubmit'
});
Router.route('/bookmark/:_id', {
    name: 'bookmarkPage',
    data: function() {
        return Bookmarks.findOne(this.params._id);
    }
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
}
Router.onBeforeAction('dataNotFound', {
    only: 'bookmarkPage'
});
Router.onBeforeAction(requireLogin, {
    only: 'bookmarkSubmit'
});