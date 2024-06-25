<?php get_header() ?>

<!-- content -->
<main class="content">
  <?php if( have_posts() ): while( have_posts() ): the_post(); ?>

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
            <div class="parallax__img" style="background: url('<?php the_field('article_image'); ?>') no-repeat top / cover;"></div>
            <h3 class="parallax__title">
              <?php the_title(); ?>
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
                <a class="slide__link" href="<?php the_field('article_url'); ?>" target="_blank" rel="noopener">
                  <?php the_field('article_url'); ?>
                </a>
              </p>
            </div>
            <?php if(get_field('article_username')): ?>
            <div class="slide__item">
              <h3 class="slide__title">
                <span class="rect"></span>
                <span class="label">USER NAME</span>
              </h3>
              <p class="slide__text slideX">
                <?php the_field('article_username'); ?>
              </p>
            </div>
            <?php endif; ?>
            <?php if(get_field('article_password')): ?>
            <div class="slide__item">
              <h3 class="slide__title">
                <span class="rect"></span>
                <span class="label">PASSWORD</span>
              </h3>
              <p class="slide__text slideX">
                <?php the_field('article_password'); ?>
              </p>
            </div>
            <?php endif; ?>
            <div class="slide__item">
              <h3 class="slide__title">
                <span class="rect"></span>
                <span class="label">ROLE</span>
              </h3>
              <p class="slide__text slideX">
                <?php the_field('article_role'); ?>
              </p>
            </div>
            <div class="slide__item">
              <h3 class="slide__title">
                <span class="rect"></span>
                <span class="label">SKILL</span>
              </h3>
              <p class="slide__text slideX">
                <?php the_field('article_skill'); ?>
              </p>
            </div>
            <div class="slide__item">
              <h3 class="slide__title">
                <span class="rect"></span>
                <span class="label">ABOUT</span>
              </h3>
              <p class="slide__text slideX">
                <?php 
                $content = get_the_content();
                // HTMLタグの除去
                $content = strip_tags( $content );
                // ショートコードの除去
                $content = strip_shortcodes( $content );
                // テキストのみを出力
                echo $content 
                ?> 
              </p>
            </div>  
          </div>
        </div>
      </div>
      <div class="article-page__link link">
        <a href="<?php echo home_url(); ?>/works" class="article-page__btn btn">back
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

  <?php endwhile; endif; ?>
</main>
<!-- content -->

<?php get_footer() ?>