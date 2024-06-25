export class BtnAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    // ボタンフェードアニメーション
    const link = this.DOM.el;
    const btn = link.querySelector('.btn');

    const btnTl = gsap.timeline({
      scrollTrigger: {
        trigger: link,
        start: 'top 85%',
        // markers: true,
      },
    });

    btnTl.add(() => {
      btn.classList.add('gradietion-active');
    },
    '>');
    btnTl.fromTo(
      link,
      {
        autoAlpha: 0,
        y: 25,
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: 'power4.out',
        duration: 1,
      },
    );
  }
}

//# sourceMappingURL=btn-animation.js.map
