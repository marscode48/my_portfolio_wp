export class WorksAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    const bg = this.DOM.el.querySelector('.works__inner');
    const img = this.DOM.el.querySelector('.works__img-wrapper');
    const text = this.DOM.el.querySelector('.works__text');
    const link = this.DOM.el.querySelector('.works__link');
    const btn = this.DOM.el.querySelector('.works__btn');

    const mm = gsap.matchMedia();

    // for Desctop
    mm.add('(min-width: 960px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top 55%',
          // markers: true
        },
      });

      tl.add(() => {
        bg.classList.add('bg-active');
      });
      tl.fromTo(
        img,
        {
          autoAlpha: 0,
          x: -100,
        },
        {
          autoAlpha: 1,
          x: 0,
          ease: 'power4.out',
          duration: 1.5,
        },
      );
      tl.fromTo(
        text,
        {
          autoAlpha: 0,
          x: 100,
        },
        {
          autoAlpha: 1,
          x: 0,
          ease: 'power4.out',
          duration: 1,
        },
        '-=1',
      );
      tl.fromTo(
        link,
        {
          autoAlpha: 0,
          x: 100,
        },
        {
          autoAlpha: 1,
          x: 0,
          ease: 'power4.out',
          duration: 1,
        },
        '-=0.75',
      );
      tl.add(() => {
        btn.classList.add('gradietion-active');
      },
      '<');
    });

    // for Mobile
    mm.add('(max-width: 959px)', () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          // markers: true
        },
      });

      tl1.add(() => {
        bg.classList.add('bg-active');
      });
      tl1.fromTo(
        img,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'power4.out',
          duration: 1.5,
        },
      );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: 'top 95%',
          // markers: true,
        },
      });

      tl2.fromTo(
        text,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'power4.out',
          duration: 1,
        },
      );
      tl2.fromTo(
        link,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'power4.out',
          duration: 1,
        },
        '-=0.75',
      );
      tl2.add(() => {
        btn.classList.add('gradietion-active');
      },
      '<');
    });
  }
}

//# sourceMappingURL=works-animation.js.map
