const gulp = require('gulp');
const eslint = require('gulp-eslint');

var testFiles = ['lab-vien/test/**/*.js'];
var appFiles = ['lab-vien/lib/**/*.js', 'lab-vien/bin/cowsaycli'];

gulp.task('lint:app', () => {
  gulp.src(appFiles)
    .pipe(eslint ({
      rules: {
        indent: [2, 2]
      },
      envs: [
        'node',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('default', ['lint:app']);
