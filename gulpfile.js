var gulp = require('gulp'),
  concat = require('gulp-concat'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  livereload = require('gulp-livereload');

gulp.task('css-deps', function(){
  gulp.src([
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/font-awesome/css/font-awesome.css'
  ])
    .pipe(concat('deps.css'))
    .pipe(gulp.dest('./src/public/css'));

  gulp.src('./node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('./src/public/fonts'));
});

gulp.task('js-deps', function () {
  gulp.src([
    './node_modules/core-js/client/shim.min.js',
    './node_modules/systemjs/dist/system.src.js',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap/dist/bootstrap.js'
  ])
    .pipe(concat('deps.js'))
    .pipe(gulp.dest('./src/public/js'));
});

gulp.task('less', function () {
  gulp.src([
    './less/app.less'
  ])
    .pipe(less())
    .pipe(gulp.dest('./src/public/css'));
});

gulp.task('watch', function () {
  gulp.watch([
    './build/**/*.css'
  ], function (event) {
    return gulp.src(event.path)
      .pipe(livereload());
  });
  gulp.watch('less/**/*.less', ['less']);
});

gulp.task('start', ['js-deps', 'css-deps','less'], function () {
  livereload.listen();
});

gulp.task('default', ['start']);
