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