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
        var filter = this.params.query.filter;
        Session.set('searchBar', filter);
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
Router.route('/about', function() {
    this.render('about');
});
Router.route('/submit', {
    name: 'bookmarkSubmit'
});
Router.route('/export', function(id) {
    var userId = id.headers.cookie.substr(id.headers.cookie.indexOf("meteor_userid=") + "meteor_userid=".length, id.headers.cookie.indexOf("; meteor_logintoken=") - "meteor_userid=".length);
    var filename = 'filename.json';
    var allBookmarks = Bookmarks.find({
        userId: userId
    }).fetch();
    var allFavorites = Favorites.find({
        userId: userId
    }).fetch();
    var data = []
    var dataFavorite = []
    _.each(allBookmarks, function(bookmark) {
        data.push(_.omit(bookmark, '_id', 'idUser'));
    });
    _.each(allFavorites, function(favorite) {
        dataFavorite.push(_.omit(favorite, '_id', 'idUser'));
    });
    var headers = {
        'Content-type': 'application/json',
        'Content-Disposition': "attachment; filename=" + filename
    };
    this.response.writeHead(200, headers);
    return this.response.end("{ \"bookmarks\": " + EJSON.stringify(data) + ", \"favorites\": " + EJSON.stringify(dataFavorite) + "}");
}, {
    where: 'server'
});
Router.route('bookmarkSetting');
Router.route('/bookmark/:_id', {
    name: 'bookmarkPage',
    waitOn: function() {
        return Meteor.subscribe('bookmark', this.params._id);
    },
    data: function() {
        return Bookmarks.findOne(this.params._id);
    }
});
Router.route('bookmarkView', {
    path: '/bookmark/view/:_id',
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
    except: ['about', 'export']
});