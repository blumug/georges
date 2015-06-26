
Template.footer.helpers ({

  url: function (param) {

    if (param == "blumug")
      return Settings.URL.BLUMUG;
    if (param == "jbl")
      return Settings.URL.JBL;
    if (param == "twitter")
      return Settings.URL.TWITTER;
    if (param == "storeChromeExtension")
      return Settings.URL.STORE_CHROME_EXTENSION;
    return "";
  }

});