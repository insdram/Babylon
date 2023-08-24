import './style.css'

// 导入babylon
import * as BABYLON from "babylonjs";

let canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.querySelector("#app").appendChild(canvas);

// 创建引擎
let engine = new BABYLON.Engine(canvas,true);
let scene = new BABYLON.Scene(engine);

// 创建相机
let camera = new BABYLON.ArcRotateCamera(
  "camera",
  0,
  0,
  10,
  BABYLON.Vector3.Zero(),
  scene
);
camera.attachControl(canvas,true)

// 创建物体
let  sphere = BABYLON.MeshBuilder.CreateSphere(
  "sphere",
  { diameter:2 },
  scene
);

// 创建光照
let light = new BABYLON.DirectionalLight(
  "light",
  new BABYLON.Vector3(0, -1, 0),
  scene
);

engine.runRenderLoop(() => {
  scene.render();
})