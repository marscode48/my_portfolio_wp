export class SkillAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.DOM.items = this.DOM.el.querySelectorAll('.skill__item');
    this.animate();
  }

  animate() {
    const mm = gsap.matchMedia();

    const motionPath = this.DOM.el.querySelector('.skill__motion-path');
    const polygon = this.DOM.el.querySelector('#skill-polygon');
    const desctopPath = this.DOM.el.querySelector('#skill-pc-path');
    const mobilePath = this.DOM.el.querySelector('#skill-sp-path');

    // motion-path (for Desctop)
    mm.add('(min-width: 600px)', () => {
      const pathTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top center',
          end: 'bottom center',
          toggleClass: { targets: motionPath, className: 'motion-path-active' },
          scrub: true,
          // markers: true,
        },
      });

      pathTl.fromTo(polygon,
        { x: 0, y: 0 },
        {
          ease: 'none',
          motionPath: {
          // SVGのパスに沿って移動
            path: desctopPath,
            align: desctopPath,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
        });
    });

    // motion-path (for Mobile)
    mm.add('(max-width: 599px)', () => {
      const pathTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top center',
          end: 'bottom center',
          toggleClass: { targets: motionPath, className: 'motion-path-active' },
          scrub: true,
          // markers: true,
        },
      });

      pathTl.fromTo(polygon,
        { x: 0, y: 0 },
        {
          ease: 'none',
          motionPath: {
          // SVGのパスに沿って移動
            path: mobilePath,
            align: mobilePath,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
        });
    });

    // text-animation
    const stagger = 0.05;

    this.DOM.items.forEach((item) => {
      const img = item.querySelector('.skill__img');
      const rect = item.querySelector('.skill__name .rect');
      const label = item.querySelector('.skill__name .label');
      const slideX = item.querySelector('.skill__text.slideX');

      const skillTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      skillTl.to(
        img,
        {
          keyframes: {
            '0%': { y: 45, autoAlpha: 0, ease: 'power4.in' },
            '24%': { autoAlpha: 1 },
            '25%': { y: 0, ease: 'power4.out' },
            '40%': { y: 24, ease: 'power4.in' },
            '55%': { y: 0, ease: 'power4.out' },
            '65%': { y: 12, ease: 'power4.in' },
            '75%': { y: 0, ease: 'power4.out' },
            '82%': { y: 6, ease: 'power4.in' },
            '87%': { y: 0, ease: 'power4.out' },
            '93%': { y: 4, ease: 'power4.in' },
            '100%': { y: 0, autoAlpha: 1, ease: 'power4.out' },
          },
          duration: 0.7,
        },
      );
      skillTl.fromTo(
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
        '-=0.4',
      );
      skillTl.fromTo(
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
      skillTl.fromTo(
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

//# sourceMappingURL=skill-animation.js.map
