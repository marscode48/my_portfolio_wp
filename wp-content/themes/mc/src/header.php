<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property='og:type' content='website'>
    <meta property='og:title' content='<?php echo bloginfo('name'); ?>'>
    <meta property='og:url' content='<?php echo esc_url(home_url()); ?>'>
    <meta property='og:description' content='<?php bloginfo('description'); ?>'>
    <meta property="og:image" content="<?php echo esc_url(get_theme_file_uri('/images/ogp.png')); ?>">
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <title><?php echo bloginfo('name'); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" href="<?php echo esc_url(get_theme_file_uri('/favicon.ico')); ?>" />
    <link rel="canonical" href="<?php echo esc_url(home_url()); ?>" />
    <!-- JSファイル内でパスを取得する変数 -->
    <script> const path = "<?php echo get_template_directory_uri(); ?>";</script>
    <!-- Chrome系以外のブラウザでimportmapをサポート -->
    <script async src="https://unpkg.com/es-module-shims@1.8.3/dist/es-module-shims.js"></script>    

    <script type="importmap">
      {
        "imports": {
          "mouse-stalker": "http://mars-code.local/wp-content/themes/mc/js/libs/mouse-stalker.js",
          "three": "https://unpkg.com/three@0.142.0/build/three.module.js",
          "menu-open": "http://mars-code.local/wp-content/themes/mc/js/libs/menu-open.js",
          "main-visual": "http://mars-code.local/wp-content/themes/mc/js/libs/mv-animation.js",
          "three-animation": "http://mars-code.local/wp-content/themes/mc/js/libs/three-animation.js",
          "slider-swiper": "http://mars-code.local/wp-content/themes/mc/js/libs/slider-swiper.js",
          "smooth-scroll": "http://mars-code.local/wp-content/themes/mc/js/libs/smooth-scroll.js",
          "scroll-observer": "http://mars-code.local/wp-content/themes/mc/js/libs/scroll-observer.js",
          "works-animation": "http://mars-code.local/wp-content/themes/mc/js/libs/works-animation.js",
          "text-animation": "http://mars-code.local/wp-content/themes/mc/js/libs/text-animation.js",
          "skill-animation": "http://mars-code.local/wp-content/themes/mc/js/libs/skill-animation.js",
          "about-animation": "http://mars-code.local/wp-content/themes/mc/js/libs/about-animation.js",
          "contact-canvas": "http://mars-code.local/wp-content/themes/mc/js/libs/contact-canvas.js",
          "btn-animation": "http://mars-code.local/wp-content/themes/mc/js/libs/btn-animation.js",
          "article-animation": "http://mars-code.local/wp-content/themes/mc/js/libs/article-animation.js",
          "contact-animation": "http://mars-code.local/wp-content/themes/mc/js/libs/contact-animation.js"
        }
      }
    </script>
    
    <!-- wp_head -->
    <?php wp_head(); ?>
    <!-- /wp_head -->
  </head>
  

  <body>

    <div id="mouse-stalker" class="mouse-stalker">
      <div class="mouse-stalker__circle"></div>
    </div>
    <div id="global-wrapper">
      <div class="wrapper" id="top">
        <!-- header -->
        <div class="nav-trigger"></div>
        <header class="header">
          <div class="header__inner">
            <?php $html_tag = (is_home() || is_front_page()) ? 'h1' : 'div'; ?>
            <<?php echo $html_tag; ?> class="header__logo">
              <a href="<?php echo esc_url(home_url()); ?>">Masakazu Adachi</a>
            </<?php echo $html_tag; ?>>
            <button type="button" class="header__btn">
              <span class="header__line"></span>
            </button>
          </div>
          <div class="header__nav">
            <nav class="gnav">
              <div class="gnav__canvas"></div>
              <ul class="gnav__list">
                <li class="gnav__item"><a class="gnav__link" href="<?php echo esc_url(home_url('/works/')); ?>">WORKS</a></li>
                <li class="gnav__item"><a class="gnav__link" href="<?php echo esc_url(home_url('/skill/')); ?>">SKILL</a></li>
                <li class="gnav__item"><a class="gnav__link" href="<?php echo esc_url(home_url('/about/')); ?>">ABOUT</a></li>
                <li class="gnav__item"><a class="gnav__link" href="<?php echo esc_url(home_url('/contact/')); ?>">CONTACT</a></li>
              </ul>
            </nav>
            <div class="gnav__circle-bg"></div>
          </div>
        </header>
        <!-- /header -->