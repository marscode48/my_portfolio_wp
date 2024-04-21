<?php get_header() ?>

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

<?php get_footer() ?>