Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});
BookmarksListController = RouteController.extend({
    template: 'bookmarksList',
    increment: 5,
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
        return Meteor.subscribe('bookmarks', this.findOptions());
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
SearchListController = RouteController.extend({
    template: 'bookmarksList',
    increment: 10,
    limit: function() {
        return this.increment;
    },
    findOptions: function() {
        if (this.params.filter === undefined || this.params.filter === '') {
            return {};
        } else {
            if (this.params.filter.indexOf("#") != -1) {
                var parsedTags = ParsedTags(this.params.filter);
                return {
                    sort: {
                        dateCreated: -1
                    },
                    limit: this.limit()
                };
            } else {
                return {
                    sort: {
                        dateCreated: -1
                    },
                    limit: this.limit()
                };
            }
        }
    },
    findParams: function() {
        if (this.params.filter === undefined || this.params.filter === '') {
            return {
                userId: Meteor.user()._id
            };
        } else {
            if (this.params.filter.indexOf("#") != -1) {
                var parsedTags = ParsedTags(this.params.filter);
                return {
                    tags: {
                        $in: parsedTags
                    }
                };
            } else {
                return {
                    $or: [{
                        $where: "this.url.indexOf(\"" + this.params.filter + "\") != -1"
                    }, {
                        $where: "this.title.indexOf(\"" + this.params.filter + "\") != -1"
                    }, {
                        $where: "this.description.indexOf(\"" + this.params.filter + "\") != -1"
                    }]
                };
            }
        }
    },
    waitOn: function() {
        return Meteor.subscribe('search', this.findParams(), this.findOptions());
    },
    bookmarks: function() {
        return Bookmarks.find();
    },
    data: function() {
        return {
            bookmarks: this.bookmarks()
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
    this.route('searchBookmarksList', {
        path: '/search/:filter?',
        controller: SearchListController
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
}
Router.onBeforeAction('dataNotFound', {
    only: 'bookmarkPage'
});
Router.onBeforeAction(requireLogin, {
    only: 'bookmarkSubmit'
});