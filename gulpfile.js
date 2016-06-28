var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    gulpCopy = require('gulp-contrib-copy'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

gulp.task('copyHTML', function() {
	return gulp.src('src/index.html')
		.pipe(gulpCopy())
    .pipe(gulp.dest('build/'));
  });

gulp.task('copyImages', function() {
	return gulp.src('src/imgs/*.*')
		.pipe(gulpCopy())
    .pipe(gulp.dest('build/imgs'));
  });

gulp.task('js', function() {
  return gulp.src('build/js/myscript.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
    return sass('src/sass/style.scss', {
      sourcemap: true,
      style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function() {
  gulp.watch('build/index.html', ['copyHTML']);
  gulp.watch('build/imgs/**/*', ['copyImages']);
  gulp.watch('build/js/**/*', ['js']);
  gulp.watch(['src/sass/**/*'], ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('build/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch', 'copyHTML', 'copyImages', 'sass', 'webserver']);
