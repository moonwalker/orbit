const path = require('path');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const print = require('gulp-print').default;
const browserSync = require('browser-sync').create();
const orbitUI = require('./');

const OUTPUT_DIR = path.join(__dirname, 'dist');

gulp.task('html', () => {
  gulp.src('**/[^_]*.pug', { cwd: 'demo', base: 'demo' })
    .pipe(pug())
    .pipe(print())
    .pipe(gulp.dest(OUTPUT_DIR));
});

gulp.task('css', () => {
  gulp.src('**/[^_]*.styl', { cwd: 'demo', base: 'demo' })
    .pipe(stylus({
      use: orbitUI({
        autoImport: false,
      }),
    }))
    .pipe(print())
    .pipe(gulp.dest(OUTPUT_DIR));
});

gulp.task('serve', ['css', 'html'], () => {
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

  gulp.watch(['lib/**/*.styl', 'demo/**/*.styl'], ['css']);
  gulp.watch(['demo/**/*.pug'], ['html']);
});
