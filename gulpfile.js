const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('message', function() {
    return console.log("Gulp is running...");
});

// gulp.task('default', function() {
//     return console.log("Gulp is running...");
// });

// copies files
gulp.task('copyHtml', () => {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
})

// Minifies Images
gulp.task('imageMin', () => {
	gulp.src('src/images/*')
		.pipe(imageMin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('minify', () => {
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('sass', () => {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
})

gulp.task('scripts', () => {
    gulp.src("src/js/*.js")
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
})

// gulp.task('default', ['message', 'copyHtml', 'imageMin', 'minify', 'sass']);
