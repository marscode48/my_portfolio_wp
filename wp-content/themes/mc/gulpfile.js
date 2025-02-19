//----------------------------------------------------------------------
//  モジュール読み込み
//----------------------------------------------------------------------
const { src, dest, watch, series, parallel, lastRun } = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const $ = loadPlugins();
const pkg = require('./package.json');
const del = require('del');
const conf = pkg["gulp-config"];
const sizes = conf.sizes;
const cssnano = require('cssnano');
const imageminPngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync').create();
const isProduction = process.env.NODE_ENV === "production";

//----------------------------------------------------------------------
//  関数定義（WordPress用）distへ出力せずにテーマ直下に出力、browserSyncのproxyにLocalのサイトドメインを設定
//----------------------------------------------------------------------
function icon(done) {
  for (let size of sizes){
    let width = size[0];
    let height = size[1];
    src('./favicon.png')
    .pipe($.imageResize({
      // width = width,
      // height = height,
      width,
      height,
      crop: true,
      upscale: false
    }))
    .pipe($.rename(`favicon-${width}x${height}.png`))
    .pipe(dest('./images/icon'));
  }
  done();
}

function resize() {
  return src("./src/resize/**")
    .pipe($.imageResize({
      // width: 1024,
      // height: 768,
      // width: 1280,
      // height: 720,
      // width: 1600,
      // height: 900,
      width: 1920,
      height: 1080,
      crop: true,
      upscale: false,
    }))
    .pipe(dest("./src/images"));
}

function imagemin() {
  return src('./src/images/**', { since: lastRun(imagemin) })
  .pipe($.imagemin([
    $.imagemin.gifsicle({interlaced: true}),
    $.imagemin.mozjpeg({quality: 75, progressive: true}),
    imageminPngquant({
      quality: [.50, .60],
      speed: 1,
    }),
    $.imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(dest("./images"));
}

function styles() {
  return src('./src/sass/**/!(_)*.scss')
    .pipe($.plumber({
      errorHandler: $.notify.onError('Error: <%= error.message %>')
    }))
    .pipe($.if(!isProduction, $.sourcemaps.init()))
    .pipe($.dartSass({
      outputStyle: 'expanded'
    }))
    .pipe($.autoprefixer({
      cascade: true
    }))
    .pipe($.if(!isProduction, $.sourcemaps.write('./')))
    .pipe($.if(isProduction, $.postcss([cssnano({ autoprefixer: false })])))
    .pipe(dest('./'))
    .pipe($.debug({title: 'scss dest:'}));
}

function scripts() {
  return src(['./src/js/**/*.js', '!./src/js/vendors/*.js'])
    .pipe($.if(!isProduction, $.sourcemaps.init()))
    // .pipe($.babel())
    .pipe($.if(!isProduction, $.sourcemaps.write('./')))
    .pipe($.if(isProduction, $.uglify()))
    .pipe(dest('./js'));
}

function lint() {
  return src(['./src/js/**/*.js', '!./src/js/vendors/*.js', '!./src/js/libs/jquery.js'])
    .pipe($.eslint({fix: true}))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
    .pipe(dest('./src/js'))
}

function extras() {
  return src([
    './src/js/vendors/**',
    './src/*.html',
    './src/*.php',
    './src/*.ico',
    './src/*.png',
    './src/css/**',
    './src/video/**',
    './src/audio/**',
  ], {
    base: 'src'
  }).pipe(dest('./'));
}

function clean() {
  return del([
    './*.html',
    './*.php',
    './*.ico',
    './*.png',
    './css/**',
    './js/**',
    './images/**',
    './video/**',
    './audio/**',
  ]);
}

function startAppServer() {
  browserSync.init({
    proxy : "mars-code.local", // Localのサイトドメインに合わせる
  });

  watch('./src/sass/**/*.scss', styles);
  watch('./src/js/**/*.js', scripts);
  watch('./src/images/**', imagemin);
  watch(['./src/*.html', './src/*.php', './src/css/**'], extras);
  watch(['./src/sass/**/*.scss',
    './src/js/**/*.js',
    './src/*.html',
    './src/*.php',
    './src/css/**',
    './src/images/**'
  ]).on('change', browserSync.reload);
}

//----------------------------------------------------------------------
//  タスク定義
//----------------------------------------------------------------------
const build = series(clean, parallel(imagemin, extras, styles, series(lint, scripts)));
const serve = series(build, startAppServer);

// 外部に公開してGulp CLIからタスクを実行（使用例：gulp build）
exports.icon = icon;
exports.resize = resize;
exports.imagemin = imagemin;
exports.styles = styles;
exports.scripts = scripts;
exports.lint = lint;
exports.build = build;
exports.serve = serve;
exports.default = serve;