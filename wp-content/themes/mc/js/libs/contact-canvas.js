export class ContactCanvas {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.canvas = this._initCanvas();
  }

  _initCanvas() {
    const contactCanvas = document.querySelector(this.DOM.el);

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(contactCanvas.clientWidth, contactCanvas.clientHeight);
        p.reset();
      };

      p.reset = () => {
        p.draw();
      };

      p.draw = () => {
        p.frameRate(12);
        p.colorMode(p.HSB);
        p.background(0, 0, 0);
        p.bgGradation();
        p.circleGradation();
        p.aurora();
      };

      // 背景グラデーション
      p.bgGradation = () => {
        const bgPalette = ['hsl(0, 100%, 10%)', 'hsl(50, 100%, 10%)']; // 背景色

        for (let i = 0; i <= p.height; i += 1) {
          const bgColor = p.lerpColor(p.color(bgPalette[0]), p.color(bgPalette[1]), i / p.height);
          p.stroke(bgColor);
          p.line(0, i, p.width, i);
        }
      };

      // 円グラデーション
      p.circleGradation = () => {
        if (window.matchMedia('(max-width: 599px)').matches) {
          const yNumber = 5; // y軸の円の数
          const xNumber = 5; // x軸の円の数

          console.log(xNumber);

          for (let j = 0; j < yNumber; j += 1) {
            for (let i = 0; i < xNumber; i += 1) {
              const translateX = (p.width / (xNumber - 1)) * i; // 円の数から-1を引いて画面端の左右の隙間を埋める
              const translateY = (p.height / (yNumber - 1)) * j; // 円の数から-1を引いて画面端の左右の隙間を埋める

              const mouseDist = p.dist(translateX, translateY, p.mouseX, p.mouseY); // 円ごとにマウスからの距離を計算
              const circleDiameter = p.map(mouseDist, 0, p.dist(0, 0, p.width, p.height), 0, 100); // 距離の範囲を円のサイズの範囲に変換

              const hsbDist = p.dist(translateX, translateY, p.width / 2, p.height / 2); // 円ごとに画面中央からの距離を計算
              const hsb = p.map(hsbDist, 0, p.dist(0, 0, p.width / 2, p.height / 2), 230, 300); // 端から中央までグラデーション

              p.fill(hsb, 100, 75);
              p.circle(translateX, translateY, circleDiameter);
            }
          }
        } else if (window.matchMedia('(min-width:600px)').matches) {
          const yNumber = 6; // y軸の円の数
          const xNumber = 12; // x軸の円の数

          for (let j = 0; j < yNumber; j += 1) {
            for (let i = 0; i < xNumber; i += 1) {
              const translateX = (p.width / (xNumber - 1)) * i; // 円の数から-1を引いて画面端の左右の隙間を埋める
              const translateY = (p.height / (yNumber - 1)) * j; // 円の数から-1を引いて画面端の左右の隙間を埋める

              const mouseDist = p.dist(translateX, translateY, p.mouseX, p.mouseY); // 円ごとにマウスからの距離を計算
              const circleDiameter = p.map(mouseDist, 0, p.dist(0, 0, p.width, p.height), 0, 180); // 距離の範囲を円のサイズの範囲に変換

              const hsbDist = p.dist(translateX, translateY, p.width / 2, p.height / 2); // 円ごとに画面中央からの距離を計算
              const hsb = p.map(hsbDist, 0, p.dist(0, 0, p.width / 2, p.height / 2), 230, 320); // 端から中央までグラデーション

              p.fill(hsb, 100, 75);
              p.circle(translateX, translateY, circleDiameter);
            }
          }
        }
      };

      // オーロラ
      p.aurora = () => {
        const lineNum = 10; // ラインの数
        const segmentNum = 20; // 分割数

        let radian = 0; // ラジアン（角度）
        const centerHue = 235; // 基準色
        const hueRange = 60; // 色の幅
        const satuRange = 25; // 彩度の幅
        const lumiRange = 25; // 明度の幅
        const speed = 0.2; // 時間経過

        for (let j = 0; j < lineNum; j += 1) {
          const time = Date.now() / 2500; // 媒介変数(時間)
          const coefficient = 30 + j; // 係数

          const h = centerHue + Math.round(Math.cos(radian) * hueRange); // 色相（hue）⁠
          const s = 75 + Math.round(Math.cos(radian) * satuRange); // 彩度（saturation）
          const l = 100 - Math.round(Math.cos(radian) * lumiRange); // 明度（luminance）

          radian += speed; // 時間経過でラジアンを増やす

          p.beginShape(p.QUADS);
          p.stroke(h, s, l);

          for (let i = 0; i < segmentNum; i += 1) {
            const x = (i / (segmentNum - 1)) * p.width; // X座標
            const px = i / coefficient; // 横軸の入力値（水平方向の距離）
            const py = (j / 30 + time); // 時間の入力値
            // console.log(px, py);
            const randomValue = p.noise(px, py); // 乱数
            // console.log(randomValue);
            const y = randomValue * p.height; // Y座標（乱数 * 高さ）

            p.vertex(x, y);
          }

          p.endShape();
        }
      };

      // 画面更新時にリサイズ
      p.windowResized = () => {
        p.resizeCanvas(contactCanvas.clientWidth, contactCanvas.clientHeight);
        p.reset();
      };

      // 要素に入ったらループ開始
      p.start = () => {
        p.loop();
      };

      // 要素から出たらループ停止
      p.stop = () => {
        p.noLoop();
      };
    };

    return new p5(sketch, contactCanvas);
  }

  start() {
    this.canvas.start();
  }

  stop() {
    this.canvas.stop();
  }
}

//# sourceMappingURL=contact-canvas.js.map
