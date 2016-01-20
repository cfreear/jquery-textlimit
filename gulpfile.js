// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

var stripDebug = require('gulp-strip-debug');
var sourceMaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var qunit = require('gulp-qunit');

// JS hint task
gulp.task('jshint', function() {
    return gulp.src('./src/jquery.textlimit.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Build task
gulp.task('build', function() {
    return gulp.src('./src/jquery.textlimit.js')
      .pipe(sourceMaps.init())
      .pipe(stripDebug())
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(sourceMaps.write('./'))
      .pipe(gulp.dest('./build/'));
});

gulp.task('travis', function() {
    return gulp.src('./tests/index.html')
        .pipe(qunit());
});

//default task, run all and then watch
gulp.task('default', ['jshint', 'build'], function() {
    gulp.watch('./src/jquery.textlimit.js', ['jshint','build']);
});
