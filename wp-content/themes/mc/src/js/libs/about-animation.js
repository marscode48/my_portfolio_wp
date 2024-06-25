export class AboutAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    // Horizontal
    const inner = this.DOM.el.querySelector('.about__inner');
    const wrapper = this.DOM.el.querySelector('.about__list-wrapper');
    const list = this.DOM.el.querySelector('.about__list');
    const img = this.DOM.el.querySelector('.about__img');
    const line = this.DOM.el.querySelector('.about__line');
    const lineInner = this.DOM.el.querySelector('.about__line-inner');
    const sections = Array.from(list.children);

    const scrollTween = gsap.to(list, {
      // 横スクロール（左方向へ移動）なので、xプロパティにはマイナスを指定
      // リスト最後尾をラッパー右端に合わせて、box-shadow分をマイナスして表示
      // 例：-(3540px - 850px) - 10px = -2700px
      x: () => -(list.clientWidth - wrapper.clientWidth) - 10,
      ease: 'none',
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top 5%',
        end: () => `+=${(list.clientWidth - wrapper.clientWidth) + 10}`,
        scrub: true,
        pin: true,
        anticipatePin: 1, // ページのガタつきを防ぐ
        invalidateOnRefresh: true, // リサイズ時に再計算
        // markers: true,
      },
    });

    // inner-active
    ScrollTrigger.create({
      trigger: sections,
      start: 'top 75%',
      toggleClass: { targets: inner, className: 'about-inner-active' },
      once: true,
      // markers: true,
    });

    // img-scrub
    gsap.fromTo(
      img,
      {
        y: 15,
        scale: 0.75,
      },
      {
        scale: 1,
        y: 0,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top 5%',
          end: () => `+=${list.clientWidth - wrapper.clientWidth}`,
          scrub: 2,
          // markers: true,
        },
      },
    );

    // scroll-line
    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top 5%',
        end: () => `+=${list.clientWidth - wrapper.clientWidth}`,
        scrub: true,
        // markers: true,
        onEnter: () => {
          // console.log('onEnter is called');
          line.classList.add('line-active');
          img.classList.add('bg-active');
        },
        onEnterBack: () => {
          // console.log('onEnterBack is called');
          line.classList.add('line-active');
          img.classList.add('bg-active');
        },
        onLeaveBack: () => {
          // console.log('onLeaveBack is called');
          line.classList.remove('line-active');
          img.classList.remove('bg-active');
        },
        onLeave: () => {
          // console.log('onLeave is called');
          line.classList.remove('line-active');
          img.classList.remove('bg-active');
        },
      },
    });

    lineTl.fromTo(lineInner,
      { width: 0 },
      { width: '100%' });

    // text-section
    sections.forEach((section) => {
      const number = section.querySelector('.about__item-content-number');
      const title = section.querySelector('.about__item-content-title');
      const texts = section.querySelectorAll('.about__item-content-text');

      // タイムライン
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: 'left 60%',
          // markers: true,
        },
      });

      aboutTl.fromTo(
        number,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          yPercent: -100,
          duration: 0.4,
          ease: 'power4.easeOut',
        },
      );
      aboutTl.to(
        number,
        {
          xPercent: 200,
          skewX: -30,
          duration: 1.2,
          ease: 'power4.easeOut',
        },
        '>',
      );
      aboutTl.from(
        title,
        {
          y: 50,
          opacity: 0,
          duration: 0.4,
          ease: 'power4.easeOut',
        },
        '<',
      );
      aboutTl.from(
        texts,
        {
          x: 128,
          opacity: 0,
          duration: 0.8,
          ease: 'Back.easeOut',
          stagger: 0.3,
        },
        '>',
      );
      aboutTl.add(() => {
        title.classList.toggle('underline-active');
        section.classList.toggle('box-shadow-active');
      },
      '-=0.5');
    });
  }
}
