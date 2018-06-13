import actionButton from './actionButton'

export default class Tower {
    private towerContainer : any
    private towerBase : any
    private towerBody : any
    private towerTop : any
    private towerUpgradeButton1 : any
    private towerUpgradeButton2 : any
    
    constructor(tile : any, type : string, position : Array<number>, scale : number) {
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
        this.towerUpgradeButton1 = new actionButton('towerSelect')
        this.towerUpgradeButton1.button.addEventListener("click", this.towerUpgrade1.bind(this))
        this.towerUpgradeButton2 = new actionButton('towerSelect')
        this.towerUpgradeButton2.button.addEventListener("click", this.towerUpgrade2.bind(this))
    }

    private towerHoverOut() : void {
        this.towerUpgradeButton1.removeActionButton()
        this.towerUpgradeButton2.removeActionButton()
    }

    private towerUpgrade1() : void{
        this.towerTop.setAttribute("src", "#tower-top-1-obj")
        this.towerTop.setAttribute("mtl", "#tower-top-1-mtl")
        // this.towerContainer.removeChild(this.towerTop)
    }
    private towerUpgrade2() : void{
        this.towerTop.setAttribute("src", "#tower-top-3-obj")
        this.towerTop.setAttribute("mtl", "#tower-top-3-mtl")
        // this.towerContainer.removeChild(this.towerTop)
    }
}