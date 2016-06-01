// very easy way to start the mock server

// load our example endpoint
require('./endpoints');
var Fs = require('fs');

var tls = {
  key: Fs.readFileSync('/Users/agupt13/Documents/workspace/mocks/shifu_src/test/resources/key.pem'),
  cert: Fs.readFileSync('/Users/agupt13/Documents/workspace/mocks/shifu_src/test/resources/cert.pem')
};

require('smocks/hapi').start({
  port: 8000,
  host: 'localhost',
  tls
}, function () {
  console.log('mock server started on port 8000');
});
