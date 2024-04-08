export class ArticleParallaxAnimation {
  constructor(ttl, img) {
    this.DOM = {};
    this.DOM.ttl = ttl instanceof HTMLElement ? ttl : document.querySelector(ttl);
    this.chars = this.DOM.ttl.innerHTML.trim().split('');
    this.DOM.ttl.innerHTML = this._splitText();
    this.DOM.chars = this.DOM.ttl.querySelectorAll('.char');
    this.DOM.img = document.querySelector(img);
    this.animate();
  }

  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, '');
  }

  animate() {
    const palTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parallax',
        start: 'top-=6 top', // appear-upの6px分を考慮
        end: 'bottom-=6 25%', // appear-upの6px分を考慮
        scrub: 1,
        // markers: true,
      },
    });

    palTl.addLabel('topLabel');

    // 文字フェードアニメーション
    this.DOM.chars.forEach((c, i) => {
      palTl.fromTo(c, {
        autoAlpha: 0,
        y: 50,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.1,
      }, `topLabel+=${i / 50}`);
    });

    // パララックス
    palTl.fromTo(this.DOM.img, {
      backgroundPositionY: 0,
    },
    {
      backgroundPositionY: 100,
      duration: 1,
    }, 'topLabel');
  }
}

export class ArticleSlideAnimation {
  constructor(items) {
    this.DOM = {};
    this.DOM.items = document.querySelectorAll(items);
    this.animate();
  }

  animate() {
    // 文字スライドアニメーション
    const stagger = 0.05;

    this.DOM.items.forEach((item) => {
      const rect = item.querySelector('.slide__title .rect');
      const label = item.querySelector('.slide__title .label');
      const slideX = item.querySelector('.slide__text.slideX');

      const slideTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none none',
          // markers: true,
        },
      });

      slideTl.fromTo(
        rect,
        {
          x: '-105%',
        },
        {
          x: '105%',
          duration: 1,
          stagger,
          ease: 'power3.inout',
        },
      );
      slideTl.fromTo(
        label,
        {
          alpha: 0,
        },
        {
          alpha: 1,
          duration: 0.3,
          delay: 0.5,
          stagger,
        },
        '<',
      );
      slideTl.fromTo(
        slideX,
        {
          alpha: 0,
          x: -32,
        },
        {
          alpha: 1,
          x: 0,
          duration: 0.75,
          delay: 0.2,
          stagger,
          ease: 'power3.out',
        },
        '<',
      );
    });
  }
}

//# sourceMappingURL=article-animation.js.map
