import Tower from './tower'
export default class StrongTower implements Behaviour{
    private tower:Tower

    constructor(tower:Tower){
        this.tower = tower
    }

    update() : void{
        this.tower.damage = 30
        this.tower.towerTop.setAttribute("src", "#tower-top-1-obj")
        this.tower.towerTop.setAttribute("mtl", "#tower-top-1-mtl")
    }
} 