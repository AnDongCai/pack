// 定义工作流
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var minifyCSS = require('gulp-minify-css');
// var uglify = require('gulp-uglify');
var reload = browserSync.reload;
var stylus = require('gulp-stylus');
var stylusPath = './src/stylus/*.styl';
// stylus   任务交给一个task
gulp.task('stylus', function() {
    return gulp.src(stylusPath)
        .pipe(stylus())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'))//输出目录
        .pipe(browserSync.stream());
})
var jsPath = 'src/js/*.js';
gulp.task('scripts', function() {
    return gulp.src(jsPath)
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
})
gulp.task('watch', function() {
    // 配合gulp 有一些任务插件
    // 启动browserSync
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    var templateFiles = ['*.html'];
    gulp.watch(templateFiles).on('change', reload);
    // 监听目录，执行一系列任务
    gulp.watch(stylusPath, ['stylus']);
    gulp.watch(jsPath, ['scripts']);
})
