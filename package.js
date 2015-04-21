Package.describe({
  name: 'oaf:mite',
  version: '0.1.0',
  summary: 'Node package wrapper for "mite-api"',
  git: 'https://github.com/oafmedium/meteor-mite-api',
  documentation: 'README.md'
});

Npm.depends({
  'mite-api': '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('coffeescript');
  api.addFiles('mite.coffee', 'server');
  api.export('MiteApi');
});
