'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),

    frontMatter = require('gulp-front-matter'),
    marked = require('gulp-marked'),
    swig = require('swig'),

    sourcemaps = require('gulp-sourcemaps'),

    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),

    less = require('gulp-less'),
    prefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),

    rigger = require('gulp-rigger'),
    rename = require('gulp-rename'),
    rimraf = require('rimraf'),

    filepath = require('path'),
    through = require('through2'),

    browserSync = require("browser-sync"),
    reload = browserSync.reload


var siteInfo = require('./src/_config/info.json'),
    path = {
        build: {
            root:       './build/',
            static:     './build/_assets/',
            js:         './build/_assets/js/',
            js_vendor:  './build/_assets/js/vendor/',
            css:        './build/_assets/css/',
            css_vendor: './build/_assets/css/vendor/',
            img:        './build/_assets/img/',
            files:      './build/_assets/files/',
            fonts:      './build/_assets/fonts/'
        },

        src: {
            rootFiles:  './src/*.*',  // , '!./src/layout/', '!./src/html/', '!./src/_config/'
            tplDir:     './src/tpl/',
            content:    ['./src/content/**/*.md', './src/content/**/*.html', '!./src/**/README.md'],
            js:         ['./src/_assets/js/**/*.js', '!./src/_assets/js/vendor/**/*.js'],
            js_vendor:  ['./src/_assets/js/vendor/**/*.js'],
            less:       ['./src/_assets/css/**/*.less'],
            css:        ['./src/_assets/css/**/*.css', '!./src/_assets/css/vendor/**/*.css'],
            css_vendor: ['./src/_assets/css/vendor/**/*.css'],
            img:        ['./src/_assets/img/**/*', '!./src/_assets/img/**/README.md'],
            files:      ['./src/_assets/files/**/*', '!./src/_assets/files/**/README.md'],
            fonts:      ['./src/_assets/fonts/**/*']
        }
    },
    config = {
        server: {
            baseDir: "./build/"
        },
        tunnel: true,
        host: 'localhost',
        port: 9000,
        logPrefix: "3.14lab"
    }


function summarize(marker) {
    return through.obj(function (file, enc, cb) {                
        var summary = file.contents.toString().split(marker)[0]
        file.page.summary = summary;
        this.push(file);
        cb();
    });
}

var applyTemplate = function () {
    return through.obj(function (file, enc, cb) {            

        file.page.template = file.page.template || 'inner'

        var tpl = swig.compileFile(filepath.join(__dirname, path.src.tplDir + file.page.template + '.html'))

        var data = {
            site: siteInfo,
            page: file.page,
            content: file.contents.toString()
        }

        file.contents = new Buffer(tpl(data), 'utf8')
        this.push(file)
        cb()
    });
}

gulp.task('js:lint', function () {
    gulp.src(path.src.js)
        .pipe(jshint({ asi: true }))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
        .pipe(reload({stream: true}))
})

gulp.task('js:minify', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        //.pipe(concat('all.js'))
        //.pipe(gulp.dest(path.build.js))
        //.pipe(rename('all.min.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}))
})

gulp.task('js:vendor', function () {
    gulp.src(path.src.js_vendor)
        .pipe(gulp.dest(path.build.js_vendor))
        .pipe(reload({stream: true}))
})

gulp.task('css:less', function () {
    gulp.src(path.src.less)
        .pipe(less())
        .pipe(sourcemaps.init())
        .pipe(prefixer())
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}))
})

gulp.task('css:copy', function () {
    gulp.src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(prefixer())
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}))
})

gulp.task('css:vendor', function () {
    gulp.src(path.src.css_vendor)
        .pipe(gulp.dest(path.build.css_vendor))
        .pipe(reload({stream: true}))
})

gulp.task('img:copy', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        //.pipe(imagemin({
            //progressive: true,
            //svgoPlugins: [{removeViewBox: false}],
            //use: [pngquant()],
            //interlaced: true
        //}))
        .pipe(reload({stream: true}))
})

gulp.task('files:copy', function () {
    gulp.src(path.src.files)
        .pipe(gulp.dest(path.build.files))
        .pipe(reload({stream: true}))

    gulp.src([path.src.rootFiles, '!./src/**/README.md'])
        .pipe(gulp.dest(path.build.root))
        .pipe(reload({stream: true}))
})

gulp.task('fonts:copy', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.files))
        .pipe(reload({stream: true}))
})

gulp.task('html:build', function () {
    gulp.src(path.src.content)
        .pipe(frontMatter({property: 'page', remove: true}))
        .pipe(marked())
        .pipe(summarize('<!--more-->'))
        .pipe(applyTemplate())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.root))
        .pipe(reload({stream: true}))
})

gulp.task('watch', function () {
    gulp.watch([path.src.content], ['html:build'])

    gulp.watch([path.src.js], ['js:lint', 'js:minify'])
    gulp.watch([path.src.js_vendor], ['js:vendor'])

    gulp.watch([path.src.img], ['img:copy'])

    gulp.watch([path.src.less], ['css:less'])
    gulp.watch([path.src.css], ['css:copy'])
    gulp.watch([path.src.css_vendor], ['css:vendor'])
    
    gulp.watch([path.src.rootFiles, path.src.files], ['files:copy'])
})

gulp.task('webserver', function () {
    browserSync(config);
})

gulp.task('clean', function(cb) {
    rimraf(path.build.root, cb)
})

gulp.task('default', [

    'html:build',
    
    'js:lint',
    'js:minify',
    'js:vendor',
    
    'img:copy',
    
    'css:less',
    'css:copy',
    'css:vendor',

    'files:copy',
    
    'webserver',
    'watch'
])
