import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(1500, 1400);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(3, 5, 5, 0, Math.PI * 2, 0, Math.PI * 2);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const geometry1=  new THREE.TorusGeometry(10,3,16,100);
const material2= new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const torus= new THREE.Mesh(geometry1,material2);
scene.add(torus);

const controls = new OrbitControls(camera, renderer.domElement)
camera.position.z = 10;

var render = function () {
    requestAnimationFrame(render);

    cube.rotation.y += 0.01;
    torus.rotation.z +=0.01;

    renderer.render(scene, camera);
};

const gui = new GUI()
const cubeFolder = gui.addFolder('Cube')
cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
cubeFolder.open()
const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'z', 0, 10)
cameraFolder.open()

render();

