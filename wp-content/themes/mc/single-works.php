<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property='og:type' content='website'>
    <meta property='og:title' content='WebコーダーMASAKAZU ADACHI ポートフォリオ'>
    <meta property='og:url' content='http://localhost:3000/'>
    <meta property='og:description'
    content='WebコーダーMasakazu Adachiのポートフォリオサイトです。丁寧かつ迅速にコーディング致します。'>
    <meta property="og:image" content="http://localhost:3000/images/ogp.png">
    <meta name="description" content="WebコーダーMasakazu Adachiのポートフォリオサイトです。丁寧かつ迅速にコーディング致します。" />
    <title>MASAKAZU ADACHI ポートフォリオ｜ARTICLE</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@500;600;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/52e705be32.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/vendors/ress.min.css" />
    <link rel="stylesheet" href="css/style.css " />
    <link rel="icon" href="favicon.ico" />
    <link rel=”canonical” href=”URLが入る” />

    <!-- Chrome系以外のブラウザでimportmapをサポート -->
    <script async src="https://unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js"></script>

    <script type="importmap">
      {
        "imports": {
          "mouse-stalker": "./js/libs/mouse-stalker.js",
          "three": "https://unpkg.com/three@0.142.0/build/three.module.js",
          "menu-open": "./js/libs/menu-open.js",
          "three-animation": "./js/libs/three-animation.js",
          "smooth-scroll": "./js/libs/smooth-scroll.js",
          "scroll-observer": "./js/libs/scroll-observer.js",
          "text-animation": "./js/libs/text-animation.js",
          "btn-animation": "./js/libs/btn-animation.js",
          "article-animation": "./js/libs/article-animation.js"
        }
      }
    </script>
    
    <script src="js/vendors/gsap.min.js" defer></script>
    <script src="js/vendors/scroll-trigger.min.js" defer></script>
    <script src="js/vendors/p5.min.js" defer></script>
    <script src="js/vendors/scroll-polyfill.js" defer></script>
    <script src="js/libs/three-animation.js" type="module"></script>
    <script src="js/main-article.js" type="module"></script>
  </head>
  

  <body>

    <div id="mouse-stalker" class="mouse-stalker">
      <div class="mouse-stalker__circle"></div>
    </div>
    <div class="wrapper" id="top">
      <!-- header -->
      <div class="nav-trigger"></div>
      <header class="header">
        <div class="header__inner">
          <h1 class="header__logo">
            <a href=".">Masakazu Adachi</a>
          </h1>
          <button type="button" class="header__btn">
            <span class="header__line"></span>
          </button>
        </div>
        <div class="header__nav">
          <nav class="gnav">
            <div class="gnav__canvas"></div>
            <ul class="gnav__list">
              <li class="gnav__item"><a class="gnav__link" href="index.html">HOME</a></li>
              <li class="gnav__item"><a class="gnav__link" href="works.html">WORKS</a></li>
              <li class="gnav__item"><a class="gnav__link" href="index.html#skill">SKILL</a></li>
              <li class="gnav__item"><a class="gnav__link" href="index.html#about">ABOUT</a></li>
              <li class="gnav__item"><a class="gnav__link" href="contact.html">CONTACT</a></li>
            </ul>
          </nav>
          <div class="gnav__circle-bg"></div>
        </div>
      </header>
      <!-- /header -->

      <!-- content -->
      <main class="content">
        <canvas id="mainCanvas"></canvas>

        <!-- article -->
        <article id="article" class="article-page section">
          <div class="container">
            <div class="section__heading">
              <h2 class="heading-primary tween-animate-title">ARTICLE</h2>
            </div>
            <div class="section__body appear up">
              <div class="article-page__wrapper item">
                <!-- parallax -->
                <div class="parallax">
                  <div class="parallax__img"></div>
                  <h3 class="parallax__title">
                    MarsDesign
                  </h3>
                </div>
                <!-- /parallax -->
                <div class="slide">
                  <div class="slide__item">
                    <h3 class="slide__title">
                      <span class="rect"></span>
                      <span class="label">URL</span>
                    </h3>
                    <p class="slide__text slideX">
                      <a class="slide__link" href="https://mars-design.site/" target="_blank" rel="noopener">https://mars-design.site/</a>
                    </p>
                  </div>
                  <div class="slide__item">
                    <h3 class="slide__title">
                      <span class="rect"></span>
                      <span class="label">ROLE</span>
                    </h3>
                    <p class="slide__text slideX">
                      Planning / Design / Cording
                    </p>
                  </div>
                  <div class="slide__item">
                    <h3 class="slide__title">
                      <span class="rect"></span>
                      <span class="label">SKILL</span>
                    </h3>
                    <p class="slide__text slideX">
                      WordPress（オリジナルテーマ） / Swiper / GSAP / JavaScript（オブジェクト指向）
                    </p>
                  </div>
                  <div class="slide__item">
                    <h3 class="slide__title">
                      <span class="rect"></span>
                      <span class="label">ABOUT</span>
                    </h3>
                    <p class="slide__text slideX">
                      WordPressのオリジナルテーマを開発し、架空の企業サイトを制作しました。このサイトではカスタム投稿を活用してWorksページを構築し、お問い合わせフォームにはContact Form 7を採用し、独自のスタイルを組み込んで実装しました。また、WP Mail SMTPを利用してメールサーバーをセットアップし、ローカル環境から本番環境への移行まで行いました。デザインにおいては、企業の信頼性を強調することに重点を置き、ユーザーに安心感を提供するデザインを心がけました。クラス設計から作成したJavaScriptでは、GSAPによるパララックスアニメーションや、Swiperを使ったサムネイル付きスライドを作成し、サイトの機能性と魅力を高めました。
                    </p>
                  </div>  
                </div>
              </div>
            </div>
            <div class="article-page__link link">
              <a href="works.html" class="article-page__btn btn">back
                <i class="btn-icon fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </article>
        <!-- /article -->
        
        <!-- page-top -->
        <div class="page-top">
          <a href="#top">
            <i class="page-top-icon fa-solid fa-chevron-up"></i>
          </a>
        </div>
        <!-- /page-top -->
      </main>

      <!-- footer -->
      <footer class="footer">
        <ul class="footer__list">
          <li class="footer__item">
            <a href="https://twitter.com/marscode48" target="_blank" rel="noopener" class="footer__link"><i class="footer__link-icon appear icon fa-brands fa-square-x-twitter"></i><span class="tween-animate-title">X-Twitter</span></a>
          </li>
          <li class="footer__item">
            <a href="https://www.facebook.com/profile.php?id=61556793703454" target="_blank" rel="noopener" class="footer__link"><i class="footer__link-icon appear icon fa-brands fa-square-facebook"></i><span class="tween-animate-title">Facebook</span></a>
          </li>
        </ul>
        <div class="footer__copyright appear up">
          <span class="item">&copy;MASAKAZU ADACHI</span>
        </div>
      </footer>
      <!-- /footer -->
    </div>
  </body>
</html>
