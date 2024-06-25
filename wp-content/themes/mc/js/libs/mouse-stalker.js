export class MouseStalker {
  constructor() {
    this.DOM = {};
    this.DOM.ms = document.querySelector('#mouse-stalker');
    this.position = this._initPosition();
    this._getPosition();
  }

  _initPosition() {
    // 開始時のマウスポジションをセット
    const mousePosition = {
      // ストーカーの位置（ポインターを追従する）
      stalker: {
        x: document.documentElement.clientWidth / 2, // 中央
        y: document.documentElement.clientHeight / 2, // 中央から再下部にあるポインターを追いかける
      },
      // ポインターの位置
      pointer: {
        x: document.documentElement.clientWidth / 2, // 中央
        y: document.documentElement.clientHeight / 1, // 最下部にしてストーカーを追従させる

      },
    };

    return mousePosition;
  }

  _getPosition() {
    // ユーザーがマウスを持っているか判定
    if (window.matchMedia('(pointer: fine)').matches) {
      // アクティブクラスを付与してストーカーを表示
      this.DOM.ms.classList.add('is-active');
      // マウスが動くたびにポインターの位置を取得して代入
      document.addEventListener('mousemove', (e) => {
        this.position.pointer.x = e.clientX;
        this.position.pointer.y = e.clientY;
      });

      // ストーカーを更新
      this._stalkerUpdate();

      // ストーカーの形状を変更
      this._stalkerLink();
    }
  }

  _stalkerUpdate() {
    // ストーカー要素の位置を更新
    this.position.stalker.x += (this.position.pointer.x - this.position.stalker.x) * 0.1;
    this.position.stalker.y += (this.position.pointer.y - this.position.stalker.y) * 0.1;
    // ストーカーの位置を小数点第一位まで四捨五入
    const x = Math.round(this.position.stalker.x * 10) / 10;
    const y = Math.round(this.position.stalker.y * 10) / 10;
    // マウスストーカー要素のスタイルを更新
    this.DOM.ms.style.transform = `translate3d(${x}px,${y}px, 0)`;
    // フレーム更新の処理直後に実行してブラウザを最適化
    requestAnimationFrame(this._stalkerUpdate.bind(this));
  }

  _stalkerLink() {
    // ホバー時にクラスを追加
    const stalkerLink = document.querySelectorAll('a, button, .mouse-stalker-link');
    for (let i = 0; i < stalkerLink.length; i += 1) {
      stalkerLink[i].addEventListener('mouseover', () => {
        this.DOM.ms.classList.add('is-hover');
      });
      stalkerLink[i].addEventListener('mouseout', () => {
        this.DOM.ms.classList.remove('is-hover');
      });
    }
  }
}

//# sourceMappingURL=mouse-stalker.js.map
