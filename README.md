# gulp-plugin-cb

[![build status][build-png]][build]
[![Davis Dependency status][dep-png]][dep]

[![NPM][npm-png]][npm]

Transform Vinyl files using Gulp plugins but with a callback interface.

## Example

```js
var transform = require('gulp-plugin-cb');
var uglify = require('gulp-uglify');

transform(file, uglify(), function onComplete(err, file) {
  // file has been transformed with uglify
});
```

## Installation

`npm install gulp-plugin-cb`

## Tests

`npm test`

## NPM scripts

 - `npm run cover` This runs the tests with code coverage
 - `npm run lint` This will run the linter on your code
 - `npm test` This will run the tests.
 - `npm run trace` This will run your tests in tracing mode.
 - `npm run travis` This is run by travis.CI to run your tests
 - `npm run view-cover` This will show code coverage in a browser

## Contributors

 - Matt Morgan

## MIT Licenced

  [build-png]: https://secure.travis-ci.org/mlmorg/gulp-plugin-cb.png
  [build]: https://travis-ci.org/mlmorg/gulp-plugin-cb
  [dep-png]: https://david-dm.org/mlmorg/gulp-plugin-cb.png
  [dep]: https://david-dm.org/mlmorg/gulp-plugin-cb
  [npm-png]: https://nodei.co/npm/gulp-plugin-cb.png?stars&downloads
  [npm]: https://nodei.co/npm/gulp-plugin-cb
