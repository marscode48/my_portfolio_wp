<?php
/*
 * Template Name: Contact
 */
?>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property='og:type' content='website'>
    <meta property='og:title' content='MARS-CODE｜Masakazu Adachi Portfolio'>
    <meta property='og:url' content='http://localhost:3000/'>
    <meta property='og:description'
    content='WebコーダーMasakazu Adachiのポートフォリオです。丁寧かつ迅速にWebサイトを制作します。'>
    <meta property="og:image" content="http://localhost:3000/images/ogp.png">
    <meta name="description" content="WebコーダーMasakazu Adachiのポートフォリオです。丁寧かつ迅速にWebサイトを制作します。" />
    <title>MARS-CODE｜CONTACT</title>
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
          "btn-animation": "./js/libs/btn-animation.js"
        }
      }
    </script>
    
    <script src="js/vendors/gsap.min.js" defer></script>
    <script src="js/vendors/scroll-trigger.min.js" defer></script>
    <script src="js/vendors/p5.min.js" defer></script>
    <script src="js/vendors/scroll-polyfill.js" defer></script>
    <script type="module" src="js/libs/three-animation.js"></script>
    <script type="module" src="js/main-contact.js"></script>
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
            </ul>
          </nav>
          <div class="gnav__circle-bg"></div>
        </div>
      </header>
      <!-- /header -->

      <!-- content -->
      <main class="content">
        <canvas id="mainCanvas"></canvas>

        <!-- contact -->
        <section id="contact" class="contact-page section">
          <div class="container">
            <div class="section__heading">
              <h2 class="heading-primary tween-animate-title">CONTACT</h2>
            </div>
            <div class="section__body appear up">

            </div>
          </div>
        </section>
        <!-- /contact -->
        
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
