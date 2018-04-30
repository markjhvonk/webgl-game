export default class Tile {
    public tile :any
    constructor(scene : any, src : string, mtl : string, position : Array<Number>, scale : Number){
        // console.log("Tile created!")
        this.tile = document.createElement("a-obj-model")
        this.tile.setAttribute("src", "#" + src)
        this.tile.setAttribute("mtl", "#" + mtl)
        this.tile.setAttribute("scale", scale + " " + scale + " " + scale)
        this.tile.setAttribute("position", position[0] + " " + position[1] + " " + position[2])
        scene.appendChild(this.tile)
        
    }
}