Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});
Router.route('/', {
    name: 'bookmarksList'
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
        this.render('accessDenied');
    } else {
        this.next();
    }
}
Router.onBeforeAction(requireLogin, {
    only: 'bookmarkSubmit'
});