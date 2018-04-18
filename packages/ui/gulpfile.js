const path = require('path');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const print = require('gulp-print').default;
const orbitUI = require('@moonwalker/orbit-ui-stylus');

const SRC_DIR = path.join(__dirname, 'node_modules/@moonwalker/orbit-ui-stylus/lib/orbit-ui');
const DIST_DIR = path.join(__dirname, 'dist');

gulp.task('compile:lib', () => {
  gulp.src('orbit-ui.styl', { cwd: SRC_DIR, base: SRC_DIR })
    .pipe(stylus({
      use: orbitUI(),
      define: {
        '$bem-selectors': true,
      },
    }))
    .pipe(postcss([
      autoprefixer
    ]))
    .pipe(print())
    .pipe(gulp.dest(DIST_DIR));
});
gulp.task('compile:components', () => {
  gulp.src('*/[^_]*.styl', { cwd: SRC_DIR, base: SRC_DIR })
    .pipe(stylus({
      use: orbitUI(),
      define: {
        '$bem-selectors': true,
      },
    }))
    .pipe(postcss([
      autoprefixer
    ]))
    .pipe(print())
    .pipe(gulp.dest(DIST_DIR));
});

gulp.task('compile', ['compile:lib', 'compile:components']);

gulp.task('minimize', () => {
  gulp.src('**/*.css', { cwd: DIST_DIR, base: DIST_DIR })
    .pipe(postcss([
      cssnano
    ]))
    .pipe(rename((filepath) => {
      filepath.basename += '.min';
    }))
    .pipe(print())
    .pipe(gulp.dest(DIST_DIR))
});
