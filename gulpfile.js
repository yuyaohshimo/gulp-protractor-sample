var _ = require('lodash');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var protractor = require('gulp-protractor').protractor;
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  return gulp
  .src('')
  .pipe(webserver({
    hot: 'localhost',
    port: 8888
  }));
});

gulp.task('protractor', function() {
  var protractorEnv = _.intersection(_.keys(gulp.env), ['mac', 'windows'])[0] || 'mac';
  var configFile = 'test/e2e/config.' + protractorEnv + '.js';

  return gulp
  .src(['./test/e2e/spec/*.js'])
  .pipe(protractor({
    configFile: configFile,
    args: ['--baseUrl', 'http://localhost:8888']
  }))
  .on('error', function(e) { throw e; });
});

gulp.task('test:e2e', function(callback) {
  runSequence(
    'webserver',
    'protractor',
    callback
  );
});