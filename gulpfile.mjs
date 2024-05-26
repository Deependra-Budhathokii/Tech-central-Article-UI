import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';

const sass = gulpSass(dartSass);

// Compile Sass to CSS
function compileSass() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
}

// Minify CSS
function minifyCSS() {
    return gulp.src('dist/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

// Concatenate and minify JS
function minifyJS() {
    return gulp.src('src/js/*.js')
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/js'));
}

// Optimize images
function optimizeImages() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

// Watch files for changes
function watch() {
    gulp.watch('src/scss/**/*.scss', compileSass);
    gulp.watch('dist/css/*.css', minifyCSS);
    gulp.watch('src/js/*.js', minifyJS);
    gulp.watch('src/img/*', optimizeImages);
}

export default gulp.series(compileSass, minifyCSS, minifyJS, optimizeImages, watch);
