import { Enemy } from "./enemy";

export default class defaultEnemy extends Enemy {
    public damage : number
    public life : number
    public speed : number
    private path : [string,number][]
    private position : number[]

    constructor(scene : any, position:number[], path:[string,number][]) {
        super(scene, position, path)
        this.damage = 10
        this.life = 100
        this.speed = 20
        this.path = path
        this.position = position
    }

    public move() : void {
        console.log("enemy moving!!!")
        let moving = false
        // while(this.position[2] < (this.path[0][1] - 0.5)){
        //     this.position[2] += 0.0001
        //     this.enemy.setAttribute("position", this.position[0] + " " + this.position[1] + " " + this.position[2])
        //     console.log("enemy pos: "+this.position[2]+" point pos: "+this.path[0][1])
        // }
        // for(let i = 0; i < this.path.length; i++){
        //     let direction = this.path[i]
        //     let counter = 0
            
        //     if(direction[0] == "s"){
        //         while(counter != (direction[1] - 0.5)){
        //             console.log("moving south!")
        //             this.position[2] += 0.001
        //             this.enemy.setAttribute("position", this.position[0] + " " + this.position[1] + " " + this.position[2])
        //             counter += 0.001
        //         }
        //     }
            // else if(direction[0] == "e"){
            //     while(this.position[0] != direction[1]){
            //         console.log("moving east!")
            //         this.position[0] += 0.001
            //         this.enemy.setAttribute("position", this.position[0] + " " + this.position[1] + " " + this.position[2])
            //     }
            // } else if(direction[0] == "w"){
            //     while(this.position[0] != direction[1]){
            //         console.log("moving west!")
            //         this.position[0] -= 0.001
            //         this.enemy.setAttribute("position", this.position[0] + " " + this.position[1] + " " + this.position[2])
            //     }
            // }
        // }
    }
}