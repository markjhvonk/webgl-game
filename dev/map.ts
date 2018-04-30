import Tile from './tile'
import OpenTile from './openTile'

export default class Map {
    constructor(scene : any, mapArray : Array<String>){

        console.log("Map array length: "+mapArray.length)
        
        let rowCounter : number = 0
        let rowCount : number = 0
        for (let i = 0; i < mapArray.length; i++) {
            setTimeout(function(){
                switch (mapArray[i]){
                    case "x":
                        let filledTileArray :Array<String> = ["trees", "rocks", "crystals"]
                        let randomAssetType : String = filledTileArray[Math.floor(Math.random() * 3)]
                        let randomAsset = Math.floor(Math.random() * 4) + 1;
                        let filledTile : Tile = new Tile(scene, randomAssetType+"-"+randomAsset+"-obj", randomAssetType+"-"+randomAsset+"-mtl", [rowCounter, 0, rowCount], 1)
                        break;
                        
                    case "o":
                        let emptyTile1 : OpenTile = new OpenTile(scene, "empty-1-obj", "empty-1-mtl", [rowCounter, 0, rowCount], 1)
                        break;

                    case "ns": 
                        let pathTileNS : Tile = new Tile(scene, "path-ns-obj", "path-ns-mtl", [rowCounter, 0, rowCount], 1)
                        break;

                    case "we": 
                        let pathTileWE : Tile = new Tile(scene, "path-we-obj", "path-we-mtl", [rowCounter, 0, rowCount], 1)
                        break;
                    
                    case "es": 
                        let pathTileES : Tile = new Tile(scene, "path-es-obj", "path-es-mtl", [rowCounter, 0, rowCount], 1)
                        break;
                    
                    case "ne": 
                        let pathTileNE : Tile = new Tile(scene, "path-ne-obj", "path-ne-mtl", [rowCounter, 0, rowCount], 1)
                        break;

                    case "ws": 
                        let pathTileWS : Tile = new Tile(scene, "path-ws-obj", "path-ws-mtl", [rowCounter, 0, rowCount], 1)
                        break;

                    case "nw": 
                        let pathTileNW : Tile = new Tile(scene, "path-nw-obj", "path-nw-mtl", [rowCounter, 0, rowCount], 1)
                        break;

                    default: 
                        console.log("error");
                }

                if(rowCounter == 4) {
                    rowCounter = 0
                    rowCount++
                } else {
                    rowCounter++
                }
            }, i * 100);
        }
    }
}