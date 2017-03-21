var gulp = require('gulp');
var run = require('gulp-run');
var runSequence = require('run-sequence');

gulp.task('build', function(){
  return run('npm run test.build').exec();
});

gulp.task('test', function(){
  return run('npm run test.run').exec();
});

gulp.task('report', function(){
  return run('npm run test.report').exec();
});

gulp.task('default', function(){
  runSequence('build', 'test', 'report');
});