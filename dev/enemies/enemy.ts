import EnemyInit from "./enemyInit"
import Observer from "../observer"
import Subject from "../subject";
import Ui from "../ui/ui";

export default abstract class Enemy implements Observer{

    abstract damage : number
    abstract life : number
    abstract speed : number
    protected enemy : HTMLElement
    private scale : number
    private scene : HTMLElement
    private ui : Subject
    private colors : Array<string> = [ "#00ff00", "#66ff99", "#99ff99", "#ccff99", "#ffff99", "#ffcc66", "#ff9933", "#ff3300", "#990000", "#000000"]

    constructor(scene:any, position:number[], path:[string,number,number][], ui:Subject) {
        this.ui = ui
        this.scene = scene
        this.scale = 0.1
        this.enemy = document.createElement("a-sphere")
        this.enemy.setAttribute("radius", "1.25")
        this.enemy.setAttribute("color", this.colors[0])
        this.enemy.setAttribute("scale", this.scale + " " + this.scale + " " + this.scale)
        this.enemy.setAttribute("position", position[0] + " " + position[1] + " " + position[2])
        this.scene.appendChild(this.enemy)
        this.ui.subscribe(this)
        
        console.log("enemy created")
    }

    abstract move() : void

    public notify() : void{
        this.takeDamage(10)
        console.log("new life = " + this.life)
    }

    public takeDamage(amount:number) : void{
        this.life -= amount
        this.updateColor()
    }

    public updateColor() : void{
        let newColor : string
        if(this.life <= 90 && this.life >= 81 ){ newColor = this.colors[1] } else
        if(this.life <= 80 && this.life >= 71 ){ newColor = this.colors[2] } else
        if(this.life <= 70 && this.life >= 61){ newColor = this.colors[3] } else
        if(this.life <= 60 && this.life >= 51){ newColor = this.colors[4] } else
        if(this.life <= 50 && this.life >= 41){ newColor = this.colors[5] } else
        if(this.life <= 40 && this.life >= 31){ newColor = this.colors[6] } else
        if(this.life <= 30 && this.life >= 21){ newColor = this.colors[7] } else
        if(this.life <= 20 && this.life >= 11){ newColor = this.colors[8] } else
        if(this.life <= 10){ newColor = this.colors[9] } 
        else{ newColor = this.colors[0] }
        console.log("new color: "+newColor)
        this.enemy.setAttribute("color", newColor)
    }

    public remove(enemies:Array<HTMLElement>) : void {
        console.log("remove enemy here")
        // console.log("enemies")
        // console.log(enemies)
        // let i = enemies.indexOf(this.enemy)
        // console.log("index: "+i)
        // enemies.splice(i, 1)
        // this.enemy.remove()
    }
}