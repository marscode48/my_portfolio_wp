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
カスタム投稿タイプの追加
**************************************************/
function add_custom_post_type() {

  // 「works」のカスタム投稿追加
  register_post_type(
    'works', //カスタム投稿名（英数字の小文字）
    array(
      'label' => 'WORKS', // 管理画面上の表示（タイトルタグにこのラベルが出力）
      'public' => true, // 管理画面に表示するか
      'has_archive' => true, // 投稿した記事の一覧ページを作成するか
      'menu_position' => 5, // 管理画面メニューの表示位置（投稿の下に追加）
      'show_in_rest' => true, // Gutenbergの有効化
      'supports' => array(
        'title',  // タイトル
        'editor', // エディター
        'thumbnail', // アイキャッチ画像
        'revisions' // リビジョンの保存
      ),
    )
  );

  // 「works」のカスタム投稿にカテゴリーを追加
  register_taxonomy(
    'works-cat', // カテゴリーの名前（英数字の小文字）
    'works',     // カテゴリーを追加したいカスタム投稿タイプ名
    array(
      'label' => 'CATEGORY', // 表示名称（タイトルタグにこのラベルが出力）
      'public' => true, // 管理画面に表示するかどうかの指定
      'hierarchical' => true, // 階層を持たせるかどうか
      'show_in_rest' => true, // REST APIの有効化。ブロックエディタの有効化。
    )
  );

  // 「works」のカスタム投稿にタグを追加
  register_taxonomy(
    'works-tag', // タグの名前（英数字の小文字）
    'works',     // タグを追加したいカスタム投稿タイプ
    array(
      'label' => 'TAG', // 表示名称（タイトルタグにこのラベルが出力）
      'public' => true, // このタクソノミーを利用する場合かどうか
      'hierarchical' => false, // 階層を持たせるかどうか
      'show_in_rest' => true, // REST APIの有効化。ブロックエディタの有効化。
      'update_count_callback' => '_update_post_term_count',
    )
  );
}

add_action('init', 'add_custom_post_type');

/**************************************************
リダイレクト処理
**************************************************/
function custom_redirects() {
  // ページが見つからない場合はトップページに301リダイレクト
	if (is_404()) {
		wp_safe_redirect(home_url( '/' ), 301);
		exit;
	}
  // past-workはトップページに301リダイレクト
	if (is_single('past-work')) {
		wp_safe_redirect(home_url( '/' ), 301);
		exit;
	}
}

add_action('template_redirect', 'custom_redirects');

/**************************************************
CSSファイルの読み込み
**************************************************/
function my_enqueue_styles() {
  if(is_home() || is_front_page()) {
    wp_enqueue_style('loader', get_theme_file_uri('/loader.css'), array(), false, 'all');
  }
  wp_enqueue_style('ress', get_theme_file_uri('css/vendors/ress.min.css'), array(), false, 'all');
  wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap', array(), null, 'all');
  wp_enqueue_style('swiper', get_theme_file_uri('css/vendors/swiper.min.css'), array('ress'), false, 'all');
  wp_enqueue_style('style', get_stylesheet_uri(), array('ress'), false, 'all');
}

add_action('wp_enqueue_scripts', 'my_enqueue_styles');

/**************************************************
JSファイルの読み込み
**************************************************/
function my_enqueue_scripts() {
  wp_deregister_script('jquery'); // デフォルトのjQueryは削除

  if(is_home() || is_front_page()) {
    wp_enqueue_script('loader', get_theme_file_uri('js/vendors/pace.js'), array(), false, false);
  }

  wp_enqueue_script('fontawesome', '//kit.fontawesome.com/52e705be32.js', array(), false, array(
    'strategy' => 'defer', // deferやasyncの情報
    'in_footer' => false // フッターに書くか、falseならhead内
  ));

  // 独自でjQueryを追加
  // wp_enqueue_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', array(), '3.6.0', array(
  //   'strategy' => 'defer',
  //   'in_footer' => false
  // ));

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
  if(is_home() || is_front_page()) {
    wp_enqueue_script('main', get_theme_file_uri('js/main.js'), array(), false, false);
  }

  if(is_archive()) {
    wp_enqueue_script('works', get_theme_file_uri('js/main-works.js'), array(), false, false);
  }

  if(is_single()) {
    wp_enqueue_script('article', get_theme_file_uri('js/main-article.js'), array(), false, false);
  }

  if(is_page('contact') || is_page('contact-thanks')) {
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
ページごとに出力するタイトルタグの内容を変更
**************************************************/ 
function rewrite_title($title) {
  // ディスクリプションの表記を削除
  $title['tagline'] = '';
  // トップページ以外のサイトタイトルを変更
  if(!(is_front_page() || is_home())) {
    $title['site'] = 'MARS-CODE';
  }
  // カスタム投稿のサイトタイトルを変更
  if(is_singular('works')) {
    $title['title'] = '【ARTICLE】'.$title['title'];
  }
	return $title;
}
add_filter('document_title_parts', 'rewrite_title');

/**************************************************
区切り文字の書き換え
**************************************************/ 
function rewrite_separator($separator) {
  $separator = '｜';
  return $separator;
}
add_filter('document_title_separator', 'rewrite_separator');

/**************************************************
2560pxを超える画像をアップロードしても縮小させない
**************************************************/
add_filter( 'big_image_size_threshold', '__return_false' );

/**************************************************
WordPressの自動整形機能を無効化する
**************************************************/
remove_filter('the_content', 'wpautop');
remove_filter('the_excerpt', 'wpautop');

/**************************************************
Contact Form 7の自動pタグとbrタグを無効化する
**************************************************/
add_filter('wpcf7_autop_or_not', 'wpcf7_autop_return_false');
function wpcf7_autop_return_false() {
  return false;
}

/**************************************************
Contact Form 7 サンクスページへ偏移する
**************************************************/
function redirect_to_thanks_page() {
  $homeUrl = home_url();
  echo <<< EOD
    <script>
      document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = '{$homeUrl}/contact-thanks/';
      }, false );
    </script>
  EOD;
}

add_action('wp_footer', 'redirect_to_thanks_page');

/**************************************************
WPデフォルト投稿のアーカイブページを作成
**************************************************/
// function post_has_archive($args, $post_type) {
//   if ('post' == $post_type) {
//     $args['rewrite'] = true; // リライトを有効にする
//     $args['has_archive'] = 'news'; // 任意のスラッグ名
//   }
//   return $args;
// }
// add_filter('register_post_type_args', 'post_has_archive', 10, 2);
