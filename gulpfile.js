'use strict'

const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const concat = require('gulp-concat')

gulp.task('default', ['clean','build', 'server', 'watch'])

gulp.task('build', ['sass', 'html', 'js', 'images', 'fonts'])
gulp.task('clean', function () {
  return del(['./public/images/**', '!./public/images'], {force:true})
})

gulp.task('sass', function() {
  return gulp
    .src([
      './src/scss/*.scss',
      'node_modules/font-awesome/css/font-awesome.css',
    ])
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css/'))
    .pipe(connect.reload())
})

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', ['sass'])
  gulp.watch('./public/*.html', ['html'])
  gulp.watch('./src/js/*.js', ['js'])
})

gulp.task('html', function() {
  gulp
    .src('./public/*.html')
    .pipe(connect.reload())
})

gulp.task('js', function() {
  gulp
    .src([
      './node_modules/jquery/dist/jquery.min.js',
      './src/js/vendor/*.js',
      './src/js/*.js',
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(connect.reload())
})

gulp.task('images', function() {
  gulp
    .src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images/'))
})

gulp.task('fonts', function() {
  gulp
    .src(['./src/fonts/*', 'node_modules/font-awesome/fonts/*'])
    .pipe(gulp.dest('./public/fonts'))
})

gulp.task('server', function() {
  connect.server({
    root: 'public',
    livereload: true,
  })
})
