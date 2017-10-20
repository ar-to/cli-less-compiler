// Less configuration
const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
// const del = require('del');
const watch = require('gulp-watch');
// const chokidar = require('chokidar');//required by gulp-watch; https://github.com/paulmillr/chokidar#path-filtering
// const path = require('path');
// const runSequence = require('run-sequence').use(gulp);
// const config = require('config');//define a set of default parameters, and extend them for different deployment environments
// const srcConfig = config.get('SRC');
const plumber = require('gulp-plumber');

const SRC = ['./**/main.less']
// const SRC = [srcConfig.dir_one + srcConfig.file, '!./styles.less'];//checks only files
const DEST = 'dist';

//clean: delete directory when not in use
// gulp.task('clean:dist', function() {
//   return del.sync('dist');
// })
//
// gulp.task('clean:css', function() {
//   return del.sync('./**/main.css');
// })
//
// gulp.task('clean:all', ['clean:dist', 'clean:css']);

gulp.task('compile-less', function() {
    gulp.src(SRC)
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest(DEST))
});

gulp.task('watch-less', function() {
    gulp.watch(SRC, ['compile-less']);
});

gulp.task('default', ['watch-less'])
