import * as THREE from 'three';
import { Mesh } from 'three';

class Game {

    public scene : THREE.Scene
    public camera : THREE.PerspectiveCamera
    public renderer : THREE.WebGLRenderer
    public cube : THREE.Mesh

    constructor(){
        console.log("new game created!")

        // Make scene + camera
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        // Create cube
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );

        // Set camera position
        this.camera.position.z = 5;

        // Make renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );

        this.gameLoop()
    }

    gameLoop() : void {
        // console.log("loop test 1")
<<<<<<< HEAD

        this.cube.rotation.x += 0.1;
        this.cube.rotation.y += 0.1;

        // Render scene
	    this.renderer.render( this.scene, this.camera );

=======
>>>>>>> 3f19dc04e534c6b82299294e8946d33a5aa702f3
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())