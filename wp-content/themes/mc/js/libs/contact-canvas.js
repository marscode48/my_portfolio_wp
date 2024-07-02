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
      p.bgGradation = (bgPalette = ['hsl(0, 100%, 10%)', 'hsl(50, 100%, 10%)']) => {
        const startColor = p.color(bgPalette[0]); // 開始色
        const endColor = p.color(bgPalette[1]); // 終了色

        // 画面の高さに基づいてグラデーションを描画
        for (let i = 0; i <= p.height; i += 1) {
          const lerpedColor = p.lerpColor(startColor, endColor, i / p.height); // 線形補間された色を計算
          p.stroke(lerpedColor); // 補間色を設定
          p.line(0, i, p.width, i); // 水平線を描画
        }
      };

      // 円グラデーション
      p.circleGradation = () => {
        // x軸の円の数, y軸の円の数、円の最大サイズ
        let xNumber; let yNumber; let
          maxDiameter;

        // レスポンシブで円の数とサイズを対応
        if (window.matchMedia('(max-width: 599px)').matches) {
          xNumber = 6;
          yNumber = 12;
          maxDiameter = 70;
        } else if (window.matchMedia('(max-width: 1279px)').matches) {
          xNumber = 9;
          yNumber = 9;
          maxDiameter = 85;
        } else {
          xNumber = 12;
          yNumber = 6;
          maxDiameter = 100;
        }

        const drawCircles = (xNum, yNum, maxDiam) => {
          for (let j = 0; j < yNum; j += 1) {
            for (let i = 0; i < xNum; i += 1) {
              const translateX = (p.width / (xNum - 1)) * i; // 円の数から-1を引いて画面端の左右の隙間を埋める
              const translateY = (p.height / (yNum - 1)) * j; // 円の数から-1を引いて画面端の上下の隙間を埋める

              const mouseDist = p.dist(translateX, translateY, p.mouseX, p.mouseY); // 円ごとにマウスからの距離を計算
              const circleDiameter = p.map(mouseDist, 0, p.dist(0, 0, p.width, p.height), 0, maxDiam); // 距離の範囲を円のサイズの範囲に変換

              const hsbDist = p.dist(translateX, translateY, p.width / 2, p.height / 2); // 円ごとに画面中央からの距離を計算
              const hsb = p.map(hsbDist, 0, p.dist(0, 0, p.width / 2, p.height / 2), 180, 350); // 端から中央までグラデーション

              p.fill(hsb, 100, 75);
              p.circle(translateX, translateY, circleDiameter);
            }
          }
        };

        drawCircles(xNumber, yNumber, maxDiameter);
      };

      // オーロラ
      // lineNum(ラインの数), segmentNum(分割数), centerHue(基準色), hueRange(色の幅), satuRange(彩度の幅), lumiRange(明度の幅), speed(時間経過)
      p.aurora = (lineNum = 10, segmentNum = 20, centerHue = 235, hueRange = 60, satuRange = 25, lumiRange = 25, speed = 0.2) => {
        let radian = 0; // ラジアン（角度）

        for (let j = 0; j < lineNum; j += 1) {
          const time = Date.now() / 2500; // 媒介変数(時間)
          const coefficient = 30 + j; // 係数

          // 色相(hue), 彩度(saturation), 明度(luminance)
          const h = centerHue + Math.round(Math.cos(radian) * hueRange);
          const s = 75 + Math.round(Math.cos(radian) * satuRange);
          const l = 100 - Math.round(Math.cos(radian) * lumiRange);

          radian += speed; // 時間経過でラジアンを増やす

          p.beginShape(p.QUADS);
          p.stroke(h, s, l);

          for (let i = 0; i < segmentNum; i += 1) {
            const x = (i / (segmentNum - 1)) * p.width; // X座標
            const px = i / coefficient; // 横軸の入力値（水平方向の距離）
            const py = (j / 30 + time); // 時間の入力値

            const randomValue = p.noise(px, py); // 乱数
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
