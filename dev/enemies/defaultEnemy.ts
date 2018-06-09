import { Enemy } from "./enemy";

export default class defaultEnemy extends Enemy {
    public damage : number
    public life : number
    public speed : number
    private path : [string,number,number][]
    private position : number[]
    private movementCounter : number
    private pathNum : number

    constructor(scene : any, position:number[], path:[string,number,number][]) {
        super(scene, position, path)
        this.damage = 10
        this.life = 100
        this.speed = 0.01
        this.path = path
        this.position = position
        this.movementCounter = 0
        this.pathNum = 0
    }

    public move() : void {
        // console.log("enemy moving!!!")

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
                    console.log("next point!")
                    console.log("pathNum before: "+this.pathNum)
                    this.pathNum++
                    console.log("pathNum after: "+this.pathNum)
            }
        }
    }
}