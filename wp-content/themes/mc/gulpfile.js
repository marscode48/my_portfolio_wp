//----------------------------------------------------------------------
//  モジュール読み込み
//----------------------------------------------------------------------
const { src, dest, watch, series, parallel, lastRun } = require("gulp");
const loadPlugins = require("gulp-load-plugins");
const $ = loadPlugins();
const del = require("del");
const cssnano = require("cssnano");
const browserSync = require("browser-sync").create();
const isProduction = process.env.NODE_ENV === "production";

//----------------------------------------------------------------------
//  関数定義（WordPress用）distへ出力せずにテーマ直下に出力、browserSyncのproxyにLocalのサイトドメインを設定
//----------------------------------------------------------------------

function copyImages() {
  return src("./src/images/**", { since: lastRun(copyImages) }).pipe(
    dest("./images"),
  );
}

function styles() {
  return src("./src/sass/**/!(_)*.scss")
    .pipe(
      $.plumber({
        errorHandler: $.notify.onError("Error: <%= error.message %>"),
      }),
    )
    .pipe($.if(!isProduction, $.sourcemaps.init()))
    .pipe(
      $.dartSass({
        outputStyle: "expanded",
      }),
    )
    .pipe(
      $.autoprefixer({
        cascade: true,
      }),
    )
    .pipe($.if(!isProduction, $.sourcemaps.write("./")))
    .pipe($.if(isProduction, $.postcss([cssnano({ autoprefixer: false })])))
    .pipe(dest("./"))
    .pipe($.debug({ title: "scss dest:" }));
}

function scripts() {
  return src(["./src/js/**/*.js", "!./src/js/vendors/**/*.js"])
    .pipe($.if(!isProduction, $.sourcemaps.init()))
    .pipe($.if(!isProduction, $.sourcemaps.write("./")))
    .pipe($.if(isProduction, $.uglify()))
    .pipe(dest("./js"));
}

function extras() {
  return src(
    [
      "./src/js/vendors/**",
      "./src/*.html",
      "./src/*.php",
      "./src/*.ico",
      "./src/*.png",
      "./src/css/**",
      "./src/video/**",
      "./src/audio/**",
    ],
    {
      base: "src",
    },
  ).pipe(dest("./"));
}

function clean() {
  return del([
    "./*.html",
    "./*.php",
    "./*.ico",
    "./*.png",
    "./css/**",
    "./js/**",
    "./video/**",
    "./audio/**",
  ]);
}

function startAppServer() {
  browserSync.init({
    proxy: "test.mars-code.local", // Localのサイトドメインに合わせる
  });

  watch("./src/sass/**/*.scss", styles);
  watch("./src/js/**/*.js", scripts);
  watch("./src/images/**", copyImages);
  watch(["./src/*.html", "./src/*.php", "./src/css/**"], extras);
  watch([
    "./src/sass/**/*.scss",
    "./src/js/**/*.js",
    "./src/*.html",
    "./src/*.php",
    "./src/css/**",
    "./src/images/**",
  ]).on("change", browserSync.reload);
}

//----------------------------------------------------------------------
//  タスク定義
//----------------------------------------------------------------------
const build = series(clean, parallel(extras, styles, scripts));
const serve = series(build, startAppServer);

// 外部に公開してGulp CLIからタスクを実行（使用例：gulp build）
exports.copyImages = copyImages;
exports.styles = styles;
exports.scripts = scripts;
exports.build = build;
exports.serve = serve;
exports.default = serve;
