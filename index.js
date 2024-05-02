import * as THREE from './three.module.js';

let col = document.getElementsByClassName('second-col')[0]

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
renderer.setSize( window.innerWidth, window.innerHeight );
col.appendChild( renderer.domElement );

console.log(col)