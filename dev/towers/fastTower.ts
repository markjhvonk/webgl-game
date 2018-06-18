import Tower from './tower'
export default class StrongTower implements Behaviour{
    private tower:Tower

    constructor(tower:Tower){
        this.tower = tower
    }

    update(){
        this.tower.speed = 2
        this.tower.towerTop.setAttribute("src", "#tower-top-3-obj")
        this.tower.towerTop.setAttribute("mtl", "#tower-top-3-mtl")
    }
} 