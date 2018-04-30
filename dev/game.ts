import 'aframe';
import 'aframe-crawling-cursor';
import 'aframe-outline';
import Map from './map';

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
            "crystals-1-mtl": "js/models/tiles/filled/crystals/towerDefense_076.mtl",
            "crystals-2-obj": "js/models/tiles/filled/crystals/towerDefense_077.obj", 
            "crystals-2-mtl": "js/models/tiles/filled/crystals/towerDefense_077.mtl",
            "crystals-3-obj": "js/models/tiles/filled/crystals/towerDefense_118.obj", 
            "crystals-3-mtl": "js/models/tiles/filled/crystals/towerDefense_118.mtl",
            "crystals-4-obj": "js/models/tiles/filled/crystals/towerDefense_119.obj", 
            "crystals-4-mtl": "js/models/tiles/filled/crystals/towerDefense_119.mtl",
            "rocks-1-obj": "js/models/tiles/filled/rocks/towerDefense_006.obj", 
            "rocks-1-mtl": "js/models/tiles/filled/rocks/towerDefense_006.mtl",
            "rocks-2-obj": "js/models/tiles/filled/rocks/towerDefense_007.obj", 
            "rocks-2-mtl": "js/models/tiles/filled/rocks/towerDefense_007.mtl",
            "rocks-3-obj": "js/models/tiles/filled/rocks/towerDefense_068.obj", 
            "rocks-3-mtl": "js/models/tiles/filled/rocks/towerDefense_068.mtl",
            "rocks-4-obj": "js/models/tiles/filled/rocks/towerDefense_073.obj", 
            "rocks-4-mtl": "js/models/tiles/filled/rocks/towerDefense_073.mtl",
            "trees-1-obj": "js/models/tiles/filled/trees/towerDefense_060.obj", 
            "trees-1-mtl": "js/models/tiles/filled/trees/towerDefense_060.mtl",
            "trees-2-obj": "js/models/tiles/filled/trees/towerDefense_063.obj", 
            "trees-2-mtl": "js/models/tiles/filled/trees/towerDefense_063.mtl",
            "trees-3-obj": "js/models/tiles/filled/trees/towerDefense_004.obj", 
            "trees-3-mtl": "js/models/tiles/filled/trees/towerDefense_004.mtl",
            "trees-4-obj": "js/models/tiles/filled/trees/towerDefense_057.obj", 
            "trees-4-mtl": "js/models/tiles/filled/trees/towerDefense_057.mtl",
            "empty-1-obj": "js/models/tiles/towerDefense_088.obj", 
            "empty-1-mtl": "js/models/tiles/towerDefense_088.mtl",
            "path-ns-obj": "js/models/path/towerDefense_089.obj", 
            "path-ns-mtl": "js/models/path/towerDefense_089.mtl",
            "path-we-obj": "js/models/path/towerDefense_090.obj", 
            "path-we-mtl": "js/models/path/towerDefense_090.mtl",
            "path-es-obj": "js/models/path/towerDefense_091.obj", 
            "path-es-mtl": "js/models/path/towerDefense_091.mtl",
            "path-ne-obj": "js/models/path/towerDefense_092.obj", 
            "path-ne-mtl": "js/models/path/towerDefense_092.mtl",
            "path-ws-obj": "js/models/path/towerDefense_093.obj", 
            "path-ws-mtl": "js/models/path/towerDefense_093.mtl",
            "path-nw-obj": "js/models/path/towerDefense_094.obj", 
            "path-nw-mtl": "js/models/path/towerDefense_094.mtl"
        }

        // initialize scene
        this.init(assetArray, "virtual")

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
        let map = new Map(this.scene, mapArray)

        // initialize game loop
        this.gameLoop()
    }

    gameLoop() : void {

        requestAnimationFrame(() => this.gameLoop())
    }

    // initialze scene
    init(assetArray : any, reality : string) : void {

        this.scene = document.createElement("a-scene")
        this.scene.setAttribute("outline", "")
        // create asset pre-loader
        this.assetLoader(assetArray)


        if(reality === "virtual") {

            // set skybox
            let skybox = document.createElement("a-sky")
            skybox.setAttribute("color", "#a020f0")
            this.scene.appendChild(skybox)

            // set vr camera
            // let aCameraEntity = document.createElement("a-entity")
            // let aCamera = document.createElement("a-camera")
            // aCameraEntity.appendChild(aCamera)
            // aCameraEntity.setAttribute("position", "2.7 1.6 7.5")
            // // aCameraEntity.setAttribute("rotation", "-50 0 0")
            // this.scene.appendChild(aCameraEntity)
            
            // set vr camera v2
            let aCameraEntity = document.createElement("a-entity")
            aCameraEntity.setAttribute("camera", "")
            aCameraEntity.setAttribute("crawling-cursor", "")
            aCameraEntity.setAttribute("look-controls", "")
            aCameraEntity.setAttribute("position", "2.7 1.6 7.5")

            let aCameraChildEntity = document.createElement("a-entity")
            aCameraChildEntity.setAttribute("cursor", "fuse: true; fuseTimeout: 500")
            aCameraChildEntity.setAttribute("position", "0 0 -1")
            aCameraChildEntity.setAttribute("geometry", "primitive: ring; radiusInner: 0.02; radiusOuter: 0.03")
            aCameraChildEntity.setAttribute("material", "color: black; shader: flat")
            aCameraEntity.appendChild(aCameraChildEntity)

            this.scene.appendChild(aCameraEntity)

        } else {
            
            this.scene.setAttribute("embeddend", "")
            this.scene.setAttribute("arjs", "")

            // set ar camera
            let aMarkerCamera = document.createElement("a-marker-camera")
            aMarkerCamera.setAttribute("preset", "hiro")
            let aCameraEntity = document.createElement("a-entity")
            this.scene.appendChild(aMarkerCamera)
        }

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