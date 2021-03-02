"use strict";

const gulp = require("gulp");
const concat = require("gulp-concat");
const debug = require("gulp-debug");
// const { title } = require("process");
const sourcemaps = require("gulp-sourcemaps");
//вариант 1
// return (
//   gulp
//     .src("frontend/styles/**/*.css", { base: "frontend" })
//     .pipe(sourcemaps.init()) //file.sourcemap
//     .pipe(debug({ title: "src" }))
//     .pipe(concat("all.css"))
//     .pipe(debug({ title: "concat" }))
//     .pipe(sourcemaps.write())
//     // .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("public"))
// );

//вариант 2
const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV == "development";

gulp.task("styles", function () {
  let pipeline = gulp.src("frontend/styles/**/main.css");

  if (isDevelopment) {
    pipeline = pipeline.pipe(sourcemaps.init()); //создает file.sourcemap
  }

  // pipeline.pipe(debug({ title: "src" }));

  // pipeline.pipe(concat("all.css")); //объединяет

  //   pipeline.pipe(debug({ title: "concat" }))

  if (isDevelopment) {
    pipeline.pipe(sourcemaps.write()); //Записывается в сорсмап
  }

  return pipeline.pipe(gulp.dest("public")); //записываем в конечную папку
});
