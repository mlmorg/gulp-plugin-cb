'use strict';
var concat = require('concat-stream');
var Readable = require('readable-stream');

module.exports = gulpPluginCb;

function gulpPluginCb(file, pluginStream, cb) {
  var fileStream = new Readable({objectMode: true});
  var concatStream = concat(callBack);

  fileStream.on('error', handleError);
  pluginStream.on('error', handleError);

  fileStream.push(file);
  fileStream.push(null);
  fileStream.pipe(pluginStream).pipe(concatStream);

  function handleError(err) {
    cb(err);
  }

  function callBack(objs) {
    cb(null, objs[0]);
  }
}
