import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import * as dat from './node_modules/dat.gui/build/dat.gui.module.js'; 
import {GLTFLoader} from "./node_modules/three/examples/jsm/loaders/GLTFLoader.js";

const canvas = document.getElementsByClassName('canvas')[0]

let scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({alpha:true});
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer.setSize(window.innerWidth, window.innerHeight );
canvas.appendChild( renderer.domElement );
renderer.setClearColor(0x999999)
let pointLights=[]

for(let i =0 ; i<=10000;i++){
	const sphereLight = new THREE.SphereGeometry( 0.05, 4, 2 );
	let pointLight = new THREE.PointLight( 0xf300f0, 90000 );
	// const r = Math.random();
    // const g = Math.random();
    // const b = Math.random();
    
    // const color = new THREE.Color(r, g, b);
    pointLight.add( new THREE.Mesh( sphereLight, new THREE.MeshBasicMaterial( { color: 0xFFD700} ) ) );
	pointLights.push(pointLight)
}
	
const ambientLight = new THREE.AmbientLight(0xffffff,0.1)
scene.add(ambientLight)
for ( let p of pointLights){
scene.add(p)
}
camera.position.set(0,0,30)

let raycaster = new THREE.Raycaster();

	const mousePosition = new THREE.Vector2();
	for ( let p of pointLights){
	
		let randomNumberTwentyOne = Math.random()*70-35
		let randomNumberTwentyTwo = Math.random()*71-35.5
		let randomNumberThirty = Math.random()*70-35
	
		p.position.x = randomNumberTwentyOne;
					p.position.y = randomNumberTwentyTwo;
					p.position.z = randomNumberThirty;
		}

        const loader = new GLTFLoader();

        loader.load("./model/spaceship/multi_universe_space_ship_3d_model.glb",
            (glb) => {
                let model = glb.scene;
                scene.add(model);
            }
        )
       
    
    
    


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
scene.rotation.y+=0.001
scene.rotation.z+=0.001

 }
	
animate()


window.addEventListener('mousemove',e =>{
	mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
	mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;


  raycaster.setFromCamera(mousePosition, camera);
  
})


window.addEventListener('resize',()=>{
	
		renderer.setSize(window.innerWidth, window.innerHeight );
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	
})