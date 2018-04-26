// import * as THREE from 'three';
import 'aframe';
// import * as OBJLoader from '../node_modules/three-obj-loader';
// import { Mesh, OBJLoader } from 'three';

class Game {

    // public scene : THREE.Scene
    // public camera : THREE.PerspectiveCamera
    // public renderer : THREE.WebGLRenderer
    // public cube : THREE.Mesh
    // public loader : THREE.OBJLoader
    public pumpkinModel : any
    public pumpkinXaxis : number
    public pumpkinYaxis : number
    public pumpkinZaxis : number

    constructor(){
        console.log("new game created!")

        this.pumpkinXaxis = 0;
        this.pumpkinYaxis = 0;
        this.pumpkinZaxis = 0;

        //
        //  aframe
        //
        // create scene
        let scene = document.createElement("a-scene")

        let assets = document.createElement("a-assets")

        let pumpkinObj = document.createElement("a-asset-item")
        pumpkinObj.setAttribute("id", "pumpkin-obj")
        pumpkinObj.setAttribute("src", "js/models/pumpkin.obj")
        assets.appendChild(pumpkinObj)
        let pumpkinMtl = document.createElement("a-asset-item")
        pumpkinMtl.setAttribute("id", "pumpkin-mtl")
        pumpkinMtl.setAttribute("src", "js/models/pumpkin.mtl")
        assets.appendChild(pumpkinMtl)
        // let natureKitLeavesFall = document.createElement("a-asset-item")
        // natureKitLeavesFall.setAttribute("id", "natureKitLeavesFall")
        // natureKitLeavesFall.setAttribute("src", "js/models/Materials/natureKit-leavesFall.mat")
        // assets.appendChild(natureKitLeavesFall)

        scene.appendChild(assets)

        let skybox = document.createElement("a-sky")
        skybox.setAttribute("color", "#a020f0")
        scene.appendChild(skybox)

        this.pumpkinModel = document.createElement("a-obj-model")
        this.pumpkinModel.setAttribute("src", "#pumpkin-obj")
        // pumpkinModel.setAttribute("mtl", "#pumpkin-mtl")
        // pumpkinModel.setAttribute("env-map", "#natureKitLeavesFall")
        this.pumpkinModel.setAttribute("scale", "0.4 0.4 0.4")
        this.pumpkinModel.setAttribute("color", "#4CC3D9")
        this.pumpkinModel.setAttribute("wireframe", "false")
        this.pumpkinModel.setAttribute("position", "-1 0.5 -3")
        this.pumpkinModel.setAttribute("rotation", "0 0 0")
        scene.appendChild(this.pumpkinModel)

        let block = document.createElement("a-box")
        block.setAttribute("position", "-1 0.5 -3")
        block.setAttribute("color", "#4CC3D9")
        // scene.appendChild(block)

        document.body.appendChild(scene)




        //
        // threejs
        //
        // Make scene + camera
        // this.scene = new THREE.Scene();
        // this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        // Create cube
        // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // this.cube = new THREE.Mesh( geometry, material );
        // this.scene.add( this.cube );

        // Set camera position
        // this.camera.position.z = 5;

        // Make renderer
        // this.renderer = new THREE.WebGLRenderer();
        // this.renderer.setSize( window.innerWidth, window.innerHeight );
        // document.body.appendChild( this.renderer.domElement );

        // Load objects
        // instantiate a loader
        // this.loader = new THREE.OBJLoader();
        // this.loader = new THREE.MTLLoader()
        // console.log(this.loader);
        // loader.load('./js/models/pumpkin.obj', function ( this: any, object ) {
        //     this.scene.add( object )
        // });

        this.gameLoop()
    }

    gameLoop() : void {
        // this.pumpkinXaxis += 1;
        // this.pumpkinYaxis += 1;
        // this.pumpkinZaxis += 1;
        // console.log("loop test 1")

        //  threejs
        // this.cube.rotation.x += 0.1;
        // this.cube.rotation.y += 0.1;
        this.pumpkinModel.setAttribute("rotation", this.pumpkinXaxis + " " + this.pumpkinYaxis + " " + this.pumpkinZaxis)

        // Render scene
	    // this.renderer.render( this.scene, this.camera );

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())