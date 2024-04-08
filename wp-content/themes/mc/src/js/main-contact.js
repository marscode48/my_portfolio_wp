import { MouseStalker } from 'mouse-stalker';
import { MenuOpen } from 'menu-open';
import { ThreeAnimation } from 'three-animation';
import { SmoothScroll } from 'smooth-scroll';
import { ScrollObserver } from 'scroll-observer';
import { TextAnimation, TweenTextAnimation } from 'text-animation';
import { BtnAnimation } from 'btn-animation';

document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this.#init();
  }

  #init() {
    new ThreeAnimation();
    new MenuOpen();
    new SmoothScroll(0);
    this.#scrollInit();
  }

  #scrollInit() {
    new ScrollObserver('.mouse-stalker', this.#mouseAnimation.bind(this));
    new ScrollObserver('.nav-trigger', this.#navAnimation.bind(this), { once: false });
    new ScrollObserver('.appear', this.#inviewAnimation);
    new ScrollObserver('.tween-animate-title', this.#textAnimation, { rootMargin: '-50px 0px' });
    new ScrollObserver('.article-page .link', this.#btnAnimation);
  }

  #mouseAnimation(el, inview) {
    if (inview) {
      new MouseStalker();
    }
  }

  #textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  #navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  }

  #inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    }
  }

  #articleParallaxAnimation(el, inview) {
    if (inview) {
      new ArticleParallaxAnimation('.article-page .parallax__title', '.article-page .parallax__img');
    }
  }

  #articleSlideAnimation(el, inview) {
    if (inview) {
      new ArticleSlideAnimation('.article-page .slide__item');
    }
  }

  #btnAnimation(el, inview) {
    if (inview) {
      new BtnAnimation(el);
    }
  }
}
