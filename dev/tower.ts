import actionButton from './actionButton'
import StrongTower from './strongTower'
import FastTower from './fastTower'
import Game from './game'

export default class Tower {
    private towerContainer : any
    private towerBase : any
    private towerBody : any
    public towerTop : any
    public damage : number
    public speed : number
    private upgraded : boolean
    private strongTowerUpgradeButton : any
    private fastTowerUpgradeButton : any
    private tower!:Behaviour

    constructor(tile : any, type : string, position : Array<number>, scale : number) {
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
            this.strongTowerUpgradeButton = new actionButton('towerSelect')
            this.strongTowerUpgradeButton.changeImage("actionStrong.png")
            this.strongTowerUpgradeButton.button.addEventListener("click", this.strongTowerUpgrade.bind(this))
            this.fastTowerUpgradeButton = new actionButton('towerSelect')
            this.fastTowerUpgradeButton.changeImage("actionFast.png")
            this.fastTowerUpgradeButton.button.addEventListener("click", this.fastTowerUpgrade.bind(this))
        }
    }

    private towerHoverOut() : void {
        if(!this.upgraded){
            this.strongTowerUpgradeButton.removeActionButton()
            this.fastTowerUpgradeButton.removeActionButton()
        }
    }

    private strongTowerUpgrade() : void{
        let ui = Game.getInstance().ui
        if(ui.coinsStatus.value > 400){
            // setting up behavior
            this.tower = new StrongTower(this)
            this.tower.update()
            ui.setCoins("subtract", 400)
            this.strongTowerUpgradeButton.removeActionButton()
            this.fastTowerUpgradeButton.removeActionButton()
            this.upgraded = true
        } else{
            ui.callBanner("Not enough coins!", 1000)
        }
    }
    private fastTowerUpgrade() : void{
        let ui = Game.getInstance().ui
        if(ui.coinsStatus.value > 400){
            // setting up behavior
            this.tower = new FastTower(this)
            this.tower.update()
            ui.setCoins("subtract", 400)
            this.strongTowerUpgradeButton.removeActionButton()
            this.fastTowerUpgradeButton.removeActionButton()
            this.upgraded = true
        } else {
            ui.callBanner("Not enough coins!", 1000)
        }
    }
}