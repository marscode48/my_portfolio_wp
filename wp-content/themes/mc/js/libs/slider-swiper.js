export class HeroSlider {
  constructor(el, delay) {
    this.DOM = {};
    this.DOM.el = document.querySelector(el); // DOM要素に変換
    this.delay = delay;
    this.timer = null;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.DOM.el, {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      loopAdditionalSlides: 1,
      speed: 2000,
      followFinger: false,
      grabCursor: true,
      pagination: {
        el: '.works-hero .swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange: () => {
          this.finishAnimation();
        },
        slideChangeTransitionStart: () => {
          this.switchAnimation();
        },
      },
    });
  }

  // アニメーション切り替え時に.anm-startedクラスを付与する
  switchAnimation() {
    clearTimeout(this.timer);
    const activeSlide = this.DOM.el.querySelectorAll('.swiper-slide[class*=-active]');
    for (let i = 0; i < activeSlide.length; i += 1) {
      activeSlide[i].classList.remove('anm-finished');
      activeSlide[i].classList.add('anm-started');
    }

    // delay - 1000ミリ秒の時間が経過したら、anm-finishedクラスを付与する
    this.timer = setTimeout(() => {
      for (let i = 0; i < activeSlide.length; i += 1) {
        activeSlide[i].classList.remove('anm-started');
        activeSlide[i].classList.add('anm-finished');
      }
    }, this.delay - 1000);
  }

  // 手動でスライドを切替された時は、.anm-finishedクラスを付与してアニメーションを終了する
  finishAnimation() {
    const activeSlide = this.DOM.el.querySelectorAll('.swiper-slide.anm-started');
    for (let i = 0; i < activeSlide.length; i += 1) {
      activeSlide[i].classList.remove('anm-started');
      activeSlide[i].classList.add('anm-finished');
    }
  }

  start(customOptions = {
    delay: this.delay,
    disableOnInteraction: false,
    waitForTransition: false,
  }) {
    // start実行時に.anm-startedクラスを付与して画面内に入ったらアニメーションを開始させる
    const activeSlide = this.DOM.el.querySelectorAll('.swiper-slide[class*=-active]');
    for (let i = 0; i < activeSlide.length; i += 1) {
      activeSlide[i].classList.remove('anm-finished');
      activeSlide[i].classList.add('anm-started');
    }

    const options = {
      delay: 4000,
      disableOnInteraction: false,
      ...customOptions, // カスタムオプションをマージ
    };

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}

export class WorksSlider {
  constructor(subEl, mainEl, delay) {
    this.DOM = {};
    this.DOM.subEl = subEl;
    this.DOM.mainEl = mainEl;
    this.swiperSub = this._initSwiperSub();
    this.swiperMain = this._initSwiperMain();
    this.delay = delay;
  }

  _initSwiperSub() {
    return new Swiper(this.DOM.subEl, {
      slidesPerView: 3,
      spaceBetween: 12,
      grabCursor: true,
      scrollbar: {
        el: '.works-page .swiper-scrollbar',
        draggable: true,
      },
      breakpoints: {
        600: {
          slidesPerView: 5,
        },
      },
    });
  }

  _initSwiperMain() {
    // スライド番号取得
    const mainSlide = document.querySelector(this.DOM.mainEl);
    const slideLength = mainSlide.querySelectorAll('.swiper-slide').length;
    const total = (`00${slideLength}`).slice(-2);
    const fractionNum = mainSlide.querySelector('.swiper-fraction-num');
    const fractionTotal = mainSlide.querySelector('.swiper-fraction-total');
    fractionTotal.textContent = total;

    // スライド番号の切り替え
    const updateFraction = (index) => {
      const current = (`00${index + 1}`).slice(-2);
      fractionNum.classList.add('fraction-started');
      setTimeout(() => {
        fractionNum.textContent = current;
      }, 400);
    };

    // スライド番号の削除
    const finishFraction = () => {
      fractionNum.classList.remove('fraction-started');
    };

    return new Swiper(this.DOM.mainEl, {
      loop: true,
      speed: 700,
      grabCursor: true,
      slidesPerView: 1,
      centeredSlides: true,
      effect: 'creative',
      creativeEffect: {
        limitProgress: 2,
        prev: {
          translate: ['-100%', 200, -1000],
          rotate: [0, 0, 40],
          shadow: true,
        },
        next: {
          translate: ['100%', -200, -1000],
          rotate: [0, 0, 40],
          shadow: true,
        },
      },
      navigation: {
        nextEl: '.works-page .swiper-button-next',
        prevEl: '.works-page .swiper-button-prev',
      },
      thumbs: {
        swiper: this.swiperSub,
      },
      on: {
        slideChange(swiper) {
          updateFraction(swiper.realIndex);
        },
        slideChangeTransitionEnd() {
          finishFraction();
        },
      },
    });
  }

  start(options = { delay: this.delay }) {
    options = {
      delay: 4000,
      disableOnInteraction: false,
      ...options,
    };

    this.swiperMain.params.autoplay = options;
    this.swiperMain.autoplay.start();
  }

  stop() {
    this.swiperMain.autoplay.stop();
  }
}

//# sourceMappingURL=slider-swiper.js.map
