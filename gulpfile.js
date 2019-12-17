'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
gulp.task('sass', function () {
    return gulp.src('./web/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./web/css'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', gulp.parallel('sass'))
});