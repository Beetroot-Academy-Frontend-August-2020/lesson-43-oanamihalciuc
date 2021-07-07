/* const gulp = require('gulp');
const sass = require('gulp-sass');

const SASS_PATH = './styles/scss/*.scss';
const CSS_PATH = './styles/css/';

function watch() {
  gulp.watch(SASS_PATH, scss);
}

function scss() {
  return gulp
    .src(SASS_PATH) // look for all SASS files
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(CSS_PATH));
}

exports.scss = scss;
exports.watch = watch; */

const gulp = require('gulp');
const sass = require('gulp-sass');

function scss() {   
    return gulp
        .src('./styles/spotify.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css'))
}

exports.scss = scss;