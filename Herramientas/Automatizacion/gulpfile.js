// 
const gulp = require('gulp')
const server = require('gulp-server-livereload')

gulp.task('build', function (cb) {
    console.log('Construyendo el Sitio');
    setTimeout(cb, 1200);
})


// la tarea nos inicie un server
gulp.task('serve', (cb)=>{
    gulp.src('www')
        .pipe(server({
            livereaload: true,
            open: true
        }));
})

// tarea por defecto
gulp.task('default',gulp.series('build', 'serve'))