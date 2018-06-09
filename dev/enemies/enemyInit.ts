import Tile from "../tile";
import DefaultEnemy from "./defaultEnemy";

export default class enemyInit {

    private startPos : number[]
    private enemyStartPos : number[]
    private path : [string, number][]
    private scene : any
    private enemyAmount : number
    private enemyCounter : number
    public enemies : Array<DefaultEnemy>

    constructor(scene : any){
        this.scene = scene
        this.enemyAmount = 10
        this.enemyCounter = 0
        this.startPos = [3, 0, -1]
        this.enemies = []
        this.enemyStartPos = [this.startPos[0]+0.5, this.startPos[1]+0.46, this.startPos[2]-0.5]

        this.path = [
            ["s", 1],["w", 2],["s", 2],["e", 3],["s", 1],["w", 3],["s", 1],["w", 1],["s", 2]
        ]

        let spawnTile = new Tile(scene, "path-ns-obj", "path-ns-mtl", [3, 0, -1], 1)
        
        // let defaultEnemy = new DefaultEnemy(this.scene, this.enemyStartPos, this.path)
        this.createEnemies()
    }

    private createEnemies() : void {
        for(let i = 0; i < this.enemyAmount; i++){
            setTimeout(() => {
                let defaultEnemy = new DefaultEnemy(this.scene, this.enemyStartPos, this.path)
                this.enemies.push(defaultEnemy)
                this.enemyCounter++
                console.log(this.enemies)
            }, i * 1000)
        }

    }

    public enemyMovement() : void {
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].move();
        }
    }
}