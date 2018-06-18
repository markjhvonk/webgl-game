import Tile from "../map/tile";
import DefaultEnemy from "./defaultEnemy";
import Ui from "../ui/ui";
import Enemy from "./enemy";

export default class enemyInit {

    private startPos : number[]
    private enemyStartPos : number[]
    private path : [string, number, number][]
    private scene : HTMLElement
    private enemyAmount : number
    private ui : Ui
    public enemies : Array<Enemy>

    constructor(scene : HTMLElement, ui:Ui){
        this.scene = scene
        this.enemyAmount = 10
        this.ui = ui

        this.startPos = [3, 0, -1]
        this.enemies = []
        this.enemyStartPos = [this.startPos[0]+0.5, this.startPos[1]+0.46, this.startPos[2]-0.5]

        this.path = [
            ["s", -1.5, 3.5],["w", 0.5, 3.5],["s", 0.5, 1.5],["e", 2.5, 1.5],["s", 2.5, 4.5],["w", 3.5, 4.5],["s", 3.5, 1.5],["e", 4.5, 1.5],["s", 4.5, 2.5],["end", 6.5, 2.5]
        ]

        let spawnTile = new Tile(scene, "path-ns-obj", "path-ns-mtl", this.startPos, 1)
        
        // let defaultEnemy = new DefaultEnemy(this.scene, this.enemyStartPos, this.path)
        this.createEnemies()
    }

    public createEnemies() : void {

        for(let i = 0; i < this.enemyAmount; i++){
            setTimeout(()=>{
                let defaultEnemy : DefaultEnemy = new DefaultEnemy(this.scene, [this.startPos[0]+0.5, this.startPos[1]+0.46, this.startPos[2]-0.5], this.path, this.ui)
                this.enemies.push(defaultEnemy)
                console.log(this.enemies)
            }, 2000 * i)
        }
        
    }

    public enemyMovement() : void {
        for (let enemy of this.enemies) {
            enemy.move()
        }       
    }
}