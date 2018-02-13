'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const rimraf = require('rimraf')
const concat = require('gulp-concat')

gulp.task('default', ['build', 'server', 'watch'])

gulp.task('build', ['sass', 'html', 'js', 'image', 'fonts'])

gulp.task('clean', function(cb) {
  rimraf('./build', cb)
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
    .pipe(gulp.dest('./build/css/'))
    .pipe(connect.reload())
})

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', ['sass'])
  gulp.watch('./src/*.html', ['html'])
  gulp.watch('./src/js/*.js', ['js'])
})

gulp.task('html', function() {
  gulp
    .src('./src/*.html')
    .pipe(gulp.dest('./build'))
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
    .pipe(gulp.dest('./build/js/'))
    .pipe(connect.reload())
})

gulp.task('image', function() {
  gulp
    .src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
})

gulp.task('fonts', function() {
  gulp
    .src(['./src/fonts/*', 'node_modules/font-awesome/fonts/*'])
    .pipe(gulp.dest('./build/fonts'))
})

gulp.task('server', function() {
  connect.server({
    root: 'build',
    livereload: true,
  })
})
