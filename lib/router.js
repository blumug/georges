Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        Meteor.subscribe('favorites')
    }
});
BookmarksListController = RouteController.extend({
    template: 'bookmarksList',
    increment: 50,
    limit: function() {
        return parseInt(this.params.bookmarksLimit) || this.increment;
    },
    findOptions: function() {
        if (Session.get("sortName") && Session.get("sortValue")) {
            var name = Session.get("sortName");
            var value = Session.get("sortValue");
            console.log(name + ": " + value);
            return {
                sort: {
                    name: value
                },
                limit: this.limit()
            }
        } else {
            return {
                sort: {
                    dateCreated: -1
                },
                limit: this.limit()
            }
        };
    },
    subscriptions: function() {
        var filter;
        if (Meteor.isClient) {
            filter = this.params.query.filter;
            if (Session.get("searchBar")) {
                Session.set('searchBar', filter);
            }
        }
        this.bookmarksSub = Meteor.subscribe('bookmarks', this.findOptions(), filter);
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
            ready: this.bookmarksSub.ready,
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
    var userId = id.cookies.meteor_userid;
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
        data.push(_.omit(bookmark, '_id', 'userId'));
    });
    _.each(allFavorites, function(favorite) {
        dataFavorite.push(_.omit(favorite, '_id', 'userId'));
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
        path: '/home/:bookmarksLimit?',
        controller: BookmarksListController,
        fastRender: true
    });
});
Router.map(function() {
    this.route('landing', {
        path: '/'
    });
});
Router.route('register');
Router.route('passwordRecovery');
Router.route('login');
// var requireLogin = function() {
//     if (!Meteor.user()) {
//         if (Meteor.loggingIn()) {
//             this.render(this.loadingTemplate);
//         } else {
//             this.render('accessDenied');
//         }
//     } else {
//         this.next();
//     }
// };
var mustBeSignedIn = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            Router.go('/');
        }
    } else {
        this.next();
    }
};
Router.onBeforeAction('dataNotFound', {
    only: 'bookmarkPage'
});
Router.onBeforeAction(mustBeSignedIn, {
    except: ['landing', 'login', 'register']
});
// Router.onBeforeAction(requireLogin, {
//     except: ['about']
// });