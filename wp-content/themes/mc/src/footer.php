        <!-- footer -->
        <footer class="footer">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="https://www.chatwork.com/marscode48" target="_blank" rel="noopener" class="footer__link appear right">
                <img class="footer__link-logo item" src="<?php echo esc_url(get_theme_file_uri('images/footer-logo-chatwork.svg')); ?>" alt="Chatwork ロゴ">
                <span class="tween-animate-title">Chatwork</span>
              </a>
            </li>
            <li class="footer__item">
              <a href="https://mars-code.slack.com" target="_blank" rel="noopener" class="footer__link appear right">
                <img class="footer__link-logo item" src="<?php echo esc_url(get_theme_file_uri('images/footer-logo-slack.svg')); ?>" alt="Slack ロゴ">
                <span class="tween-animate-title">Slack</span></a>
            </li>
          </ul>
          <div class="footer__copyright appear up">
            <span class="item">&copy; <?php echo bloginfo('name'); ?></span>
          </div>
        </footer>
        <!-- /footer -->
      </div>
    </div>

    <!-- wp_footer -->
    <?php wp_footer(); ?>
    <!-- /wp_footer -->
  </body>
</html>