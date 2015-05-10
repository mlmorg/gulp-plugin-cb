'use strict';
var Buffer = require('buffer').Buffer;
var test = require('tape');
var uglify = require('gulp-uglify');
var Vinyl = require('vinyl');

var transform = require('../');

test('transforming a file successfully', function t(assert) {
  var file = new Vinyl({
    path: 'foo.js',
    contents: new Buffer('module.exports = "foo";')
  });

  transform(file, uglify(), function onComplete(err) {
    assert.ifError(err,
      'does not error');

    assert.equal(file.contents.toString(), 'module.exports="foo";',
      'transforms the file correctly');

    assert.end();
  });
});

test('transforming a file unsuccessfully', function t(assert) {
  var file = new Vinyl({
    path: 'foo.js',
    contents: new Buffer('foo bar')
  });

  transform(file, uglify(), function onComplete(err) {
    assert.ok(err,
      'passes error correctly');

    assert.end();
  });
});
