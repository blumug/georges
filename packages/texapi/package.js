Package.describe({
  name: 'texapi',
  summary: "texapi package",
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.4');
  api.addFiles('texapi.js', 'server');
  api.export('Texapi');
});