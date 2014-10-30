Router.configure(
{
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'bookmarksList'});
Router.route('/submit', {name: 'bookmarkSubmit'});

var requireLogin = function()
{
	if (! Meteor.user())
	{
		this.render('accessDenied');
	}
	else 
	{
		this.next();
	}
}

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});