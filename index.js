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
camera.position.x = 100;
camera.position.y = 20;
camera.position.z = 230;






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
let name =[]

// ********************************** LETTERA R ***********************************************
let randomPositionX = 0
let  randomPositionY = 0
for(let i =  0;i<=29;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x023ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 
if(i%3==0){
	randomPositionX=0
	randomPositionY+=3
}

capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;

if(randomPositionX<9){
randomPositionX+=3
}
name.push(capsule)
scene.add( capsule );
}
randomPositionX=0
randomPositionY=33
for(let i = 0;i<2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x023ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	console.log(capsule)
	randomPositionX+=3
}
randomPositionX=0
randomPositionY=36
for(let i = 0;i<1;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x023ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	console.log(capsule)
	randomPositionX+=3
}
randomPositionX=3
randomPositionY=36
for(let i = 0;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=6
randomPositionY=33
for(let i = 0;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=30
for(let i = 0;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=18
randomPositionY=27
for(let i = 0;i<=3;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=18
randomPositionY=24
for(let i = 0;i<=3;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=21
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=18
for(let i = 0;i<=4;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=15
for(let i = 0;i<=3;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=12
randomPositionY=12
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=15
randomPositionY=9
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=18
randomPositionY=6
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=21
randomPositionY=3
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}

// ********************************** LETTERA A ***********************************************

randomPositionX=33
randomPositionY=3


for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=33
		randomPositionY+=3
	}
}
randomPositionX=36
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=39
randomPositionY=33
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=39
randomPositionY=36
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=54
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=57
randomPositionY=27
for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=57
		randomPositionY-=3
	}}
	randomPositionX=42
randomPositionY=18
for(let i = 0;i<=9;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18ff120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i==4){
		randomPositionX-=15
		randomPositionY=15
	}
}

// ********************************** LETTERA F ***********************************************

randomPositionX=72
randomPositionY=3



for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xff38f120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=72
		randomPositionY+=3
	}
}
randomPositionX=81
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1ff120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=81
			randomPositionY-=3
		}
	
}
randomPositionX=81
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=81
			randomPositionY-=3
		}
	
}

// ********************************** LETTERA F ***********************************************

randomPositionX=93
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=93
		randomPositionY+=3
	}
}
randomPositionX=102
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=102
			randomPositionY-=3
		}
	
}
randomPositionX=102
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf5f8120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=102
			randomPositionY-=3
		}
	
}
// ********************************** LETTERA A ***********************************************

randomPositionX=114
randomPositionY=3


for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=114
		randomPositionY+=3
	}
}
randomPositionX=117
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=120
randomPositionY=33
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=120
randomPositionY=36
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=136
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=139
randomPositionY=27
for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=139
		randomPositionY-=3
	}}
	randomPositionX=124
randomPositionY=18
for(let i = 0;i<=9;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1f8f67f12f4f} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i==4){
		randomPositionX-=15
		randomPositionY=15
	}
}

// ********************************** LETTERA E ***********************************************

randomPositionX=151
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=151
		randomPositionY+=3
	}
}
randomPositionX=160
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=160
			randomPositionY-=3
		}
	
}
randomPositionX=160
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf5f8120f} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=160
			randomPositionY-=3
		}
	
}
randomPositionX=160
randomPositionY=6
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf9f812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=160
			randomPositionY-=3
		}
	
}

// ********************************** LETTERA L ***********************************************

randomPositionX=172
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=172
		randomPositionY+=3
	}
}

randomPositionX=181
randomPositionY=6
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf9f812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=181
			randomPositionY-=3
		}
	
}
// ********************************** LETTERA E ***********************************************

randomPositionX=192
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=192
		randomPositionY+=3
	}
}
randomPositionX=201
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x9f19} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=201
			randomPositionY-=3
		}
	
}
randomPositionX=201
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf5f81f} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=201
			randomPositionY-=3
		}
	
}
randomPositionX=201
randomPositionY=6
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf9f2f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=201
			randomPositionY-=3
		}
	
}
// ********************************** LETTERA R ***********************************************
randomPositionX = 0
randomPositionY = 0
for(let i =  0;i<=29;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x023ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 
if(i%3==0){
	randomPositionX=0
	randomPositionY+=3
}

capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;

if(randomPositionX<9){
randomPositionX+=3
}
name.push(capsule)
scene.add( capsule );
}
randomPositionX=0
randomPositionY=33
for(let i = 0;i<2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x023ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	console.log(capsule)
	randomPositionX+=3
}
randomPositionX=0
randomPositionY=36
for(let i = 0;i<1;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x023ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	console.log(capsule)
	randomPositionX+=3
}
randomPositionX=3
randomPositionY=36
for(let i = 0;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=6
randomPositionY=33
for(let i = 0;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=30
for(let i = 0;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=18
randomPositionY=27
for(let i = 0;i<=3;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=18
randomPositionY=24
for(let i = 0;i<=3;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=21
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=18
for(let i = 0;i<=4;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=15
for(let i = 0;i<=3;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=12
randomPositionY=12
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=15
randomPositionY=9
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=18
randomPositionY=6
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=21
randomPositionY=3
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}

// ********************************** LETTERA A ***********************************************

randomPositionX=33
randomPositionY=3


for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=33
		randomPositionY+=3
	}
}
randomPositionX=36
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=39
randomPositionY=33
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=39
randomPositionY=36
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=54
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=57
randomPositionY=27
for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=57
		randomPositionY-=3
	}}
	randomPositionX=42
randomPositionY=18
for(let i = 0;i<=9;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18ff120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i==4){
		randomPositionX-=15
		randomPositionY=15
	}
}

// ********************************** LETTERA F ***********************************************

randomPositionX=72
randomPositionY=3



for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xff38f120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=72
		randomPositionY+=3
	}
}
randomPositionX=81
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1ff120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=81
			randomPositionY-=3
		}
	
}
randomPositionX=81
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=81
			randomPositionY-=3
		}
	
}

// ********************************** LETTERA F ***********************************************

randomPositionX=93
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=93
		randomPositionY+=3
	}
}
randomPositionX=102
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=102
			randomPositionY-=3
		}
	
}
randomPositionX=102
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf5f8120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=102
			randomPositionY-=3
		}
	
}
// ********************************** LETTERA A ***********************************************

randomPositionX=114
randomPositionY=3


for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=114
		randomPositionY+=3
	}
}
randomPositionX=117
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=120
randomPositionY=33
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=120
randomPositionY=36
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=136
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=139
randomPositionY=27
for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=139
		randomPositionY-=3
	}}
	randomPositionX=124
randomPositionY=18
for(let i = 0;i<=9;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1f8f67f12f4f} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i==4){
		randomPositionX-=15
		randomPositionY=15
	}
}

// ********************************** LETTERA E ***********************************************

randomPositionX=151
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=151
		randomPositionY+=3
	}
}
randomPositionX=160
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=160
			randomPositionY-=3
		}
	
}
randomPositionX=160
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf5f8120f} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=160
			randomPositionY-=3
		}
	
}
randomPositionX=160
randomPositionY=6
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf9f812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=160
			randomPositionY-=3
		}
	
}

// ********************************** LETTERA L ***********************************************

randomPositionX=172
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=172
		randomPositionY+=3
	}
}

randomPositionX=181
randomPositionY=6
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf9f812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=181
			randomPositionY-=3
		}
	
}
// ********************************** LETTERA E ***********************************************

randomPositionX=192
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=192
		randomPositionY+=3
	}
}
randomPositionX=201
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x9f19} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=201
			randomPositionY-=3
		}
	
}
randomPositionX=201
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf5f81f} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=201
			randomPositionY-=3
		}
	
}
randomPositionX=201
randomPositionY=6
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf9f2f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=201
			randomPositionY-=3
		}
	
}
// ********************************** LETTERA R ***********************************************
randomPositionX = 0
randomPositionY = 0
for(let i =  0;i<=29;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x023ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 
if(i%3==0){
	randomPositionX=0
	randomPositionY+=3
}

capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;

if(randomPositionX<9){
randomPositionX+=3
}
name.push(capsule)
scene.add( capsule );
}
randomPositionX=0
randomPositionY=33
for(let i = 0;i<2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x023ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	console.log(capsule)
	randomPositionX+=3
}
randomPositionX=0
randomPositionY=36
for(let i = 0;i<1;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x023ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	console.log(capsule)
	randomPositionX+=3
}
randomPositionX=3
randomPositionY=36
for(let i = 0;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=6
randomPositionY=33
for(let i = 0;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=30
for(let i = 0;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=18
randomPositionY=27
for(let i = 0;i<=3;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=18
randomPositionY=24
for(let i = 0;i<=3;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=21
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=18
for(let i = 0;i<=4;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf80120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=9
randomPositionY=15
for(let i = 0;i<=3;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=12
randomPositionY=12
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=15
randomPositionY=9
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=18
randomPositionY=6
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=21
randomPositionY=3
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}

// ********************************** LETTERA A ***********************************************

randomPositionX=33
randomPositionY=3


for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=33
		randomPositionY+=3
	}
}
randomPositionX=36
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=39
randomPositionY=33
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=39
randomPositionY=36
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=54
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=57
randomPositionY=27
for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=57
		randomPositionY-=3
	}}
	randomPositionX=42
randomPositionY=18
for(let i = 0;i<=9;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18ff120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i==4){
		randomPositionX-=15
		randomPositionY=15
	}
}

// ********************************** LETTERA F ***********************************************

randomPositionX=72
randomPositionY=3



for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xff38f120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=72
		randomPositionY+=3
	}
}
randomPositionX=81
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1ff120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=81
			randomPositionY-=3
		}
	
}
randomPositionX=81
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=81
			randomPositionY-=3
		}
	
}

// ********************************** LETTERA F ***********************************************

randomPositionX=93
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=93
		randomPositionY+=3
	}
}
randomPositionX=102
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=102
			randomPositionY-=3
		}
	
}
randomPositionX=102
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf5f8120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=102
			randomPositionY-=3
		}
	
}
// ********************************** LETTERA A ***********************************************

randomPositionX=114
randomPositionY=3


for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=114
		randomPositionY+=3
	}
}
randomPositionX=117
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=120
randomPositionY=33
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=120
randomPositionY=36
for(let i = 0;i<=5;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=136
randomPositionY=30
for(let i = 0;i<=2;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
}
randomPositionX=139
randomPositionY=27
for(let i = 1;i<=27;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i%3==0){
		randomPositionX=139
		randomPositionY-=3
	}}
	randomPositionX=124
randomPositionY=18
for(let i = 0;i<=9;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1f8f67f12f4f} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3
	if(i==4){
		randomPositionX-=15
		randomPositionY=15
	}
}

// ********************************** LETTERA E ***********************************************

randomPositionX=151
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=151
		randomPositionY+=3
	}
}
randomPositionX=160
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf1812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=160
			randomPositionY-=3
		}
	
}
randomPositionX=160
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf5f8120f} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=160
			randomPositionY-=3
		}
	
}
randomPositionX=160
randomPositionY=6
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf9f812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=160
			randomPositionY-=3
		}
	
}

// ********************************** LETTERA L ***********************************************

randomPositionX=172
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=172
		randomPositionY+=3
	}
}

randomPositionX=181
randomPositionY=6
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf9f812f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=181
			randomPositionY-=3
		}
	
}
// ********************************** LETTERA E ***********************************************

randomPositionX=192
randomPositionY=3

for(let i = 1;i<=36;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf18120} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

    if(i%3==0){
		randomPositionX=192
		randomPositionY+=3
	}
}
randomPositionX=201
randomPositionY=36
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x9f19} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=201
			randomPositionY-=3
		}
	
}
randomPositionX=201
randomPositionY=24
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf5f81f} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=201
			randomPositionY-=3
		}
	
}
randomPositionX=201
randomPositionY=6
for(let i = 1;i<=6;i++){
	const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xf9f2f0} ); 
const capsule = new THREE.Mesh( geometry, material ); 


capsule.position.x=randomPositionX;
capsule.position.y=randomPositionY;
	
	
	name.push(capsule)
	scene.add(capsule)
	randomPositionX+=3

		if(i==3){
			randomPositionX=201
			randomPositionY-=3
		}
	
}
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x =  event.clientX;
	pointer.y =  event.clientY
	
	const intersects = raycaster.intersectObjects( scene.children );
console.log(intersects)
	for ( let i = 0; i < intersects.length; i ++ ) {

		intersects[ i ].object.material.color.set( 0xff0000 );

	}
}

window.addEventListener( 'pointermove', onPointerMove );


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

	raycaster.setFromCamera( pointer, camera );

	

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
	
name.forEach(c=>{
if(c.id%2==0){
			c.rotation.y +=0.1
			c.rotation.x+=0.1
			c.rotation.z+=0.1
		}else{
	c.rotation.y-=0.1
	c.rotation.x-=0.1
	c.rotation.z+=0.1
}

if(c.id <=509){
	c.position.z=3
}
if(c.id >=509&&c.id<=1018){
	c.position.z=6
}
		})
}
	
animate()
window.addEventListener('resize',()=>{
	renderer.setSize( window.innerWidth, window.innerHeight );

})