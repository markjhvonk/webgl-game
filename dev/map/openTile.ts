import Tile from './tile'
import actionButton from '../ui/actionButton'
import Tower from '../towers/tower'
import Game from "../game"
import Ui from '../ui/ui';

export default class OpenTile extends Tile {

    private scene! : HTMLElement
    private towerStatus : string = "open"
    private towerButton! : actionButton
    private x : number
    private y : number
    private z : number
    private selectedCylinder! : HTMLElement
    
    constructor(scene:HTMLElement, ui:Ui, src:string, mtl:string, position:Array<Number>, scale:number){
        super(scene, src, mtl, position, scale)

        // set base cooördinates
        this.x = 0.5
        this.y = 0.4
        this.z = -0.5

        // add event listeners
        this.tile.addEventListener("mouseenter", this.tileHoverIn.bind(this))
        this.tile.addEventListener("mouseleave", this.tileHoverOut.bind(this))
    }

    private createTower() : void {
        let ui = Game.getInstance().ui
        // ui.callBanner("Enemy intruder!", 1000)
        // ui.setHealth("subtract", 10)
        if(this.towerStatus === "open") {
            if(ui.coinsStatus.value > 200){
                ui.setCoins("subtract", 200)
                // remove cylinder and button just to make sure
                this.tile.removeChild(this.selectedCylinder)
                this.towerButton.removeActionButton()
                // create test tower
                let tower = new Tower(this.tile, 'regular', [0.5, 1, -0.5], 1)
                this.towerStatus = "filled"
                console.log("tower status #3: "+this.towerStatus)
            } else{
                ui.callBanner("Not enough coins!", 1000)
            }
        }
    }

    private tileHoverIn() : void {
        if(this.towerStatus === "open") {
            // add selected cylinder
            this.selectedCylinder = document.createElement("a-torus")
            this.selectedCylinder.setAttribute("color", "#ff0000")
            this.selectedCylinder.setAttribute("scale", "0.05 0.05 0.05")
            this.selectedCylinder.setAttribute("rotation", "90 0 0")
            this.selectedCylinder.setAttribute("position", this.x + " " + this.y + " "+ this.z)
            this.selectedCylinder.setAttribute("radius", "5")
            this.selectedCylinder.setAttribute("radiusTubular", "0.001")
            this.tile.appendChild(this.selectedCylinder)
            // add button
            this.towerButton = new actionButton('towerSelect')
            this.towerButton.changeImage("actionTower.png")
            this.towerButton.button.addEventListener("click", this.createTower.bind(this))
            console.log("hover in")
        }
    }

    private tileHoverOut() : void {
        if(this.towerStatus === "open") {
            // remove button and cylinder
            this.tile.removeChild(this.selectedCylinder)
            this.towerButton.removeActionButton()
            console.log("hover out")
        }
    }
}