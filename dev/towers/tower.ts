import actionButton from '../ui/actionButton'
import StrongTower from './strongTower'
import FastTower from './fastTower'
import Game from '../game'

export default class Tower {
    private towerContainer : HTMLElement
    private towerBase : HTMLElement
    private towerBody : HTMLElement
    public towerTop : HTMLElement
    public damage : number
    public speed : number
    private upgraded : boolean
    private strongUpgradeBtn! : actionButton
    private fastUpgradeBtn! : actionButton
    private tower!:Behaviour

    constructor(tile : HTMLElement, type : string, position : Array<number>, scale : number) {
        // set default damage & speed
        this.damage = 15
        this.speed = 1
        this.upgraded = false
        // tower container
        this.towerContainer = document.createElement("a-box")
        this.towerContainer.setAttribute("width", "1.1")
        this.towerContainer.setAttribute("height", "1.6")
        this.towerContainer.setAttribute("material", "side: double; color: #EF2D5E; transparent: true; opacity: 0" )
        this.towerContainer.setAttribute("position", position[0] + " " + position[1] + " " + position[2])
        // tower base
        this.towerBase = document.createElement("a-obj-model")
        this.towerBase.setAttribute("src", "#tower-base-1-obj")
        this.towerBase.setAttribute("mtl", "#tower-base-1-mtl")
        this.towerBase.setAttribute("scale", scale + " " + scale + " " + scale)
        this.towerBase.setAttribute("position", "-0.5 -0.6 0.5")
        this.towerContainer.appendChild(this.towerBase)
        // tower body
        this.towerBody = document.createElement("a-obj-model")
        this.towerBody.setAttribute("src", "#tower-body-1-obj")
        this.towerBody.setAttribute("mtl", "#tower-body-1-mtl")
        this.towerBody.setAttribute("scale", scale + " " + scale + " " + scale)
        this.towerBody.setAttribute("position", "-0.5 -0.2 0.5")
        this.towerContainer.appendChild(this.towerBody)
        // tower top
        this.towerTop = document.createElement("a-obj-model")
        this.towerTop.setAttribute("src", "#tower-top-2-obj")
        this.towerTop.setAttribute("mtl", "#tower-top-2-mtl")
        this.towerTop.setAttribute("scale", scale + " " + scale + " " + scale)
        this.towerTop.setAttribute("position", "-0.5 0.2 0.5")
        this.towerContainer.appendChild(this.towerTop)

        this.towerContainer.addEventListener("mouseenter", this.towerHoverIn.bind(this))
        this.towerContainer.addEventListener("mouseleave", this.towerHoverOut.bind(this))
        
        tile.appendChild(this.towerContainer)
        console.log("tower created")
    }

    private towerHoverIn() : void {
        if(!this.upgraded){
            this.strongUpgradeBtn = new actionButton('towerSelect')
            this.strongUpgradeBtn.changeImage("actionStrong.png")
            this.strongUpgradeBtn.button.addEventListener("click", () => this.upgrade(new StrongTower(this), 400))
            this.fastUpgradeBtn = new actionButton('towerSelect')
            this.fastUpgradeBtn.changeImage("actionFast.png")
            this.fastUpgradeBtn.button.addEventListener("click", ()=> this.upgrade(new FastTower(this), 400))
        }
    }

    private towerHoverOut() : void {
        if(!this.upgraded){
            this.strongUpgradeBtn.removeActionButton()
            this.fastUpgradeBtn.removeActionButton()
        }
    }

    private upgrade(tower:Behaviour, cost:number) :void{
        let ui = Game.getInstance().ui
        if(ui.coinsStatus.value > cost){
            this.tower = tower
            this.tower.update()
            ui.setCoins("subtract", cost)
            this.strongUpgradeBtn.removeActionButton()
            this.fastUpgradeBtn.removeActionButton()
            this.upgraded = true
        } else{
            ui.callBanner("Not enough coins!", 1000)
        }
    }
}