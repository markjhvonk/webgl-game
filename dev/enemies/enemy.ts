import EnemyInit from "./enemyInit"
import Observer from "../observer"
import Ui from "../ui";

export default abstract class Enemy implements Observer{

    abstract damage : number
    abstract life : number
    abstract speed : number
    protected enemy : HTMLElement
    private scale : number
    private scene : any
    private ui : Ui

    constructor(scene:any, position:number[], path:[string,number,number][], ui:Ui) {
        this.ui = ui
        this.scene = scene
        this.scale = 0.1
        this.enemy = document.createElement("a-sphere")
        this.enemy.setAttribute("radius", "1.25")
        this.enemy.setAttribute("color", "#EF2D5E")
        this.enemy.setAttribute("scale", this.scale + " " + this.scale + " " + this.scale)
        this.enemy.setAttribute("position", position[0] + " " + position[1] + " " + position[2])
        this.scene.appendChild(this.enemy)
        this.ui.subscribe(this)
        
        console.log("enemy created")
    }

    abstract move(enemies:Array<any>) : void

    notify(){
        this.life -= 10
        console.log("new life = " + this.life)
    }

    public remove(enemies:Array<any>) : void {
        console.log("remove enemy here")
        // console.log("enemies")
        // console.log(enemies)
        // let i = enemies.indexOf(this.enemy)
        // console.log("index: "+i)
        // enemies.splice(i, 1)
        // this.enemy.remove()
    }
}