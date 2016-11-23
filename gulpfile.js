var gulp = require('gulp'),
    less = require('gulp-less'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    ullify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    rev = require('gulp-rev'),
    inject = require('gulp-inject'),
    sequence = require('gulp-sequence');



gulp.task('rev',function(){
	return gulp.src( ['www/js/app.min.js'] )
		.pipe( rev() )
		.pipe( gulp.dest('www/js/') )
		.pipe( rev.manifest() )
		.pipe( gulp.dest('www/js/') );
});
gulp.task('rev1',function(){
	return gulp.src( ['www/css/app.min.css'] )
		.pipe( rev() )
		.pipe( gulp.dest('www/css/') )
		.pipe( rev.manifest() )
		.pipe( gulp.dest('www/css/') );
});
gulp.task('clean',function(){
	return gulp.src(['www/js/app-*.min.*','www/css/app-*.min.*'])
		.pipe( clean() )
});
gulp.task('inject',function(){
	return gulp.src('www/index.html')
		.pipe( inject( gulp.src(['www/css/app-*.min.css','www/js/app-*.min.js']),{ignorePath: 'www/'}) )
		.pipe( gulp.dest('www/') )
});
gulp.task('build',function(cb){
	sequence('clean',['rev','rev1'],'inject',cb);
});



gulp.task('localhost',function(){
	connect.server({
		root:'www/',//静态资源目录
		port:8090
	});
});
gulp.task('less',function(){
	gulp.src(['www/css/index.less','www/css/*less'])
		.pipe( less() )
		.pipe(autoprefixer({
            browsers: ['last 20 versions','last 2 Explorer versions','last 3 Safari versions','Firefox >= 20'],
            cascade: true
        }))
        .pipe( concat("app.min.css") )
        .pipe( gulp.dest('www/css/') );
});
gulp.task('js',function(){
	gulp.src(['www/config/index.js','www/controller/indexController.js','www/controller/*Controller.js'])
		.pipe(  concat('app.min.js') )
		.pipe( ullify() )
		.pipe( gulp.dest('www/js/') )
});
gulp.task('mywatch',function(){
	gulp.watch('www/css/*.less',['less']);
	gulp.watch('www/css/app.min.css',['build']);
	gulp.watch('www/js/app.min.js',['build']);
	gulp.watch(['www/config/index.js','www/controller/*Controller.js'],['js']);


});
gulp.task('default',['mywatch','localhost']);
