import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';


//Getting div element from document
let col = document.getElementsByClassName('second-col')[0]

//Creating and render the scene
let scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize( window.innerWidth, window.innerHeight );
col.appendChild( renderer.domElement );



//Setting camera position
camera.position.x = 0;
camera.position.y = 20;
camera.position.z = 50;






const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
const material = new THREE.MeshBasicMaterial( 
	{ 
		color: 0xffff00,
wireframe: true
	} ); 
console.log(material)
const torus = new THREE.Mesh( geometry, material ); 
const geometry1 = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
const material1 = new THREE.MeshBasicMaterial( 
	{ 
		color: 0xff4f00,
wireframe: true
	} ); 
const torus1 = new THREE.Mesh( geometry1, material1 );
torus1.position.x=13;
torus1.rotation.x=10.5;
const geometry2 = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
const material2 = new THREE.MeshBasicMaterial( 
	{ 
		color: 0x1f4f00,
wireframe: true
	} ); 
const torus2 = new THREE.Mesh( geometry2, material2 ); 
torus2.position.x=-13;
torus2.rotation.x=10.5;
const geometry3 = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
const material3 = new THREE.MeshBasicMaterial( 
	{ 
		color: 0xffff00,
wireframe: true
	} ); 
console.log(material)
const torus3 = new THREE.Mesh( geometry3, material3 );
torus.position.x=-27;
const geometry4 = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
const material4 = new THREE.MeshBasicMaterial( 
	{ 
		color: 0xffff00,
wireframe: true
	} ); 
console.log(material)
const torus4 = new THREE.Mesh( geometry4, material4 );
torus4.position.x=27;


const geometryCube = new THREE.BoxGeometry( 150, 150, 150 ); 
const materialCube = new THREE.MeshBasicMaterial({  
opacity: 0.5, transparent:true} ); 
const cube = new THREE.Mesh( geometryCube, materialCube ); 
cube.add(torus,torus1,torus2,torus3,torus4)
scene.add(cube)

//animate the scene
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	torus.rotation.x+=0.005
	torus1.rotation.x+=0.005
	torus2.rotation.x+=0.005
	torus3.rotation.x+=0.005
	torus4.rotation.x+=0.005
	cube.rotation.y+=0.005
}
animate()

//Animate render for VR
// renderer.setAnimationLoop( function () {

// 	renderer.render( scene, camera );

// } );

window.addEventListener('resize',()=>{
	renderer.setSize( window.innerWidth, window.innerHeight );

})