import * as THREE from 'three';

class Game {
    constructor(){
        console.log("new game created!")

        //Three.js stuff
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        this.gameLoop()
    }

    gameLoop() : void {
        // console.log("loop test 1")
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())