export class SmoothScroll {
  constructor(gap) {
    this.DOM = {};
    this.gap = gap;
    this.DOM.links = document.querySelectorAll('a[href^="#"]');
    this._smoothScroll();
  }

  _smoothScroll() {
    this.DOM.links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const hrefLink = link.getAttribute('href');
        const targetContent = document.getElementById(hrefLink.replace('#', ''));
        const rectTop = targetContent.getBoundingClientRect().top;
        const positionY = window.scrollY;
        const target = rectTop + positionY + this.gap;

        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      });
    });
  }
}

//# sourceMappingURL=smooth-scroll.js.map
