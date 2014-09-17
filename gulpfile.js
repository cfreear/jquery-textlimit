// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

var stripDebug = require('gulp-strip-debug');
var uglifyjs = require('gulp-uglifyjs');

// JS hint task
gulp.task('jshint', function() {
    gulp.src('./src/jquery.textlimit.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Build task
gulp.task('build', function() {
    gulp.src('./src/jquery.textlimit.js')
        .pipe(stripDebug())
        .pipe(uglifyjs('jquery.textlimit.min.js', {
            'outSourceMap': true
        }))
        .pipe(gulp.dest('./build/'))
});

//default task, run all and then watch
gulp.task('default', ['jshint', 'build'], function() {
    gulp.watch('./src/jquery.textlimit.js', ['jshint','build']);
});
