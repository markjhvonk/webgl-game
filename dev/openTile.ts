import Tile from './tile'
import actionButton from './actionButton'

export default class OpenTile extends Tile {

    // public tile : any
    constructor(scene : any, ui : any, src : string, mtl : string, position : Array<Number>, scale : Number){
        super(scene, src, mtl, position, scale)
        //variable to store original tile for methods?

        let carryTile = this.tile

        let selected = false
        let selectedCylinder : any

        let towerButton : any

        this.tile.addEventListener("mouseenter", function(){
            selected = true

            // selected cylinder
            selectedCylinder = document.createElement("a-torus")
            selectedCylinder.setAttribute("color", "#ff0000")
            selectedCylinder.setAttribute("scale", "0.05 0.05 0.05")
            selectedCylinder.setAttribute("rotation", "90 0 0")
            selectedCylinder.setAttribute("position", "0.5 0.4 -0.5")
            selectedCylinder.setAttribute("radius", "5")
            selectedCylinder.setAttribute("radiusTubular", "0.001")
            carryTile.appendChild(selectedCylinder)
            
            towerButton = new actionButton('towerSelect')
            towerButton.button.addEventListener("click", function(){
                console.log("tower button test!");
            })

            console.log("hover in")
        })
        this.tile.addEventListener("mouseleave", function(){
            selected = false
            carryTile.removeChild(selectedCylinder)
            towerButton.removeActionButton()
            console.log("hover out")
        })
    }
}