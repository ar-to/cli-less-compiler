// Less configuration
const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const watch = require('gulp-watch');
const chokidar = require('chokidar');//required by gulp-watch; https://github.com/paulmillr/chokidar#path-filtering
const path = require('path');
const runSequence = require('run-sequence');
const config = require('config');//define a set of default parameters, and extend them for different deployment environments 
const srcConfig = config.get('SRC');

const SRC = [srcConfig.dir_one + srcConfig.file, '!./styles.less'];//checks only files
const DEST = 'dist';

//clean: delete directory when not in use
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('clean:css', function() {
  return del.sync('./**/main.css');
})

gulp.task('clean:all', ['clean:dist', 'clean:css']);


gulp.task('watch-less', function() {
    return gulp.watch(SRC).on('change', function(file) {
        gulp.src(file.path)
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest(DEST))
    })
})

gulp.task('default', function (callback) {
  runSequence(
    'clean:all',
    'watch-less',
    callback
  )
})