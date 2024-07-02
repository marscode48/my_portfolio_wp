export class MenuOpen {
  constructor() {
    this.DOM = {};
    this.DOM.html = document.documentElement; // ルート要素<html>を返す
    this.DOM.header = document.querySelector('.header');
    this.DOM.btn = document.querySelector('.header__btn');
    this.DOM.canvas = document.querySelector('.gnav__canvas');
    this.eventType = this._getEventType();
    this._addEvent();
    this.canvas = this._initCanvas();
    this._canvasStop();
  }

  _getEventType() {
    const isTouchCapable = 'ontouchstart' in window
      || (window.DocumentTouch && document instanceof window.DocumentTouch)
      || navigator.maxTouchPoints > 0
      || window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.header.classList.toggle('menu-open');
    if (this.DOM.header.classList.contains('menu-open')) {
      this.DOM.html.classList.add('fixed');
      this._canvasStart();
    } else {
      this.DOM.html.classList.remove('fixed');
      this._canvasStop();
    }
  }

  _initCanvas() {
    const gnavCanvas = this.DOM.canvas;
    let particles; // パーティクルの配列をグローバルに宣言

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(gnavCanvas.clientWidth, gnavCanvas.clientHeight);
        p.noStroke();
        particles = [];
        p.textAlign(p.CENTER);
        p.reset();
      };

      p.reset = () => {
        p.draw();
      };

      p.draw = () => {
        p.clear();
        p.frameRate(24);
        p.background(0, 0, 0, 0.5);
        genRadialGradient();
        genParticle();
      };

      // 円形グラデーションを生成
      function genRadialGradient() {
        // 影を設定
        p.drawingContext.shadowOffsetX = 5;
        p.drawingContext.shadowOffsetY = 5;
        p.drawingContext.shadowColor = p.color(242, 70, 69);
        p.drawingContext.shadowBlur = 10;

        // 円形グラデーションを指定（開始円：x0, y0, r0、終了円：x1, y1, r1）
        const gradientFill = p.drawingContext.createRadialGradient(
          p.width / 2,
          p.height / 2,
          p.constrain(p.mouseY * 0.1, 0, p.width * 0.1), // 開始円の半径をマウスで操作し、終了円より大きくならないように制限
          p.width / 2,
          p.height / 2,
          p.width * 0.35,
        );

        // グラデーションのカラーの追加
        gradientFill.addColorStop(0, p.color(255, 0, 0)); // 赤
        gradientFill.addColorStop(0.5, p.color(255, 255, 0)); // 黄
        gradientFill.addColorStop(1, p.color(255, 0, 0, 0.5)); // 赤（透明度50%）

        // グラデーションをfillStyleに指定
        p.drawingContext.fillStyle = gradientFill;

        // 中心に円形グラデーションを描画
        p.circle(p.width / 2, p.height / 2, p.width);
      }

      // パーティクルを生成
      function genParticle() {
        const interval = 5;
        const maxParticle = 25;
        const generateParticle = {
          // 位置、速度、半径、ライフスパン、ダメージの初期化
          init(x, y, velocityX, velocityY, radius, lifespan, damage) {
            return {
              x, y, velocityX, velocityY, radius, lifespan, damage,
            };
          },

          update(ptl) {
            ptl.x += ptl.velocityX; // ランダムな速度を位置に代入
            ptl.y += ptl.velocityY; // ランダムな速度を位置に代入
            ptl.lifespan -= ptl.damage; // 毎フレームlifespanからdamageを引く
            ptl.lifespan = p.max(ptl.lifespan, 0); // lifespanが0以下になったら配列から削除
          },

          draw(ptl) {
            p.fill(80, 0, 90, ptl.lifespan); // lifespanの値を透明度に設定
            p.circle(ptl.x, ptl.y, ptl.radius * 2);
          },
        };

        // パーティクルを配列に追加
        function addParticle() {
          const velocityX = p.random(-3, 3);
          const velocityY = p.random(-3, 3);
          const radius = p.random(15, 35);
          const lifespan = 250;
          const damage = p.random(1, 3);
          const particle = generateParticle.init(p.mouseX, p.mouseY, velocityX, velocityY, radius, lifespan, damage);
          particles.push(particle);
        }

        // パーティクルの数を確認
        // p.fill(255);
        // p.text(`${particles.length} / ${maxParticle}`, p.width / 2, p.height / 2);

        // frameCountがintervalの倍数時にmaxParticleまでパーティクルを追加
        if (p.frameCount % interval === 0 && particles.length < maxParticle) {
          addParticle();
        }

        // パーティクルの更新と描画
        for (let i = 0; i < particles.length; i += 1) {
          const ptl = particles[i];
          generateParticle.update(ptl); // 個々のパーティクルの速度とライフスパンを更新
          generateParticle.draw(ptl); // 更新したパーティクルを描画
        }

        // lifespanが0より大きいパーティクルのみを保持
        particles = particles.filter((ptl) => ptl.lifespan > 0);
      }

      // 画面更新時にリサイズ
      p.windowResized = () => {
        p.resizeCanvas(gnavCanvas.clientWidth, gnavCanvas.clientHeight);
        p.reset();
      };

      // ボタンをクリックしたらループ開始
      p.start = () => {
        p.loop();
      };

      // 初期時とボタンを再クリックしたらループ停止
      p.stop = () => {
        p.noLoop();
      };
    };

    return new p5(sketch, gnavCanvas);
  }

  _canvasStart() {
    this.canvas.start();
    console.log('gnav start is called');
  }

  _canvasStop() {
    this.canvas.stop();
    console.log('gnav stop is called');
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this), { passive: true });
  }
}

//# sourceMappingURL=menu-open.js.map
