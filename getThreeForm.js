import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * @param {HTMLCanvasElement} canvas
 * */
export const getThreeForm = (canvas, noControl = false) => {
  const sizes = {
    width: canvas.clientWidth,
    height: canvas.clientHeight
  }
  const scene = new THREE.Scene()
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(new THREE.Color('#000000'), 0);

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1)
  camera.position.set(0, 0, 3)
  scene.add(camera)
  let controls = undefined;
  if (!noControl) {
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
  }
  return {
    scene,
    camera,
    renderer,
    controls
  }
}   