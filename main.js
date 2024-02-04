import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const loader = new GLTFLoader();

        for (let i = 1; i < 4; i++) {
            console.log('./tp'+i+'.glb')
            const scene = new THREE.Scene();
            

            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            loader.load(
                './tp'+i+'.glb',  
                (gltf) => {
                    scene.add(gltf.scene);
                },
                undefined,
                (error) => {
                    console.error('Error loading glTF model', error);
                }
            );
        }
        

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();