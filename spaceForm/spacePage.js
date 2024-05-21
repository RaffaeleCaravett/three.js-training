import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import * as dat from '../node_modules/dat.gui/build/dat.gui.module.js'; 
import {GLTFLoader} from "../node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import * as YUKA from '../node_modules/yuka/build/yuka.module.js'

const canvas = document.getElementsByClassName('canvas')[0]

let scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({alpha:true});
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer.setSize(window.innerWidth, window.innerHeight );
canvas.appendChild( renderer.domElement );
let pointLights=[]
let pointLights1=[]



const vehicle = new YUKA.Vehicle();


function sync(entity, renderComponent) {
    renderComponent.matrix.copy(entity.worldMatrix);
}



scene.rotateX(1)


vehicle.maxSpeed=30

const entityManager = new YUKA.EntityManager();
entityManager.add(vehicle);

const targetGeometry = new THREE.SphereGeometry(0.1);
const targetMaterial = new THREE.MeshPhongMaterial({color: 0xFFEA00});
const targetMesh = new THREE.Mesh(targetGeometry, targetMaterial);
targetMesh.matrixAutoUpdate = false;
scene.add(targetMesh);

const target = new YUKA.GameEntity();
target.setRenderComponent(targetMesh, sync);
entityManager.add(target);



const seekBehavior = new YUKA.ArriveBehavior(target.position,3,3);
vehicle.steering.add(seekBehavior);



const time = new YUKA.Time();


const ambientLight = new THREE.AmbientLight(0xffffff,0.1)
scene.add(ambientLight)

camera.position.set(0,0,140)

let raycaster = new THREE.Raycaster();

	const mousePosition = new THREE.Vector2();
	

const geometry = new THREE.BoxGeometry( .1, .1, .1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );



    
for(let i =0 ; i<=5000;i++){
    const geometry = new THREE.SphereGeometry( Math.random()*0.25,Math.random()*0.5, Math.random()*0.25 ); 
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
        const geometry = new THREE.SphereGeometry( Math.random()*0.25,Math.random()*0.5, Math.random()*0.25 ); 
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



const loader = new GLTFLoader();
let model;
let mixer;
loader.load("../model/spaceship/multi_universe_space_ship_3d_model.glb",
    (glb) => {
        model = glb.scene;
        scene.add(model);
        vehicle.setRenderComponent(model, sync);
model.matrixAutoUpdate=false
vehicle.scale = new YUKA.Vector3(5, 5, 5);
     model.position.x=-190
     vehicle.position.x=-230
     vehicle.position.y=-52
     vehicle.position.z=30
     target.position.x=-120
     target.position.y=-50
     target.position.z=25
        model.rotateY(2)
        mixer = new THREE.AnimationMixer(model);
        glb.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
        });
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading GLB model:', error);
    }
)
    cube.rotation.set(2,2,0)

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  cube.rotation.y+=0.0005
  cube.rotation.z+=0.0005
  cube1.rotation.y-=0.0005
  cube1.rotation.z-=0.0005
  const delta = time.update().getDelta();
    entityManager.update(delta);
    if (mixer) mixer.update(delta);

    let distanceToTarget = vehicle.position.distanceTo(target.position);
    if (distanceToTarget < 0.00000000000002) {
        console.log('Vehicle has arrived at the target!');
    }

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

let error1 = document.getElementsByClassName('error')[0]
let error2 = document.getElementsByClassName('error')[1]
let error3 = document.getElementsByClassName('error')[2]
let error4 = document.getElementsByClassName('error')[3]
let error5 = document.getElementsByClassName('error')[4]

let arrow1 = document.getElementsByClassName('arrow')[0]
let arrow2 = document.getElementsByClassName('arrow')[1]
let check1 = document.getElementsByClassName('check')[0]

let previousCountValue=0;

error1.style.display='none'
error2.style.display='none'
error3.style.display='none'
error4.style.display='none'
error5.style.display='none'


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
        
        target.position.x=-120
        target.position.y=-50
        target.position.z=30   
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
        target.position.x=-20
        target.position.y=-0
        target.position.z=0   
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
        target.position.x=60
        target.position.y=0
        target.position.z=-15   
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
        target.position.x=85
        target.position.y=20
        target.position.z=-50   
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
        target.position.x=250
        target.position.y=180
        target.position.z=-50  
    }
    break;

}

}

checkStatus('')

arrow1.addEventListener('click', () =>{
   checkStatus('indietro')
})
        arrow2.addEventListener('click', () =>{
        
            switch(initialCount){
                case(1):{
if(input1.value&&input1.value.length>0)
       {
  checkStatus('avanti')
  error1.style.display='none'
       }else{
        error1.style.display='block'
       }         
    }
    break;
    case(2):{
        if(input2.value&&input2.value.length>0){
            checkStatus('avanti')
            error2.style.display='none'
        }else{
            error2.style.display='block'
        }
                }
                break;
                case(3):{
                    if(input3.value&&input3.value.length>0){
                        checkStatus('avanti')
                        error3.style.display='none'
                    }else{
                        error3.style.display='block'
                    }
                            }
                            break;
                            case(4):{
                                if(input4.value&&input4.value.length>0){
                                    checkStatus('avanti')
                                    error4.style.display='none'
                                }else{
                                    error4.style.display='block'
                                }
                                        }
                                        break;
            }
          
    
            })

        check1.addEventListener('click', () =>{
  
        
        if(input1.value&&input2.value&&input3.value&&input4.value&&input5.value){
            error5.style.display='none'
            target.position.x=-300
        target.position.y=-50
        target.position.z=30 

        vehicle.maxSpeed=200  
            setTimeout(()=>{
window.location.href='../spaceHome/spaceHome.html'
            },4000)
        }else if(!input5.value || input5.value.length==0){
            error5.style.display='block'
        }
            })



            