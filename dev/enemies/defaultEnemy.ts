import Enemy from "./enemy";
import Ui from "../ui";
import Game from "../game";

export default class defaultEnemy extends Enemy {
    public damage : number
    public life : number
    public speed : number
    private path : [string,number,number][]
    private position : number[]
    private movementCounter : number
    private pathNum : number
    private moving : boolean

    constructor(scene : any, position:number[], path:[string,number,number][], ui:Ui) {
        super(scene, position, path, ui)
        this.damage = 10
        this.life = 100
        this.speed = 0.01
        this.path = path
        this.position = position
        this.movementCounter = 0
        this.pathNum = 0
        this.moving = true
    }

    public move(enemies:Array<any>) : void {
        // console.log("enemy moving!!!")
        // console.log("Enemy, node: " + this.enemy);
        if(this.moving){
            if(this.path[this.pathNum][0] == "s"){
                this.position[2] += this.speed
            } else if(this.path[this.pathNum][0] == "w"){
                this.position[0] -= this.speed
            } else if(this.path[this.pathNum][0] == "e"){
                this.position[0] += this.speed
            }
    
            this.enemy.setAttribute("position", this.position[0] + " " + this.position[1] + " " + this.position[2])
    
            if(this.pathNum != (this.path.length - 1)) {
                if( Number(this.path[(this.pathNum + 1)][1]) === Number(this.position[2].toFixed(1)) && 
                    Number(this.path[(this.pathNum + 1)][2]) === Number(this.position[0].toFixed(1))){
                        this.pathNum++
                }
            } else {
                let ui = Game.getInstance().ui
                ui.callBanner("Enemy intruder!", 1000)
                ui.setHealth("subtract", 10)
                console.log(ui)
                this.remove(enemies)
                this.moving = false
            }
        }
    }
}