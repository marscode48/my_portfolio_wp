export class ContactAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    const inner = this.DOM.el.querySelector('.contact__inner');
    const left = this.DOM.el.querySelector('.contact__left');
    const right = this.DOM.el.querySelector('.contact__right');
    const link = this.DOM.el.querySelector('.contact__link');
    const btn = this.DOM.el.querySelector('.contact__btn');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'center 90%',
        end: 'center 70%',
        scrub: 1,
        // markers: true,
      },
    });

    tl.fromTo(
      left,
      {
        scale: 3,
        autoAlpha: 0,
        xPercent: -100,
        rotation: 2,
        skewX: '10deg',
      },
      {
        scale: 1,
        autoAlpha: 1,
        xPercent: 0,
        rotation: 0,
        skewX: '-10deg',
      },
    );
    tl.fromTo(
      right,
      {
        scale: 3,
        autoAlpha: 0,
        xPercent: 100,
        rotation: -2,
        skewX: '10deg',
      },
      {
        autoAlpha: 1,
        xPercent: 0,
        scale: 1,
        rotation: 0,
        skewX: '-10deg',
      },
      '<',
    );
    tl.add(() => {
      inner.classList.toggle('bg-active');
      btn.classList.toggle('gradietion-active');
    },
    '>');
    tl.fromTo(
      link,
      {
        autoAlpha: 0,
        scale: 0,
        yPercent: 25,
      },
      {
        autoAlpha: 1,
        scale: 1,
        yPercent: 0,
      },
      '<',
    );
  }
}

//# sourceMappingURL=contact-animation.js.map
