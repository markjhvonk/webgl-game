import 'aframe';
import Tile from './tile';

class Game {

    public towerModel : any
    public scene : any

    constructor(){
        console.log("new game created!")

        // assets array for asset pre-loader
        let assetArray = {
            "tower-top-obj": "js/models/towerDefense_001.obj", 
            "tower-top-mtl": "js/models/towerDefense_001.mtl",
            "crystals-1-obj": "js/models/tiles/filled/crystals/towerDefense_076.obj", 
            "crystals-1-mtl": "js/models/tiles/filled/crystals/towerDefense_076.mtl"
        }

        // initialize scene
        this.init(assetArray)

        // create tile
        let newTile : Tile = new Tile(this.scene, "crystals-1-obj", "crystals-1-mtl", [1, 0, -3], 1)
        let newTile2 : Tile = new Tile(this.scene, "crystals-1-obj", "crystals-1-mtl", [2, 0, -3], 1)
        let towerTop : Tile = new Tile(this.scene, "tower-top-obj", "tower-top-mtl", [1, 0, -1], 1)

        // initialize game loop
        this.gameLoop()
    }

    gameLoop() : void {

        requestAnimationFrame(() => this.gameLoop())
    }

    // initialze scene
    init(assetArray : any) : void {

        // create scene
        this.scene = document.createElement("a-scene")

        // create asset pre-loader
        this.assetLoader(assetArray)

        // set skybox
        let skybox = document.createElement("a-sky")
        skybox.setAttribute("color", "#a020f0")
        this.scene.appendChild(skybox)

        document.body.appendChild(this.scene)
    }

    // create asset loader and add assets
    assetLoader(assetsArray : any) : void {

        // create asset pre-loader
        let assets = document.createElement("a-assets")
        for(var key in assetsArray) {
            let asset = document.createElement("a-asset-item")
            asset.setAttribute("id", key)
            asset.setAttribute("src", assetsArray[key])
            assets.appendChild(asset)
        }
        this.scene.appendChild(assets)
    }
}

window.addEventListener("load", () => new Game())