Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    Meteor.subscribe('favorites');
    Meteor.subscribe('allUser');
    Meteor.subscribe('notifications');
    Meteor.subscribe('groups');
    Meteor.subscribe('members');
    Meteor.subscribe('user-tags');
  }
});

BookmarksListController = RouteController.extend({
  template: 'bookmarksList',
  increment: 25,
  limit: function() {
    return parseInt(this.params.query.offset) || this.increment;
  },
  findOptions: function() {
    var sortOptions = {};

    if (Meteor.isClient && Session.get("sortName") && Session.get("sortValue")) {
      var name = Session.get("sortName");
      var value = Session.get("sortValue");
      if (name && value) {
        sortOptions = {};
        sortOptions[name] = value;
      }
    }

    return {
      sort: sortOptions,
      limit: this.limit()
    }
  },
  subscriptions: function() {
    var filter;
    if (Meteor.isClient) {
      filter = this.params.query.filter;
      Session.set('searchBar', filter);
    }
    this.bookmarksSub = Meteor.subscribe('bookmarks', this.findOptions(), filter);
  },
  bookmarks: function() {
    return Bookmarks.find();
  },
  data: function() {
    var hasMore = this.bookmarks().count() === this.limit();
    var nextLimit = this.limit() + this.increment;
    var nextPath = this.route.path() + "?offset=" + nextLimit;
    var filter = this.params.query.filter;
    var filter = this.params.query.filter;
    if (filter) {
      nextPath = nextPath + "&filter=" + filter;
    }
    return {
      bookmarks: this.bookmarks(),
      ready: this.bookmarksSub.ready(),
      nextPath: hasMore ? nextPath : null
    };
  }
});


Router.route('/privacy', function() {
  this.render('privacy');
});

Router.route('/submit', {
  name: 'bookmarkSubmit',
  waitOn: function() {
    return [
      Meteor.subscribe('user-tags'),
      Meteor.subscribe('groups'),
    ];
  }
});

Router.route('groupSubmit');

Router.route('groupList', {
  waitOn: function() {
    return Meteor.subscribe('groups');
  }
});
Router.route('/groupPage/:_id', {
  name: 'groupPage',
  waitOn: function() {
    return Meteor.subscribe('groupPage', this.params._id);
  },
  data: function() {
    return Groups.findOne(this.params._id);
  }
});

Router.route('/export', function(id) {
  var userId = id.cookies.meteor_userid;

  var currentDate = moment().format('YYYY-MM-DD');
  var filename = 'georges-' + currentDate + '.json';

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

Router.route('bookmarkSetting', {
  waitOn: function() {
    return Meteor.subscribe('groups');
  }
});

Router.route('/bookmark/:_id', {
  name: 'bookmarkPage',
  waitOn: function() {
    return [Meteor.subscribe('bookmark', this.params._id), Meteor.subscribe('groups')];
  },
  data: function() {
    return Bookmarks.findOne(this.params._id);
  }
});

Router.route('bookmarkView', {
  path: '/bookmark/view/:_id',
  waitOn: function() {
    return [Meteor.subscribe('bookmark', this.params._id), Meteor.subscribe('groups')];
  },
  data: function() {
    return Bookmarks.findOne(this.params._id);
  }
});

Router.map(function() {
  this.route('bookmarksList', {
    path: '/home/',
    controller: BookmarksListController
  });
});

Router.map(function() {
  this.route('landing', {
    path: '/',
    layoutTemplate: 'layoutLanding',
    onBeforeAction: function() {
      if (Meteor.user()) {
        Router.go('/home');
      }
      this.next();
    }

  });
});





Router.map(function() {
  this.route('passwordRecovery', {
    layoutTemplate: 'layoutRecovery'
  });
});


Router.map(function() {
  this.route('login', {
    layoutTemplate: 'layoutLogin'
  });
});


Router.map(function() {
  this.route('register', {
    layoutTemplate: 'layoutLogin'
  });
});


Router.map(function() {
  this.route('about', {
    layoutTemplate: 'layoutFullscreen'
  });
});


Router.map(function() {
  this.route('signOut', {
    onBeforeAction: Meteor.logout
  });
});


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
  except: ['landing', 'login', 'register', 'passwordRecovery', 'export','about','privacy']
});

Router.onBeforeAction(function () {
  $('.side-menu').removeClass('show');
  this.next();
}, {
  except: ['export']
})
