// this is used as the nightwatch global objct so we can have access
// to the worker global setup and teardown.  this module is referenced
// because it is defined as "globals_path" in the nightwatch.json file
module.exports = require('smocks-magellan-nightwatch').init({

  // bould our application assets to the "outputPath" provided
  build: function (outputPath, callback) {
    var config = require('../webpack.config.js');
    config.output.path = outputPath;
    require('webpack')(config).run(callback);
  },

  // point to our mock server hapi plugin
  mockServerPlugin: require('../mocks/mock-server-hapi-plugin')
});
