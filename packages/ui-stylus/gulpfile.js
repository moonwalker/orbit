const path = require('path');
const { src, dest, parallel, series, watch } = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const pug = require('gulp-pug');
const print = require('gulp-print').default;
const browserSync = require('browser-sync').create();
const through = require('through2').obj;

const orbitUI = require('./');

const OUTPUT_DIR = path.join(__dirname, 'dist');
const pages = require(path.join(__dirname, 'demo/pages.json')); // eslint-disable-line import/no-dynamic-require

const getPage = slug => pages.find(page => page.slug === slug);

const loadPugData = (file, enc, next) => {
  const filepath = path.parse(file.path);

  // eslint-disable-next-line no-param-reassign
  file.data = Object.assign({}, file.data, {
    currentPage: getPage(filepath.name),
    pages,
  });

  next(null, file);
};

const buildHtml = (cb) => {
  src('**/[^_]*.pug', { cwd: 'demo', base: 'demo' })
    .pipe(through(loadPugData))
    .pipe(pug())
    .pipe(print())
    .pipe(dest(OUTPUT_DIR));

  cb();
};

const buildCss = (cb) => {
  src('**/[^_]*.styl', { cwd: 'demo', base: 'demo' })
    .pipe(stylus({
      use: orbitUI({
        autoImport: false,
      }),
    }))
    .pipe(postcss([
      autoprefixer,
    ]))
    .pipe(print())
    .pipe(dest(OUTPUT_DIR));

  cb();
};

const listen = () => {
  browserSync.init({
    server: {
      baseDir: OUTPUT_DIR,
    },
    watchOptions: {
      ignoreInitials: true,
    },
    files: [OUTPUT_DIR],
    open: false,
  });

  watch(['lib/**/*.styl', 'demo/**/*.styl'], buildCss);
  watch(['demo/**/*.pug'], buildHtml);
};

const build = parallel(buildHtml, buildCss);
const serve = series(build, listen);

module.exports.build = build;
module.exports.serve = serve;
