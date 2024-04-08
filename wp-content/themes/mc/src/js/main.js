import { MouseStalker } from 'mouse-stalker';
import { MenuOpen } from 'menu-open';
import { MainViasual } from 'main-visual';
import { ThreeAnimation } from 'three-animation';
import { HeroSlider } from 'slider-swiper';
import { SmoothScroll } from 'smooth-scroll';
import { ScrollObserver } from 'scroll-observer';
import { WorksAnimation } from 'works-animation';
import { TextAnimation, TweenTextAnimation } from 'text-animation';
import { SkillAnimation } from 'skill-animation';
import { AboutAnimation } from 'about-animation';
import { ContactCanvas } from 'contact-canvas';
import { ContactAnimation } from 'contact-animation';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this.hero = new HeroSlider('.works-hero.swiper', '3000');
    this.about = document.querySelector('.about');
    this.contactCanvas = new ContactCanvas('.contact__canvas');
    this.#init();
  }

  #init() {
    new ThreeAnimation();
    new MenuOpen();
    new AboutAnimation(this.about); // 最初にpin-spacerを取得（SmoothScrollのズレ防止）
    new SmoothScroll(0);
    Pace.on('done', this.#scrollInit.bind(this));
  }

  #scrollInit() {
    new ScrollObserver('.mouse-stalker', this.#mouseAnimation.bind(this));
    new ScrollObserver('.nav-trigger', this.#navAnimation.bind(this), { once: false });
    new ScrollObserver('.works-hero', this.#toggleHeroAnimation.bind(this), { once: false });
    new ScrollObserver('.appear', this.#inviewAnimation);
    new ScrollObserver('.tween-animate-title', this.#textAnimation, { rootMargin: '-50px 0px' });
    new ScrollObserver('.mv', this.#mvAnimation);
    new ScrollObserver('.works', this.#worksAnimation);
    new ScrollObserver('.skill', this.#skillAnimation);
    new ScrollObserver('.contact', this.#toggleContactCanvas.bind(this), { once: false });
    new ScrollObserver('.contact', this.#contactAnimation);
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

  #toggleHeroAnimation(el, inview) {
    if (inview) {
      this.hero.start();
      console.log('hero start is called');
    } else {
      this.hero.stop();
      console.log('hero stop is called');
    }
  }

  #mvAnimation(el, inview) {
    if (inview) {
      new MainViasual(el);
    }
  }

  #worksAnimation(el, inview) {
    if (inview) {
      new WorksAnimation(el);
    }
  }

  #skillAnimation(el, inview) {
    if (inview) {
      new SkillAnimation(el);
    }
  }

  #toggleContactCanvas(el, inview) {
    if (inview) {
      this.contactCanvas.start();
      console.log('contact start is called');
    } else {
      this.contactCanvas.stop();
      console.log('contact stop is called');
    }
  }

  #contactAnimation(el, inview) {
    if (inview) {
      new ContactAnimation(el);
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
