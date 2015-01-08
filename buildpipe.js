var gulp = require("gulp")
var gulp_sass = require("gulp-sass")
var gulp_autoprefixer = require("gulp-autoprefixer")

var vinyl_buffer = require("vinyl-buffer")
var vinyl_source = require("vinyl-source-stream")

var browserify = require("browserify")
var reactify = require("reactify")
var aliasify = require("aliasify")

module.exports.markup = function()
{
    return gulp.src("./source/index.html")
}

module.exports.scripts = function()
{
    return browserify("./source/index.js")
               .transform("reactify")
               .transform("aliasify")
               .bundle()
               .pipe(vinyl_source("index.js"))
               .pipe(vinyl_buffer())
}

module.exports.styles = function()
{
    return gulp.src("./source/index.scss")
               .pipe(gulp_sass())
               .pipe(gulp_autoprefixer())
}

module.exports.assets = function()
{
    return gulp.src("./source/assets/**/*", {base: "./source"})
}

module.exports.configs = function(dir)
{
    return gulp.src("./package.json")
}
