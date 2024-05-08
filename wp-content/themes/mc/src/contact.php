<?php
/*
 * Template Name: Contact
 */
?>

<?php get_header(); ?>

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
        <div class="contact-page__wrapper item">
          <!-- Contact Form -->
          <?php echo do_shortcode('[contact-form-7 id="fffbe94" title="CONTACT"]'); ?>
        </div>
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

<?php get_footer(); ?>
