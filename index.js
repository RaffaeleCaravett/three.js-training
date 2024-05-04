import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

//Getting div element from document
let col = document.getElementsByClassName('second-col')[0]

//Creating and render the scene
let scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize( window.innerWidth, window.innerHeight );
col.appendChild( renderer.domElement );

//Creating lines
const material = new THREE.LineBasicMaterial( { color: 0x8225ff } );
const points = [];
points.push( new THREE.Vector3( 0, 0, 0 ) );
points.push( new THREE.Vector3( 0, 19, 0 ) );
points.push( new THREE.Vector3( 1, 20, 0 ) );
points.push( new THREE.Vector3( 1, 20, 1 ) );
points.push( new THREE.Vector3( 1, 20, 0 ) );
points.push( new THREE.Vector3( 2, 19.6, 0 ) );
points.push( new THREE.Vector3( 3, 19.4, 0 ) );
points.push( new THREE.Vector3( 4, 19.2, 0 ) );
points.push( new THREE.Vector3( 5, 19, 0 ) );
points.push( new THREE.Vector3( 6, 18.8, 0 ) );
points.push( new THREE.Vector3( 7, 18.6, 0 ) );
points.push( new THREE.Vector3( 8, 18, 0 ) );
points.push( new THREE.Vector3( 8.5, 17, 0 ) );
points.push( new THREE.Vector3( 8.7, 16, 0 ) );
points.push( new THREE.Vector3( 8.7, 13, 0 ) );
points.push( new THREE.Vector3( 7, 11, 0 ) );
points.push( new THREE.Vector3( 5, 8.5, 0 ) );
points.push( new THREE.Vector3( 3, 7.7, 0 ) );
points.push( new THREE.Vector3( 3, 7.7, 0 ) );
points.push( new THREE.Vector3( 6, 4, 0 ) );
points.push( new THREE.Vector3( 9, 0, 0 ) );

const material1 = new THREE.LineBasicMaterial( { color: 0x8225ff } );
const points1 = [];
points1.push( new THREE.Vector3( 0, 0, 0 ) );
points1.push( new THREE.Vector3( 0, 0, 1 ) );
points1.push( new THREE.Vector3( 0, 19, 1 ) );
points1.push( new THREE.Vector3( 0, 19, 1 ) );
points1.push( new THREE.Vector3( 0, 19, 0 ) );
points1.push( new THREE.Vector3( 0, 19, 1 ) );
points1.push( new THREE.Vector3( 1, 20, 1 ) );
points1.push( new THREE.Vector3( 1, 20, 1 ) );
points1.push( new THREE.Vector3( 2, 19.6, 1 ) );
points1.push( new THREE.Vector3( 3, 19.4, 1 ) );
points1.push( new THREE.Vector3( 4, 19.2, 1 ) );
points1.push( new THREE.Vector3( 5, 19, 1 ) );
points1.push( new THREE.Vector3( 6, 18.8, 1 ) );
points1.push( new THREE.Vector3( 7, 18.6, 1 ) );
points1.push( new THREE.Vector3( 8, 18, 1 ) );
points1.push( new THREE.Vector3( 8.5, 17, 1 ) );
points1.push( new THREE.Vector3( 8.7, 16, 1 ) );
points1.push( new THREE.Vector3( 8.7, 13, 1 ) );
points1.push( new THREE.Vector3( 7, 11, 1 ) );
points1.push( new THREE.Vector3( 5, 8.5, 1 ) );
points1.push( new THREE.Vector3( 3, 7.7, 1 ) );
points1.push( new THREE.Vector3( 3, 7.7, 0 ) );
points1.push( new THREE.Vector3( 3, 7.7, 1 ) );
points1.push( new THREE.Vector3( 6, 4, 1 ) );
points1.push( new THREE.Vector3( 9, 0, 1 ) );
points1.push( new THREE.Vector3( 9, 0, 0 ) );
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );
const geometry1 = new THREE.BufferGeometry().setFromPoints( points1 );
const line1 = new THREE.Line( geometry1, material1 );
scene.add( line,line1 );


//Setting camera position
camera.position.x = 0;
camera.position.y = 20;
camera.position.z = 50;

/*Adding random stuff at click event in random position */
// window.addEventListener('click',(e)=>{
//    e.preventDefault()
//    const geometry = new THREE.SphereGeometry( 5, 15, 60 ); 
//    const hue = Math.random();
//    const saturation = 0.5;
//    const lightness = 0.5;

//    const color = new THREE.Color().setHSL(hue, saturation, lightness);

//    let x =Math.round(Math.random()*50 -25)
//    let y =Math.round(Math.random()*50 -25)
//    let z =Math.round(Math.random()*50 -25)
//    let value = Math.random()
//     if(value>0.5){
//         const material = new THREE.MeshBasicMaterial( { color: color } ); 
//         const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );
//         sphere.position.x = x
//         sphere.position.y = y
//         sphere.position.z = z
//         scene.add(sphere)
//     }else{
//         const material = new THREE.MeshBasicMaterial( { color: color } ); 
//         const geometry = new THREE.BoxGeometry( 5, 5, 5 );
// const cube = new THREE.Mesh( geometry, material );
// cube.position.x = x
// cube.position.y = y
// cube.position.z = z
// scene.add( cube );
//     }
 
// })


//Luce
const light = new THREE.AmbientLight( 0x40340,1 ); 
scene.add( light );

//animate the scene
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate()


const grid = new THREE.GridHelper(20,20,0x8005ff,0x8005ff)
grid.position.x = 4
grid.position.y = -3
scene.add(grid)


const object = new THREE.Object3D();
scene.add( object );

const object1 = new THREE.Object3D();
const object2 = new THREE.Object3D();
object1.add(object2)
scene.add(object1)
object.matrixAutoUpdate = false;
object.updateMatrix();
const MAX_POINTS = 500;

// geometry
const geometryLine = new THREE.BufferGeometry();

// attributes
const positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
geometryLine.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

// draw range
const drawCount = 2; // draw the first 2 points, only
geometryLine.setDrawRange( 0, drawCount );

// material
const materialLine = new THREE.LineBasicMaterial( { color: 0xff2000 } );

// line
const lineLine = new THREE.Line( geometryLine, materialLine );
scene.add( lineLine );
const positionAttribute = lineLine.geometry.getAttribute( 'position' );

let x = 0, y = 0, z = 0;

for ( let i = 0; i < positionAttribute.count; i ++ ) {

	positionAttribute.setXYZ( i, x, y, z );

    x += ( Math.random() - 0.5 ) * 30;
    y += ( Math.random() - 0.5 ) * 30;
    z += ( Math.random() - 0.5 ) * 30;

}