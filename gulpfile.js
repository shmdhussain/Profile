var gulp = require('gulp');



// Requires the gulp-sass plugin
var sass = require("gulp-sass")(require("sass"));
// Requiring Sourcemaps
var sourcemaps = require('gulp-sourcemaps');

//For failure noification
var notify = require('gulp-notify');

//silently logs the error in the build pipeline without exiting
var plumber = require('gulp-plumber');


gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') // Gets the styles.scss file
	 .pipe(plumber({ errorHandler: function(err) {
        notify.onError({
            title: "Gulp error in " + err.plugin,
            message:  err.toString()
        })(err);

    }}))
    .pipe(sourcemaps.init()) // Initialize sourcemap plugin
    .pipe(sass())
    .pipe(sourcemaps.write()) // Writing sourcemaps
    .pipe(gulp.dest('css'));
    // done();
});



gulp.task('watch', gulp.series('sass', function(done) {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
  done();
}));

gulp.task('default', gulp.series('watch'));
gulp.task('build', gulp.series('sass'));
