// this is used as the nightwatch global objct so we can have access
// to the worker global setup and teardown.  this module is referenced
// because it is defined as "globals_path" in the nightwatch.json file
var fs = require('fs');
module.exports = require('smocks-magellan-nightwatch').nightwatch({

  // point to our mock server hapi plugin
  mockServer: require('../mocks/mock-server-hapi-plugin'),
  tls: {
    key: fs.readFileSync('/Users/agupt13/Documents/workspace/mocks/shifu_src/test/resources/key.pem'),
    cert: fs.readFileSync('/Users/agupt13/Documents/workspace/mocks/shifu_src/test/resources/cert.pem')
  },
});
