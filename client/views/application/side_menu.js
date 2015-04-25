Template.sideMenu.events({
  'click .settings': function (e) {
    Router.go('bookmarkSetting');
    $('.side-menu').removeClass('show');
  }
});