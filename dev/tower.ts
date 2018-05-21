export default class Tower {
    public towerBase :any
    public towerBody :any
    public towerTop :any
    
    constructor(tile : any, type : string, position : Array<number>, scale : number) {
        // tower base
        this.towerBase = document.createElement("a-obj-model")
        this.towerBase.setAttribute("src", "#tower-base-1-obj")
        this.towerBase.setAttribute("mtl", "#tower-base-1-mtl")
        this.towerBase.setAttribute("scale", scale + " " + scale + " " + scale)
        this.towerBase.setAttribute("position", position[0] + " " + position[1] + " " + position[2])
        tile.appendChild(this.towerBase)
        // tower body
        this.towerBody = document.createElement("a-obj-model")
        this.towerBody.setAttribute("src", "#tower-body-1-obj")
        this.towerBody.setAttribute("mtl", "#tower-body-1-mtl")
        this.towerBody.setAttribute("scale", scale + " " + scale + " " + scale)
        this.towerBody.setAttribute("position", position[0] + " " + (position[1] + 0.4) + " " + position[2])
        tile.appendChild(this.towerBody)
        // tower top
        this.towerTop = document.createElement("a-obj-model")
        this.towerTop.setAttribute("src", "#tower-top-1-obj")
        this.towerTop.setAttribute("mtl", "#tower-top-1-mtl")
        this.towerTop.setAttribute("scale", scale + " " + scale + " " + scale)
        this.towerTop.setAttribute("position", position[0] + " " + (position[1] + 0.8) + " " + position[2])
        tile.appendChild(this.towerTop)
        console.log("tower created")
    }
}