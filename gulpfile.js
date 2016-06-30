/* --- Libs --- */
var gulp = require('gulp'),
    path = require('path'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    postcss = require('gulp-postcss'),
    postcssSize = require('postcss-size'),
    postcssPosition = require('postcss-position'),
    postcssPseudoContent = require('postcss-pseudo-elements-content'),
    livereload = require('gulp-livereload');


/* --- Error --- */
var errorHandler = function(error) {
	gutil.beep();
	console.log(error);
};


/* --- Vars --- */
var browsers = ['last 4 version', 'ff > 20', 'chrome > 25', 'ie > 8'],
	isProd = false;


/* --- Default --- */
gulp.task('default', function() {
	return gulp.start('html', 'css', 'js', 'watch', 'livereload');
});


/* --- Prod --- */
gulp.task('prod', function() {
	isProd = true;
	return gulp.start('html', 'css', 'js');
});


/* --- Task / Iconfont --- */
gulp.task('iconfont', function(){
	return gulp
	.src( './source/icons/*.svg' )
	.pipe( plumber({ errorHandler: errorHandler }))
	.pipe( iconfontCss({
		fontName: 'iconfont',
		path: './source/css/iconfont-template.less',
		targetPath: 'iconfont.less',
		fontPath: '../iconfont/'
	}))
	.pipe( iconfont({
		fontName: 'iconfont',
		normalize: true,
		fontHeight: 100
	}))
	.pipe( gulp.dest('./build/iconfont/') );
});


/* --- Task --- */
gulp.task('css', [ 'iconfont' ], function(){
	return gulp
	.src ( [ './source/css/style.less' ] )
	.pipe( plumber({ errorHandler: errorHandler }))
	.pipe( less() )
	.pipe( concat('style.css') )
	.pipe( prefix(browsers) )
	.pipe( postcss([ postcssPosition, postcssPseudoContent, postcssSize ]) )
	.pipe( csso() )
	.pipe( gulp.dest('./build/css/') )
	.pipe( livereload() );
});


/* --- Task / JS --- */
var uglifyCondition = function(file){
	var filename = path.basename(file.path, '.js');
	return isProd && filename.indexOf('.min')<0;
};
gulp.task('js', function(){
	return gulp
	.src ( [
		'./source/js/libs/modernizr.min.js',
		'./source/js/app.js',
		'./source/js/libs/**/*.js',
		'./source/js/modules/**/*.js',
		'./source/js/plugins/**/*.js',
		'./source/js/script.js'
	] )
	.pipe( plumber({ errorHandler: errorHandler }))
	.pipe( gulpif(uglifyCondition, uglify()) )
	.pipe( concat('script.js') )
	.pipe( gulp.dest('./build/js/') )
	.pipe( livereload() );
});


/* --- Task / HTML --- */
gulp.task('html', function(){
	return gulp
	.src ( [ './*.html', './*.php', './*.inc' ], { read:false } )
	.pipe( livereload() );
});


/* --- Task / Watch --- */
gulp.task('watch', function(){
	watch('./source/**/*.less', function(){
		return gulp.start('css');
	});
	watch('./source/**/*.js', function(){
		return gulp.start('js');
	});
	watch( [ './*.html', './*.php', './*.inc' ], function(){
		return gulp.start('html');
	});
	watch('./source/icons/*.svg', function(){
		return gulp.start('iconfont');
	});
});


/* --- Livereload --- */
gulp.task('livereload', function() {
	livereload.listen();
});