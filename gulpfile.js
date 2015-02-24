var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify');

gulp.task('scripts', function() {
	return gulp.src(['src/**/*.js'])
		.pipe(concat('main.js'))
		.pipe(jshint())
		.pipe(jshint.reporter('default', { verbose: true }))
		.pipe(jshint.reporter('fail'))
		.pipe(gulp.dest('dist'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
		.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('clean', function() {
	return gulp.src(['dist/main.min.js', 'dist/main.js'], {read: false})
		.pipe(clean());
});

gulp.task('default', ['clean'], function() {
	gulp.start('scripts', 'watch');
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['scripts']);
});