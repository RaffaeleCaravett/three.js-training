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




camera.position.x = 0;
camera.position.y = 20;
camera.position.z = 50;

window.addEventListener('click',(e)=>{
   e.preventDefault()
   const geometry = new THREE.SphereGeometry( 5, 15, 60 ); 
   const hue = Math.random();
   const saturation = 0.5;
   const lightness = 0.5;

   const color = new THREE.Color().setHSL(hue, saturation, lightness);

   let x =Math.round(Math.random()*50 -25)
   let y =Math.round(Math.random()*50 -25)
   let z =Math.round(Math.random()*50 -25)
   let value = Math.random()
    if(value>0.5){
        const material = new THREE.MeshBasicMaterial( { color: color } ); 
        const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );
        sphere.position.x = x
        sphere.position.y = y
        sphere.position.z = z
        scene.add(sphere)
    }else{
        const material = new THREE.MeshBasicMaterial( { color: color } ); 
        const geometry = new THREE.BoxGeometry( 5, 5, 5 );
const cube = new THREE.Mesh( geometry, material );
cube.position.x = x
cube.position.y = y
cube.position.z = z
scene.add( cube );
    }
 
})


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate()
