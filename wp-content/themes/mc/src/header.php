<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property='og:type' content='website'>
    <meta property='og:title' content='<?php echo bloginfo('name'); ?>'>
    <meta property='og:url' content='<?php echo esc_url(home_url()); ?>'>
    <meta property='og:description' content='<?php bloginfo('description'); ?>'>
    <meta property="og:image" content="<?php echo esc_url(get_theme_file_uri('images/ogp-1200x630.jpg')); ?>">
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" type="image/png" href="<?php echo esc_url(get_theme_file_uri('images/icon-192x192.png')); ?>">
    <link rel="apple-touch-icon" type="image/png" href="<?php echo esc_url(get_theme_file_uri('images/apple-touch-icon-180x180.png')); ?>">
    <link rel="icon" href="<?php echo esc_url(get_theme_file_uri('favicon.ico')); ?>">
    <link rel="canonical" href="<?php echo esc_url(home_url()); ?>" />
    <!-- JSファイル内でパスを取得する変数 -->
    <script> const path = "<?php echo get_template_directory_uri(); ?>";</script>
    
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
              <a href="<?php echo esc_url(home_url()); ?>" class="header__logo-link">
                <img src="<?php echo esc_url(get_theme_file_uri('images/mars-code-logo.svg')); ?>" alt="MARS-CODE ロゴ" class="header__logo-img">
                Masakazu Adachi
              </a>
            </<?php echo $html_tag; ?>>
            <button type="button" class="header__btn">
              <span class="header__line"></span>
            </button>
          </div>
          <div class="header__nav">
            <nav class="gnav">
              <div class="gnav__canvas"></div>
              <ul class="gnav__list">
                <?php 
                if(is_home() || is_front_page()):
                  get_template_part('gnav', 'home');
                else:
                  get_template_part('gnav', 'page');
                endif
                ?>
              </ul>
            </nav>
            <div class="gnav__circle-bg"></div>
          </div>
        </header>
        <!-- /header -->