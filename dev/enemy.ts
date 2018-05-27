export abstract class Enemy {

    abstract damage : number;
    abstract life : number;
    abstract speed : number;
    protected enemy : HTMLElement;

    constructor(tile:any, sort:String, scale:number, position:Array<number>) {
        this.enemy = document.createElement("a-obj-model")
        this.enemy.setAttribute("src", "#"+sort)
        this.enemy.setAttribute("mtl", "#"+sort)
        this.enemy.setAttribute("scale", scale + " " + scale + " " + scale)
        this.enemy.setAttribute("position", position[0] + " " + position[1] + " " + position[2])
        tile.appendChild(this.enemy)
    }

    abstract move() : void
}