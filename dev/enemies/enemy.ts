export abstract class Enemy {

    abstract damage : number
    abstract life : number
    abstract speed : number
    protected enemy : HTMLElement
    private scale : number

    constructor(scene:any, position:number[], path:[string,number,number][]) {
        this.scale = 0.1
        this.enemy = document.createElement("a-sphere")
        this.enemy.setAttribute("radius", "1.25")
        this.enemy.setAttribute("color", "#EF2D5E")
        this.enemy.setAttribute("scale", this.scale + " " + this.scale + " " + this.scale)
        this.enemy.setAttribute("position", position[0] + " " + position[1] + " " + position[2])
        scene.appendChild(this.enemy)
        console.log("enemy created")
    }

    abstract move() : void
}