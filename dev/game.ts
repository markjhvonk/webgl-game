import 'aframe';
import 'aframe-crawling-cursor';
import 'aframe-outline';

import Map from './map/map';
import AssetsLoader from './assetsLoader';
import Ui from './ui/ui';
import EnemyInit from './enemies/enemyInit';
// import Enemy from './enemy';

export default class Game {

    // singleton (lesson)
    private static instance: Game

    public scene! : HTMLElement
    public ui! : Ui
    private enemyInit : EnemyInit

    private constructor(){
        console.log("new game created!")

        // initialize scene
        this.init("virtual")

        // create map
        let mapArray : Array<String> = [
            "x","o","x","ns","o",
            "o","es","we","nw","x",
            "x","ns","o","x","o",
            "o","ne","we","we","ws",
            "x","es","we","we","nw",
            "o","ne","ws","o","x",
            "x","o","ns","x","x"
        ]
        let map = new Map(this.scene, this.ui, mapArray)

        this.enemyInit = new EnemyInit(this.scene, this.ui)

        // initialize game loop
        this.gameLoop()
    }

    // singleton (lesson)
    static getInstance() {
        if(! Game.instance) {
            Game.instance = new Game()
            // AssetsLoader.loadData(Game.getInstance())
        }
        return Game.instance
    }

    // Game loop
    private gameLoop() : void {
        // this.enemyInit.createEnemies()
        // this.enemyInit.enemyMovement()
        for (const enemy of this.enemyInit.enemies) {
            enemy.move()
        } 

        requestAnimationFrame(() => this.gameLoop())
    }

    // initialze scene
    private init(reality : string) : void {

        this.ui = new Ui()

        this.ui.callBanner("Look down!", 3000)

        this.scene = document.createElement("a-scene")
        // this.scene.setAttribute("outline", "")
        // create asset pre-loader
        let assetsLoader = new AssetsLoader(this.scene)
        // this.assetLoader(assetArray)

        if(reality === "virtual") {

            // set skybox
            let skybox = document.createElement("a-sky")
            skybox.setAttribute("color", "#a020f0")
            this.scene.appendChild(skybox)
            
            // set vr camera
            let aCameraEntity = document.createElement("a-entity")
            aCameraEntity.setAttribute("camera", "")
            aCameraEntity.setAttribute("crawling-cursor", "")
            aCameraEntity.setAttribute("look-controls", "")
            aCameraEntity.setAttribute("position", "2.7 3.5 2.6")

            // set beamray cursor
            let aCameraChildEntity = document.createElement("a-entity")
            aCameraChildEntity.setAttribute("cursor", "fuse: true; fuseTimeout: 500")
            aCameraChildEntity.setAttribute("position", "0 0 -1")
            aCameraChildEntity.setAttribute("geometry", "primitive: ring; radiusInner: 0.02; radiusOuter: 0.03")
            aCameraChildEntity.setAttribute("material", "color: black; shader: flat")
            aCameraEntity.appendChild(aCameraChildEntity)

            // add the camera to the scene
            this.scene.appendChild(aCameraEntity)

        } else {
            // Stuff for AR
            // this.scene.setAttribute("embeddend", "")
            this.scene.setAttribute("ar", "")

            // let aCameraEntity = document.createElement("a-entity")
            // aCameraEntity.setAttribute("camera", "")
            // // aCameraEntity.setAttribute("crawling-cursor", "")
            // // aCameraEntity.setAttribute("look-controls", "")
            // aCameraEntity.setAttribute("position", "2.7 1.6 7.5")

            // // set beamray cursor
            // let aCameraChildEntity = document.createElement("a-entity")
            // aCameraChildEntity.setAttribute("cursor", "fuse: true; fuseTimeout: 500")
            // aCameraChildEntity.setAttribute("position", "0 0 -1")
            // aCameraChildEntity.setAttribute("geometry", "primitive: ring; radiusInner: 0.02; radiusOuter: 0.03")
            // aCameraChildEntity.setAttribute("material", "color: black; shader: flat")
            // aCameraEntity.appendChild(aCameraChildEntity)

            // // add the camera to the scene
            // this.scene.appendChild(aCameraEntity)

            // // set ar camera
            // let aMarkerCamera = document.createElement("a-marker-camera")
            // aMarkerCamera.setAttribute("preset", "hiro")
            // aMarkerCamera.setAttribute("crawling-cursor", "")
            // this.scene.appendChild(aMarkerCamera)
        }

        // add scene to document
        document.body.appendChild(this.scene)

    }
}

window.addEventListener("load", () => {
    Game.getInstance()
})