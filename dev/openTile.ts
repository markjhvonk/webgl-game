import Tile from './tile'

export default class OpenTile extends Tile {

    // public tile : any
    constructor(scene : any, src : string, mtl : string, position : Array<Number>, scale : Number){
        super(scene, src, mtl, position, scale)
        let carryTile = this.tile

        let selected = false
        let selectedCylinder : any
        this.tile.addEventListener("mouseenter", function(){
            selected = true
            selectedCylinder = document.createElement("a-torus")
            selectedCylinder.setAttribute("color", "#ff0000")
            selectedCylinder.setAttribute("scale", "0.05 0.05 0.05")
            selectedCylinder.setAttribute("rotation", "90 0 0")
            selectedCylinder.setAttribute("position", "0.5 0.4 -0.5")
            selectedCylinder.setAttribute("radius", "5")
            selectedCylinder.setAttribute("radiusTubular", "0.001")
            carryTile.appendChild(selectedCylinder)
            // tile.setAttribute("metalness", "1")
            // tile.setAttribute("scale", "1 1.5 1")
            // tile.setAttribute("wireframe", "true")
            // tile.setAttribute("mtl", "")
            // tile.setAttribute("color", "#ff0000")
            console.log("hover in")
        })
        this.tile.addEventListener("mouseleave", function(){
            selected = false
            carryTile.removeChild(selectedCylinder)
            // tile.setAttribute("mtl", "#" + mtl)
            // tile.setAttribute("scale", "1 1 1")
            // tile.setAttribute("wireframe", "false")
            // tile.setAttribute("color", "")
            console.log("hover out")
        })

        if(selected) {
            // tile.setAttribute("mtl", "")
            // tile.setAttribute("color", "#ff0000")
        } else {
            // tile.setAttribute("mtl", "#" + mtl)
            // tile.setAttribute("color", "")
        }
    }
}