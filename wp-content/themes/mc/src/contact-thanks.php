<?php
/*
 * Template Name: Contact-Thanks
 */
?>

<?php get_header(); ?>

<!-- content -->
<main class="content">
  <canvas id="mainCanvas"></canvas>

  <!-- contact-thanks-->
  <section id="contact-thanks" class="contact-page section">
    <div class="container">
      <div class="section__heading">
        <h2 class="heading-primary tween-animate-title">THANKS(^^)</h2>
      </div>
      <div class="section__body appear up">
        <div class="contact-page__wrapper item">
          <p class="contact-page__thanks-text">お問い合わせ頂きまして、<br class="sp-only">誠にありがとうございます。</p>
          <p class="contact-page__thanks-text">24時間以内にご返信致しますので、<br class="sp-only">しばらくお待ち下さい。</p>
        </div>
      </div>
      <div class="contact-page__link link">
        <a href="<?php echo esc_url(home_url()); ?>" class="contact-page__btn btn">home
          <i class="btn-icon fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
  <!-- /contact-thanks -->
  
  <!-- page-top -->
  <div class="page-top">
    <a href="#top">
      <i class="page-top-icon fa-solid fa-chevron-up"></i>
    </a>
  </div>
  <!-- /page-top -->
</main>
<!-- /content -->

<?php get_footer(); ?>