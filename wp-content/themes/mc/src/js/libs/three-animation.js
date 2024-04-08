import * as THREE from 'three';

let scene; let camera; let renderer; let earth; let mars;

export class ThreeAnimation {
  constructor() {
    this.DOM = {};
    this.DOM.target = document.querySelector('#mainCanvas');
    this.threeInit();
  }

  threeInit() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let rot = 0;

    // レンダラーを作成
    renderer = new THREE.WebGLRenderer({
      canvas: this.DOM.target,
    });
    renderer.setSize(width, height);

    // デバイスピクセル比は上限を2として扱う（canvas要素の解像度を下げる）
    const devicePixelRatio = Math.min(2, window.devicePixelRatio);
    renderer.setPixelRatio(devicePixelRatio);

    // シーンを作成
    scene = new THREE.Scene();

    // カメラを作成
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    // カメラの初期座標を設定（X座標:0, Y座標:0, Z座標:0）
    camera.position.set(0, 0, 1000);

    // 球体作成
    const earthGeometry = new THREE.SphereGeometry(300, 30, 30);
    const marsGeometry = new THREE.SphereGeometry(300, 30, 30);

    // マテリアルを作成
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('../images/earthmap1k.jpg'),
      side: THREE.DoubleSide,
    });
    const marsMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('../images/marsmap1k.jpg'),
      side: THREE.DoubleSide,
    });
    // 地球メッシュを作成
    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    mars = new THREE.Mesh(marsGeometry, marsMaterial);
    earth.position.x = 1200;
    earth.position.y = 300;
    earth.position.z = 300;

    // 3D空間にメッシュを追加
    scene.add(mars, earth);

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.intensity = 5; // 光の強さを5倍に
    directionalLight.position.set(1, 1, 1); // ライトの方向
    // シーンに追加
    scene.add(directionalLight);

    // ポイント光源
    const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
    scene.add(pointLight);

    // 星屑追加
    createStarField();

    // 星屑作成
    function createStarField() {
      const SIZE = 2500; // 形状サイズ
      const LENGTH = 100; // 配置する個数

      // x,y,z座標の値がランダムに入った配列を100個作成
      const vertices = [];
      for (let i = 0; i < LENGTH; i += 1) {
        const x = SIZE * (Math.random() - 0.5);
        const y = SIZE * (Math.random() - 0.5);
        const z = SIZE * (Math.random() - 0.5);

        vertices.push(x, y, z);
      }

      // 形状データ作成
      const starGeometry = new THREE.BufferGeometry();
      // Floatの型付配列で効率化
      starGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3),
      );

      // マテリアル作成
      const starMaterial = new THREE.PointsMaterial({
        size: 10,
        color: 0xffffff,
      });

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
    }

    let frame = 0; // フレーム(fps)

    // 初回実行
    tick();

    function tick() {
      rot += 0.25; // 角度

      const radian = (rot * Math.PI) / 180; // ラジアン変換

      // 角度に応じてカメラの位置を変更
      camera.position.x = 2000 * Math.sin(radian);
      camera.position.z = 3000 * Math.cos(radian);

      // 原点方向を見つめる
      camera.lookAt(new THREE.Vector3(0, 0, -400));

      // ライトを周回させる
      pointLight.position.set(
        500 * Math.sin(Date.now() / 500),
        500 * Math.sin(Date.now() / 1000),
        500 * Math.cos(Date.now() / 500),
      );

      // 球体は常に回転させておく
      earth.rotation.y += 0.01;
      mars.rotation.y += 0.01;

      // レンダリング
      requestAnimationFrame(tick);

      // フレーム数をインクリメント
      frame += 1;

      // フレーム数が2で割り切れなければ描画しない(60fps → 30fps)
      if (frame % 2 === 0) {
        return;
      }

      renderer.render(scene, camera);
    }

    // ウィンドウ変更時にサイズを維持する処理
    function onWindowResize() {
      // カメラのアスペクト比を正す
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // レンダラーのサイズを調整する
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);
  }
}
