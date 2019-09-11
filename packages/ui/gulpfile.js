const path = require('path');
const { dest, src, task, parallel } = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const print = require('gulp-print').default;
const orbitUI = require('@moonwalker/orbit-ui-stylus');

const SRC_DIR = path.join(__dirname, 'node_modules/@moonwalker/orbit-ui-stylus/lib/orbit-ui');
const DIST_DIR = path.join(__dirname, 'dist');

const compileLib = (cb) => {
  src('orbit-ui.styl', { cwd: SRC_DIR, base: SRC_DIR })
    .pipe(
      stylus({
        use: orbitUI(),
        define: {
          '$bem-selectors': true
        }
      })
    )
    .pipe(postcss([autoprefixer]))
    .pipe(print())
    .pipe(dest(DIST_DIR));

  cb();
};

const compileComponents = (cb) => {
  src('*/[^_]*.styl', { cwd: SRC_DIR, base: SRC_DIR })
    .pipe(
      stylus({
        use: orbitUI(),
        define: {
          '$bem-selectors': true
        }
      })
    )
    .pipe(postcss([autoprefixer]))
    .pipe(print())
    .pipe(dest(DIST_DIR));

  cb();
};

module.exports.compile = parallel(compileLib, compileComponents);

module.exports.minimize = (cb) => {
  src('**/*.css', { cwd: DIST_DIR, base: DIST_DIR })
    .pipe(postcss([cssnano]))
    .pipe(
      rename((filepath) => {
        filepath.basename += '.min';
      })
    )
    .pipe(print())
    .pipe(dest(DIST_DIR));

  cb();
};
