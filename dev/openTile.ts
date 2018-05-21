import Tile from './tile'
import actionButton from './actionButton'
import tower from './tower'
import Tower from './tower';

export default class OpenTile extends Tile {

    private scene : any
    private towerStatus : string = "open"
    private towerButton : any
    private x : number
    private y : number
    private z : number
    private selectedCylinder : any

    // public tile : any
    constructor(scene : any, ui : any, src : string, mtl : string, position : Array<Number>, scale : Number){
        super(scene, src, mtl, position, scale)

        // set base cooördinates
        this.x = 0.5
        this.y = 0.4
        this.z = -0.5

        // this.towerStatus = "open"
        this.tile.addEventListener("mouseenter", this.tileHoverIn.bind(this))
        this.tile.addEventListener("mouseleave", this.tileHoverOut.bind(this))
        
        console.log("tower status #4: "+this.towerStatus)
    }

    createTower() : void {
        console.log("tower button test!");
        console.log("tower status #2.5: "+this.towerStatus)
        this.tile.removeEventListener("mouseenter", this.tileHoverIn.bind(this))
        // this.tile.removeEventListener("mouseleave", this.tileHoverOut.bind(this))
        // create test tower
        let tower = new Tower(this.tile, 'regular', [0, this.y, 0], 1)
        this.towerStatus = "filled"
        console.log("tower status #3: "+this.towerStatus)
    }

    tileHoverIn() : void {
        // add selected cylinder
        this.selectedCylinder = document.createElement("a-torus")
        this.selectedCylinder.setAttribute("color", "#ff0000")
        this.selectedCylinder.setAttribute("scale", "0.05 0.05 0.05")
        this.selectedCylinder.setAttribute("rotation", "90 0 0")
        this.selectedCylinder.setAttribute("position", this.x + " " + this.y + " "+ this.z)
        this.selectedCylinder.setAttribute("radius", "5")
        this.selectedCylinder.setAttribute("radiusTubular", "0.001")
        this.tile.appendChild(this.selectedCylinder)

        this.towerButton = new actionButton('towerSelect')
        this.towerButton.button.addEventListener("click", this.createTower.bind(this))
        console.log("hover in")
    }

    tileHoverOut() : void {
        this.tile.removeChild(this.selectedCylinder)
        this.towerButton.removeActionButton()
        console.log("hover out")
    }
}