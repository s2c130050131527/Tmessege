'use strict';

var fs = require('fs');
var path = require('path');

console.log('====================================');
console.log('Welcome');
console.log('====================================');

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
