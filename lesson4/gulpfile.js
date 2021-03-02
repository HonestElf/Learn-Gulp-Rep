"use strict";

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const gilpIf = require("gulp-if");
const gulpIf = require("gulp-if");

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV == "development";

gulp.task("styles", function () {
  console.log(isDevelopment);
  console.log(process.env.NODE_ENV);
  return (
    gulp
      .src("frontend/styles/**/*.css", { base: "frontend" })
      .pipe(gulpIf(isDevelopment, sourcemaps.init())) //file.sourcemap
      // .pipe(debug({ title: "src" }))
      .pipe(concat("all.css"))
      // .pipe(debug({ title: "concat" }))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      // .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("public"))
  );
});
