export default class Tile {
    constructor(scene : any, src : string, mtl : string, position : Array<Number>, scale : Number){
        console.log("Tile created!")
        let tile = document.createElement("a-obj-model")
        tile.setAttribute("src", "#" + src)
        tile.setAttribute("mtl", "#" + mtl)
        tile.setAttribute("scale", scale + " " + scale + " " + scale)
        tile.setAttribute("position", position[0] + " " + position[1] + " " + position[2])
        scene.appendChild(tile)
    }
}