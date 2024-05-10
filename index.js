import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import * as dat from './node_modules/dat.gui/build/dat.gui.module.js';

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
camera.position.y = 0;
camera.position.z = 55;






// const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
// const material = new THREE.MeshBasicMaterial( 
// 	{ 
// 		color: 0xffff00,
// wireframe: true
// 	} ); 
// const torus = new THREE.Mesh( geometry, material ); 
// const geometry1 = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
// const material1 = new THREE.MeshBasicMaterial( 
// 	{ 
// 		color: 0xff4f00,
// wireframe: true
// 	} ); 
// const torus1 = new THREE.Mesh( geometry1, material1 );
// torus1.position.x=13;
// torus1.rotation.x=10.5;
// const geometry2 = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
// const material2 = new THREE.MeshBasicMaterial( 
// 	{ 
// 		color: 0x1f4f00,
// wireframe: true
// 	} ); 
// const torus2 = new THREE.Mesh( geometry2, material2 ); 
// torus2.position.x=-13;
// torus2.rotation.x=10.5;
// const geometry3 = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
// const material3 = new THREE.MeshBasicMaterial( 
// 	{ 
// 		color: 0xffff00,
// wireframe: true
// 	} ); 
// const torus3 = new THREE.Mesh( geometry3, material3 );
// torus.position.x=-27;
// const geometry4 = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
// const material4 = new THREE.MeshBasicMaterial( 
// 	{ 
// 		color: 0xffff00,
// wireframe: true
// 	} ); 
// const torus4 = new THREE.Mesh( geometry4, material4 );
// torus4.position.x=27;


// const geometryCube = new THREE.BoxGeometry( 150, 150, 150 ); 
// const materialCube = new THREE.MeshBasicMaterial({  
// opacity: 0.5, transparent:true} ); 
// const cube = new THREE.Mesh( geometryCube, materialCube ); 
// cube.add(torus,torus1,torus2,torus3,torus4)
// scene.add(cube)

//animate the scene


//Animate render for VR
// renderer.setAnimationLoop( function () {

// 	renderer.render( scene, camera );

// } );
// let particlesArray = []

// for (let i = 0 ;i<= 50000; i++){
// 	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
// const capsule = new THREE.Mesh( geometry, material ); 
// const randomPositionX = Math.round(Math.random()*2200-1100)
// const randomPositionY = Math.round(Math.random()*2200-1100)
// const randomPositionZ = Math.round(Math.random()*2200-1100)
// capsule.position.x=randomPositionX;
// capsule.position.y=randomPositionY;
// capsule.position.z=randomPositionZ;
// particlesArray.push(capsule)
// scene.add( capsule );
// }




const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xff1f00,wireframe:true } ); 
const torusKnot = new THREE.Mesh( geometry, material ); scene.add( torusKnot );
torusKnot.position.z=0
torusKnot.position.y=10
torusKnot.rotateX(-240)
const planeGeometry = new THREE.PlaneGeometry( 50, 50 );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( plane );
plane.rotateX(-240)

const pointLight= new THREE.PointLight(0xffffff,2)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4

const gui = new dat.GUI()

gui.add(plane.rotation,'x')
gui.add(pointLight.position, 'x') 
gui.add(pointLight.position, 'y') 
gui.add(pointLight.position, 'z') 

const clr = {color:'#00ff00'}
gui.addColor(clr,'color').onChange(()=>{
	planeMaterial.color.set(clr.color)
})

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
torusKnot.rotateZ(0.01)

	

	// torus.rotation.x+=0.005
	// torus1.rotation.x+=0.005
	// torus2.rotation.x+=0.005
	// torus3.rotation.x+=0.005
	// torus4.rotation.x+=0.005
	// cube.rotation.y+=0.005
	// particlesArray.forEach((c)=>{
	// 	c.rotateX(0.02)
	// 	c.position.x+=0.1
	// 	c.position.y+=0.1
	// 	c.position.z+=0.1
	// })
	
// name.forEach(c=>{
// if(c.id%2==0){
// 			c.rotation.y +=0.1
// 			c.rotation.x+=0.1
// 			c.rotation.z+=0.1
// 		}else{
// 	c.rotation.y-=0.1
// 	c.rotation.x-=0.1
// 	c.rotation.z+=0.1
// }

// if(c.id <=509){
// 	c.position.z=3
// }
// if(c.id >=509&&c.id<=1018){
// 	c.position.z=6
// }
// 		})
 }
	
animate()
window.addEventListener('resize',()=>{
	renderer.setSize( window.innerWidth, window.innerHeight );

})