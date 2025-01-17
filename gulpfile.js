import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';

const sass = gulpSass(dartSass);

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

export const build = gulp.parallel(styles, images, scripts);

export function watch() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
}

export default build;

