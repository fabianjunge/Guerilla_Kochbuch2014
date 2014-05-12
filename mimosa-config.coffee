exports.config =
  minMimosaVersion:'2.0.0'

  modules: [
    'server'
    'coffeescript'
    'live-reload'
    'jshint'
    'csslint'
    'web-package'
    'copy'
    'sass'
  ]
  vendor:
    stylesheets: "sass/vendor/"

  server:
    defaultServer:
      enabled: true
    views:
      compileWith: 'html'
