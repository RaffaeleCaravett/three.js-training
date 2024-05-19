import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import * as dat from './node_modules/dat.gui/build/dat.gui.module.js'; 
import {GLTFLoader} from "./node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import * as YUKA from './node_modules/yuka/build/yuka.module.js'

const canvas = document.getElementsByClassName('canvas')[0]

let scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({alpha:true});
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer.setSize(window.innerWidth, window.innerHeight );
canvas.appendChild( renderer.domElement );
let pointLights=[]
let pointLights1=[]

const ambientLight = new THREE.AmbientLight(0xffffff,0.1)
scene.add(ambientLight)

camera.position.set(0,0,140)

let raycaster = new THREE.Raycaster();

	const mousePosition = new THREE.Vector2();
	

       

const geometry = new THREE.BoxGeometry( .1, .1, .1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

const vehicle = new YUKA.Vehicle();


    
for(let i =0 ; i<=5000;i++){
    const geometry = new THREE.SphereGeometry( 0.25,.5, 0.25 ); 
    const material = new THREE.MeshBasicMaterial( { color: 0xFFD700 } ); 
    const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );
	pointLights.push(sphere)
    
}
for ( let p of pointLights){
	
    let randomNumberTwentyOne = Math.random()*220-115
    let randomNumberTwentyTwo = Math.random()*221-115.5
    let randomNumberThirty = Math.random()*220-115

    p.position.x = randomNumberTwentyOne;  
                p.position.y = randomNumberTwentyTwo;
                p.position.z = randomNumberThirty;
                cube.add(p)
    } 
    
    

    const geometry1 = new THREE.BoxGeometry( .1, .1, .1 ); 
    const material1 = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
    const cube1 = new THREE.Mesh( geometry1, material1 ); 
    scene.add( cube1 );
    
        
    for(let i =0 ; i<=5000;i++){
        const geometry = new THREE.SphereGeometry( 0.25,.5, 0.25 ); 
        const material = new THREE.MeshBasicMaterial( { color: 0xFFD700 } ); 
        const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );
        pointLights1.push(sphere)
        
    }
    for ( let p of pointLights1){
        
        let randomNumberTwentyOne = Math.random()*220-115
        let randomNumberTwentyTwo = Math.random()*221-115.5
        let randomNumberThirty = Math.random()*220-115
    
        p.position.x = randomNumberTwentyOne;  
                    p.position.y = randomNumberTwentyTwo;
                    p.position.z = randomNumberThirty;
                    cube1.add(p)
        } 

function sync (entity,renderComponent){
    renderComponent.matrix.copy(entity.worldMatrix)
}

const loader = new GLTFLoader();
let model;
loader.load("./model/spaceship/multi_universe_space_ship_3d_model.glb",
    (glb) => {
        model = glb.scene;
        scene.add(model);
         
        model.scale.divide(new THREE.Vector3(.09,.09,.09));
        model.position.x=-190
        model.rotateY(2)
      vehicle.setRenderComponent(model,sync)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLB model:', error);
    }
)
    
const target = new YUKA.GameEntity();



const path = new YUKA.Path()

path.add(new YUKA.Vector3(-6,0,0))
path.add(new YUKA.Vector3(-4,0,-4))
path.add(new YUKA.Vector3(0,0,0))
path.add(new YUKA.Vector3(4,0,-4))
path.add(new YUKA.Vector3(6,0,0))
path.add(new YUKA.Vector3(4,0,4))
path.add(new YUKA.Vector3(0,0,6))

vehicle.position.copy(path.current())

const followPathBehavior = new YUKA.FollowPathBehavior(path,0.5)
vehicle.steering.add(followPathBehavior);



// const seekBehavior = new YUKA.ArriveBehavior(target.position,3,1);
// vehicle.steering.add(seekBehavior);
vehicle.position.set(0,0,0)
vehicle.maxSpeed=3


const entityManager = new YUKA.EntityManager();
entityManager.add(vehicle)
entityManager.add(target);
const time = new YUKA.Time()

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  cube.rotation.y+=0.0005
  cube.rotation.z+=0.0005
  cube1.rotation.y-=0.0005
  cube1.rotation.z-=0.0005
  const delta = time.update().getDelta();
entityManager.update(delta)
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
let initialCount = 1;

let input1 = document.getElementsByClassName('form-control')[0]
let input2 = document.getElementsByClassName('form-control')[1]
let input3 = document.getElementsByClassName('form-control')[2]
let input4 = document.getElementsByClassName('form-control')[3]
let input5 = document.getElementsByClassName('form-control')[4]



let label1 = document.getElementsByClassName('label')[0]
let label2 = document.getElementsByClassName('label')[1]
let label3 = document.getElementsByClassName('label')[2]
let label4 = document.getElementsByClassName('label')[3]
let label5 = document.getElementsByClassName('label')[4]


let arrow1 = document.getElementsByClassName('arrow')[0]
let arrow2 = document.getElementsByClassName('arrow')[1]
let check1 = document.getElementsByClassName('check')[0]

let previousCountValue=0;


const checkStatus = (param) => {
    previousCountValue=initialCount;  
if(param=='avanti'&& initialCount<5){
    initialCount+=1
}
else if(param=='indietro'&&initialCount>1){
    initialCount-=1
}else{
    initialCount=initialCount
}
switch(initialCount){
    case 1 :{
        label2.style.display='none'
        label3.style.display='none'
        label4.style.display='none'
        label5.style.display='none'
        input2.style.display='none'
        input3.style.display='none'
        input4.style.display='none'
        input5.style.display='none'
        
        input1.style.display='block'
        label1.style.display='block'

        arrow1.style.display='none'
        arrow2.style.display='block'

        check1.style.display='none'
    }
    break;
    case 2 :{
        label1.style.display='none'
        label3.style.display='none'
        label4.style.display='none'
        label5.style.display='none'
        input1.style.display='none'
        input3.style.display='none'
        input4.style.display='none'
        input5.style.display='none'

        input2.style.display='block'
        label2.style.display='block'

        arrow1.style.display='inline'
        arrow2.style.display='inline'

        check1.style.display='none'
    }
    break;
    case 3 :{
        label1.style.display='none'
        label2.style.display='none'
        label4.style.display='none'
        label5.style.display='none'
        input1.style.display='none'
        input2.style.display='none'
        input4.style.display='none'
        input5.style.display='none'

        input3.style.display='block'
        label3.style.display='block'

        arrow1.style.display='inline'
        arrow2.style.display='inline'

        check1.style.display='none'
    }
    break;
    case 4 :{
        label1.style.display='none'
        label2.style.display='none'
        label3.style.display='none'
        label5.style.display='none'
        input1.style.display='none'
        input2.style.display='none'
        input3.style.display='none'
        input5.style.display='none'

        input4.style.display='block'
        label4.style.display='block'

        arrow1.style.display='inline'
        arrow2.style.display='inline'

        check1.style.display='none'
    }
    break;
    case 5 :{
        label1.style.display='none'
        label2.style.display='none'
        label3.style.display='none'
        label4.style.display='none'
        input1.style.display='none'
        input2.style.display='none'
        input3.style.display='none'
        input4.style.display='none'

        input5.style.display='block'
        label5.style.display='block'

        arrow1.style.display='inline'
        arrow2.style.display='none'

        check1.style.display='inline'
    }
    break;

}

}

checkStatus('')

arrow1.addEventListener('click', () =>{
checkStatus('indietro')
switch(initialCount){
case(1):{
target.position.set(10,20,0)
}
break;
case(2):{
target.position.set(30,20,0)

}
break;
case(3):{
target.position.set(40,20,0)

}
break;
case(4):{
target.position.set(10,200,0)

}
break;
}
})
        arrow2.addEventListener('click', () =>{
            checkStatus('avanti')
            switch(initialCount){
                case(2):{
                target.position.set(100,20,0)
                }
                break;
                case(3):{
                target.position.set(50,200,0)
                }
                break;
                case(4):{
                target.position.set(10,50,0)
                }
                break;
                case(5):{
                target.position.set(300,40,0)
                }
                break;
                }
            })

        check1.addEventListener('click', () =>{
            console.log('ok')
            ()
            
            })



            