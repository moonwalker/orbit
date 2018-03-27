const path = require('path');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const print = require('gulp-print').default;
const orbitUI = require('@moonwalker/orbit-ui-stylus');

const SRC_DIR = path.join(__dirname, 'node_modules/@moonwalker/orbit-ui-stylus/lib/orbit-ui');
const DIST_DIR = path.join(__dirname, 'dist');

gulp.task('build', () => {
  gulp.src('**/[^_]*.styl', { cwd: SRC_DIR, base: SRC_DIR })
    .pipe(stylus({
      use: orbitUI()
    }))
    .pipe(postcss([
      autoprefixer
    ]))
    .pipe(print())
    .pipe(gulp.dest(DIST_DIR));
})
