<?php

/**************************************************
タイトルタグ、サムネイル画像を出力
**************************************************/ 
function setup_my_theme() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'setup_my_theme');

/**************************************************
CSSファイルの読み込み
**************************************************/
function my_enqueue_styles() {
  wp_enqueue_style('loader', get_theme_file_uri('/loader.css'), array(), false, 'all');
  wp_enqueue_style('ress', get_theme_file_uri('css/vendors/ress.min.css'), array('loader'), false, 'all');
  wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap', false);
  wp_enqueue_style('swiper', get_theme_file_uri('css/vendors/swiper.min.css'), array('ress'), false, 'all');
  wp_enqueue_style('style', get_stylesheet_uri(), array('ress'), false, 'all');
}

add_action('wp_enqueue_scripts', 'my_enqueue_styles');

/**************************************************
JSファイルの読み込み
**************************************************/
function my_enqueue_scripts() {
  wp_enqueue_script('loader', get_theme_file_uri('js/vendors/pace.js'), array(), false, false);

  wp_enqueue_script('fontawesome', '//kit.fontawesome.com/52e705be32.js', array(), false, array(
    'strategy' => 'defer',
    'in_footer' => false
  ));

  wp_enqueue_script('gsap', get_theme_file_uri('js/vendors/gsap.min.js'), array(), '3.12.2', array(
    'strategy' => 'defer',
    'in_footer' => false
  ));

  wp_enqueue_script('gsap-scroll', get_theme_file_uri('js/vendors/scroll-trigger.min.js'), array(), '3.12.2', array(
    'strategy' => 'defer',
    'in_footer' => false
  ));
  
  wp_enqueue_script('gsap-motion-path', get_theme_file_uri('js/vendors/motion-path-plugin.min.js'), array(), '3.12.2', array(
    'strategy' => 'defer',
    'in_footer' => false
  ));

  wp_enqueue_script('snap-svg', get_theme_file_uri('js/vendors/snap.svg-min.js'), array(), '0.5.1', array(
    'strategy' => 'defer',
    'in_footer' => false
  ));

  wp_enqueue_script('vivus', get_theme_file_uri('js/vendors/vivus.min.js'), array(), false, array(
    'strategy' => 'defer',
    'in_footer' => false
  ));

  wp_enqueue_script('swiper', get_theme_file_uri('js/vendors/swiper-bundle.min.js'), array(), '8.3.1', array(
    'strategy' => 'defer',
    'in_footer' => false
  ));
  
  wp_enqueue_script('p5', get_theme_file_uri('js/vendors/p5.min.js'), array(), '1.7.0', array(
    'strategy' => 'defer',
    'in_footer' => false
  ));

  wp_enqueue_script('scroll-polyfill', get_theme_file_uri('js/vendors/scroll-polyfill.js'), array(), false, array(
    'strategy' => 'defer',
    'in_footer' => false
  ));

  wp_enqueue_script('three', get_theme_file_uri('js/libs/three-animation.js'), array(), false, false);

  // ページ毎に別のJSを読み込む
  if(is_front_page()) {
    wp_enqueue_script('main', get_theme_file_uri('js/main.js'), array(), false, false);
  }

  if(is_archive()) {
    wp_enqueue_script('works', get_theme_file_uri('js/main-works.js'), array(), false, false);
  }

  if(is_single()) {
    wp_enqueue_script('article', get_theme_file_uri('js/main-article.js'), array(), false, false);
  }

  if(is_page('contact')) {
    wp_enqueue_script('article', get_theme_file_uri('js/main-contact.js'), array(), false, false);
  }
}

add_action('wp_enqueue_scripts', 'my_enqueue_scripts');

/**************************************************
scriptタグにtype=module属性を付与
**************************************************/
function add_module($tag, $handle) {
  if ( 'three' === $handle ) {
    $tag = str_replace( '<script type="text/javascript" ', '<script type="module" ', $tag );
  }
  if ( 'main' === $handle ) {
    $tag = str_replace( '<script type="text/javascript" ', '<script type="module" ', $tag );
  }
  if ( 'works' === $handle ) {
    $tag = str_replace( '<script type="text/javascript" ', '<script type="module" ', $tag );
  }
  if ( 'article' === $handle ) {
    $tag = str_replace( '<script type="text/javascript" ', '<script type="module" ', $tag );
  }
  if ( 'contact' === $handle ) {
    $tag = str_replace( '<script type="text/javascript" ', '<script type="module" ', $tag );
  }
  return $tag;
}

add_filter('script_loader_tag', 'add_module', 10, 2);


/**************************************************
投稿のアーカイブページを作成
**************************************************/
function post_has_archive($args, $post_type) {
  if ('post' == $post_type) {
    $args['rewrite'] = true; // リライトを有効にする
    $args['has_archive'] = 'works'; // 任意のスラッグ名
  }
  return $args;
}
add_filter('register_post_type_args', 'post_has_archive', 10, 2);
