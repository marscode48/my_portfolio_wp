import { MouseStalker } from 'mouse-stalker';
import { MenuOpen } from 'menu-open';
import { ThreeAnimation } from 'three-animation';
import { WorksSlider } from 'slider-swiper';
import { SmoothScroll } from 'smooth-scroll';
import { ScrollObserver } from 'scroll-observer';
import { TextAnimation, TweenTextAnimation } from 'text-animation';

document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this.works = new WorksSlider('.works-page .swiper-thumb', '.works-page .swiper-main', '4000');
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
    new ScrollObserver('.swiper-main', this.#toggleWorksAnimation.bind(this), { once: false });
    new ScrollObserver('.appear', this.#inviewAnimation);
    new ScrollObserver('.tween-animate-title', this.#textAnimation, { rootMargin: '-50px 0px' });
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

  #toggleWorksAnimation(el, inview) {
    if (inview) {
      this.works.start();
      console.log('works start is called');
    } else {
      this.works.stop();
      console.log('works stop is called');
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
}

//# sourceMappingURL=main-works.js.map
