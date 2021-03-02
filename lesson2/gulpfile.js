"use strict";

const gulp = require("gulp");

gulp.task("default", function () {
  return (
    gulp
      .src("source/**/*.*")
      //   .src("{source1,source2}/**/*.{js,css}")
      //   .src(["source/**/*.js", "source/**/*.css"])
      .on("data", function (file) {
        //{read:false} - если не надо считывать
        console.log(file);
      })
      // .pipe(gulp.dest("dest"));
      .pipe(
        gulp.dest(function (file) {
          return file.extname == ".js"
            ? "js"
            : file.extname == ".css"
            ? "css"
            : "dest";
        })
      )
  );
});
