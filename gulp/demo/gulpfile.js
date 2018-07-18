// 任务总管
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var processorsArray = [
    require('autoprefixer')(
        {
            browsers:['last 2 versions', 'ie 6-8', 'Firefox > 20']
        }
    )
]
gulp.task('styles', function() {
    return gulp.src('./css/one.css')
        .pipe(postcss(processorsArray))
        .pipe(gulp.dest('./build/'))
});
