Template.sideMenu.events({
  'click .settings': function (e) {
    Router.go('bookmarkSetting');
    $('.side-menu').removeClass('show');
  },
  'click .signout': function (e) {
    Router.go('signout');
    $('.side-menu').removeClass('show');
  }
});