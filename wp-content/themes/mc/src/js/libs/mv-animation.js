export class MainViasual {
  constructor(el) {
    this.DOM = {};
    this.DOM.header = document.querySelector('.header');
    this.DOM.mv = el;
    this.animate();
  }

  animate() {
    const svg = this.DOM.mv.querySelector('#mv-svg');
    const logo = this.DOM.header.querySelector('.header__logo');
    const btn = this.DOM.header.querySelector('.header__btn');
    const text = this.DOM.mv.querySelector('.mv__text');
    const scroll = this.DOM.mv.querySelector('.mv__scrolltext');

    const tl = gsap.timeline();

    tl.add(() => {
      new Vivus(svg, {
        type: 'delayed',
        duration: 240,
        animTimingFunction: Vivus.EASE,
      });
    });
    tl.add(() => {
      Snap(svg).selectAll('path').animate({
        'fill-opacity': 1,
      }, 180);
    },
    '+=2.4');
    tl.fromTo(
      logo,
      {
        autoAlpha: 0,
        y: -32,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        ease: 'power4.out',
      },
      '<',
    );
    tl.fromTo(
      btn,
      {
        autoAlpha: 0,
        y: -32,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        ease: 'power4.out',
      },
      '<',
    );
    tl.fromTo(
      text,
      {
        autoAlpha: 0,
        y: 32,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        ease: 'power4.out',
      },
      '-=1.5',
    );
    tl.fromTo(
      scroll,
      {
        autoAlpha: 0,
        y: -32,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        ease: 'power4.out',
      },
      '-=1.5',
    );
  }
}
