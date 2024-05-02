import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';



let col = document.getElementsByClassName('second-col')[0]

let scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
renderer.setSize( window.innerWidth, window.innerHeight );
col.appendChild( renderer.domElement );

let grid = new THREE.GridHelper(40,40)
scene.add(grid)
const geometry = new THREE.BoxGeometry( 5, 5, 5 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
grid.position.setY(15)
cube.position.setY(15)
camera.position.x = 0;
camera.position.y = 20;
camera.position.z = 50;
let ambientLight = new THREE.AmbientLight()
let mouseX =0;
let mouseY=0;
window.addEventListener('mousemove',(e)=>{
   e.preventDefault()
   
    if(e.movementX>0){
    cube.rotateY(-0.01)
   }
   else 
   {
    cube.rotateY(0.0)
   }
   if(e.movementY>0){
    cube.rotateX(0.01)
   }else{
    cube.rotateX(-0.01)
   }
 
})


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate()
