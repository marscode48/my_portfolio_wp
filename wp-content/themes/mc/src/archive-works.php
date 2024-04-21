<?php get_header(); ?>

<!-- content -->
<main class="content">
  <canvas id="mainCanvas"></canvas>

  <!-- works -->
  <section id="works" class="works-page section">
    <div class="container">
      <div class="section__heading">
        <h2 class="heading-primary tween-animate-title">WORKS</h2>
      </div>
      <div class="section__body appear up">
        <div class="works-page__list item">
          <!-- swiper-main -->
          <div class="swiper swiper-main">
            <div class="swiper-wrapper">
            <?php
              $args = array(
                'post_type' => 'works',
                'posts_per_page' => -1,
              );
              $the_query = new WP_Query($args);
            ?>
            <?php if ($the_query->have_posts()): while ($the_query->have_posts()): $the_query->the_post(); ?>

              <div class="swiper-slide">
                <div class="slide">
                <?php if(has_post_thumbnail()): ?>
                  <div class="slide__img-wrapper"><img class="slide__img" src="<?php the_post_thumbnail_url('full'); ?>" alt="worksスライド画像一覧"></div>
                  <p class="slide__title"><?php the_title(); ?></p>
                  <p class="slide__text"><?php echo get_the_term_list($post->ID,'works-tag','',' / '); ?></p>
                  <div class="slide__link">
                    <a href="<?php the_permalink(); ?>" class="btn">more
                      <i class="btn-icon fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                <?php endif; ?>
                </div>
              </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
            <?php endif; ?>
            </div>
            <div class="swiper-controller">
              <div class="swiper-button-prev mouse-stalker-link"></div>
              <div class="swiper-button-next mouse-stalker-link"></div>
            </div>
            <div class="swiper-fraction">
              <span class="swiper-fraction-current">
                <span class="swiper-fraction-num"></span>
              </span>
              <span class="swiper-fraction-total"></span>
            </div>
          </div>
          <!-- /swiper-main -->
          
          <!-- swiper-thumb -->
          <div class="swiper swiper-thumb">
            <div class="swiper-wrapper">
            <?php
              $args = array(
                'post_type' => 'works',
                'posts_per_page' => -1,
              );
              $the_query = new WP_Query($args);
            ?>
            <?php if ($the_query->have_posts()): while ($the_query->have_posts()): $the_query->the_post(); ?>
              <div class="swiper-slide">
              <?php if(has_post_thumbnail()): ?>
                <div class="thumb mouse-stalker-link">
                  <div class="thumb__img-wrapper">
                    <img class="thumb__img" src="<?php the_post_thumbnail_url('full'); ?>" alt="worksサムネイル画像一覧">
                  </div>
                </div>
              <?php endif; ?>
              </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
            <?php endif; ?>
            </div>
            <div class="swiper-scrollbar mouse-stalker-link"></div>
          </div>
          <!-- /swiper-thumb -->
        </div>
      </div>
    </div>
  </section>
  <!-- /works -->
  
  <!-- page-top -->
  <div class="page-top">
    <a href="#top">
      <i class="page-top-icon fa-solid fa-chevron-up"></i>
    </a>
  </div>
  <!-- /page-top -->
</main>

<?php get_footer(); ?>