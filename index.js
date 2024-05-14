import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import * as dat from './node_modules/dat.gui/build/dat.gui.module.js';

//Getting div element from document
let col = document.getElementsByClassName('second-col')[0]

//Creating and render the scene
let scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer();
let camera = new THREE.PerspectiveCamera();
const controls = new OrbitControls( camera, renderer.domElement );
if(window.innerWidth>768){
camera = new THREE.PerspectiveCamera( 75, (window.innerWidth/2) / window.innerHeight, 0.1, 1000 );
renderer.setSize( (window.innerWidth/2), window.innerHeight );
}else{
	camera = new THREE.PerspectiveCamera( 75, (window.innerWidth) / window.innerHeight, 0.1, 1000 );
renderer.setSize( (window.innerWidth), window.innerHeight );
}
renderer.setClearColor(0xffffff)
col.appendChild( renderer.domElement );



//Setting camera position
camera.position.x = 0;
camera.position.y = 15;
camera.position.z = 75;






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

const loader = new THREE.TextureLoader()
const height = loader.load('./model/texture/displacement .jpeg')
const texture = loader.load('./model/texture/texture.jpg')
// const alpha = loader.load('/alpha.png')


const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ); 
const material = new THREE.MeshBasicMaterial( { color: '#ffd600',wireframe:true } ); 
const torusKnot = new THREE.Mesh( geometry, material ); scene.add( torusKnot );
torusKnot.position.z=0
torusKnot.position.y=30
torusKnot.rotateX(-240)

 const clock = new THREE.Clock()

const planeGeometry = new THREE.PlaneGeometry( 50, 50 ,6.4,6.4);
const planeMaterial = new THREE.MeshStandardMaterial( {
color: 'red',
map:texture,
displacementMap:height,
displacementScale:30.0,
transparent:true
} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( plane );
plane.rotateX(-240)


const ambientLight = new THREE.AmbientLight(0xffffff,1)

scene.add(ambientLight)

// const gui = new dat.GUI()

// gui.add(plane.rotation,'x')
// gui.add(ambientLight.position, 'x') 
// gui.add(ambientLight.position, 'y') 
// gui.add(ambientLight.position, 'z') 

// const clr = {color:'#00ff00'}
// gui.addColor(clr,'color').onChange(()=>{
// 	ambientLight.color.set(clr.color)
// })


const absoluteDiv = document.getElementsByClassName('position-absolute')[0]

let scene1 = new THREE.Scene()
const renderer1 = new THREE.WebGLRenderer({alpha:true});
let camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer1.setSize( (window.innerWidth), window.innerHeight );
absoluteDiv.appendChild( renderer1.domElement );

const textureLoader = new THREE.TextureLoader();

const normalTexture = textureLoader.load('./model/texture/NormalMap.png')

const sphereGeometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const sphereMaterial = new THREE.MeshStandardMaterial( {  normalMap:normalTexture,metalness:0.7,roughness:0.2} ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

const controls1 = new OrbitControls( camera1, renderer1.domElement );

const ambientLight1 = new THREE.AmbientLight(0xffffff,0.1)
//Setting camera position
camera1.position.x = 0;
camera1.position.y = 15;
camera1.position.z = 75;

const sphereLight = new THREE.SphereGeometry( 0.5, 16, 8 );
let pointLight = new THREE.PointLight( 0xf300f0, 90000 );
pointLight.add( new THREE.Mesh( sphereLight, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
pointLight.position.set(-10,-10,3)

const sphereLight1 = new THREE.SphereGeometry( 0.5, 16, 8 );
let pointLight1 = new THREE.PointLight( 0x1f223f, 90000 );
pointLight1.add( new THREE.Mesh( sphereLight1, new THREE.MeshBasicMaterial( { color: 0xffffff } ) ) );

const sphereLight2 = new THREE.SphereGeometry( 0.5, 16, 8 );
let pointLight2 = new THREE.PointLight( 0xff22ff, 90000 );
pointLight2.add( new THREE.Mesh( sphereLight2, new THREE.MeshBasicMaterial( { color: 0xffffff } ) ) );
scene1.add(sphere,ambientLight1,pointLight, pointLight1, pointLight2);
pointLight1.position.set(10,10,3)

const seconddAbsoluteDiv = document.getElementsByClassName('position-absolute')[1]

let scene2 = new THREE.Scene()
const renderer2 = new THREE.WebGLRenderer({alpha:true});
let camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer2.setSize(window.innerWidth, window.innerHeight );
seconddAbsoluteDiv.appendChild( renderer2.domElement );

const sphereLight3 = new THREE.SphereGeometry( 0.4, 16, 8 );
let pointLight3 = new THREE.PointLight( 0xf300f0, 90000 );
pointLight3.add( new THREE.Mesh( sphereLight3, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
const ambientLight2 = new THREE.AmbientLight(0xffffff,0.1)
scene2.add(pointLight3,ambientLight2)
camera2.position.set(0,0,30)
const handleWheelEvent = (e) => {
if(e.wheelDelta<=0){
plane.material.displacementScale-=5
}else{
	plane.material.displacementScale+=5

}}
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

	const mousePosition = new THREE.Vector2();



document.addEventListener("wheel", handleWheelEvent);


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	renderer1.render( scene1, camera1 );
	renderer2.render( scene2, camera2 );
torusKnot.rotateZ(0.01)
const elapsedTime = clock.getElapsedTime()
plane.rotation.z-= .002 
sphere.rotateX(0.01)
controls1.update()

pointLight3.position.x = Math.sin( elapsedTime * 0.7 ) * 10;
				pointLight3.position.y = Math.cos( elapsedTime * 0.5 ) * 20;
				pointLight3.position.z = Math.cos( elapsedTime * 0.3 ) * 10;
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


window.addEventListener('mousemove',e =>{
	mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
	mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;


  raycaster.setFromCamera(mousePosition, camera);
  const intersects = raycaster.intersectObject(plane);


  if (intersects.length > 0) {
	pointLight2.position.copy(intersects[0].point)
	pointLight2.position.y = 0.125
	pointLight2.position.z += 10
  }


 
})


window.addEventListener('resize',()=>{
	if(window.innerWidth>768){
	renderer.setSize( (window.innerWidth/2.1), window.innerHeight );
	}else{
		renderer.setSize((window.innerWidth/1.1), window.innerHeight );
	}
})