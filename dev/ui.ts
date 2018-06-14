import Subject from "./subject"
import Observer from "./observer"

export default class Ui implements Subject{

    public scoreStatus : any
    public coinsStatus : any
    private actionPanel : any
    private health : any
    private healthbarStatus : any
    public observers:Observer[] = []

    constructor() {
        
        // menu button
        let menu = document.createElement('menu')
        document.body.appendChild(menu)
        menu.addEventListener("click", ()=>{ this.setStuff(2500, 2500) })

        // score
        let score = document.createElement('score')
        let scoreStar = document.createElement('score-star')
        this.scoreStatus = document.createElement('score-status')
        this.scoreStatus.innerHTML = "0"
        this.scoreStatus.value = 0
        score.appendChild(scoreStar)
        score.appendChild(this.scoreStatus)
        document.body.appendChild(score)

        // action panel
        this.actionPanel = document.createElement('action-panel')
        document.body.appendChild(this.actionPanel)

        // coins
        let coins = document.createElement('coins')
        this.coinsStatus = document.createElement('coins-status')
        this.coinsStatus.innerHTML = "0"
        this.coinsStatus.value = 0
        let coinsCoin = document.createElement('coins-coin')
        coins.appendChild(this.coinsStatus)
        coins.appendChild(coinsCoin)
        document.body.appendChild(coins)

        // healthbar
        let healthbar = document.createElement('healthbar')
        let bar = document.createElement('bar')
        this.health = document.createElement('health')
        this.health.style.height = "100%"
        this.healthbarStatus = document.createElement('healthbar-status')
        this.healthbarStatus.innerHTML = "100/100"
        this.healthbarStatus.value = 100
        bar.appendChild(this.health)
        healthbar.appendChild(bar)
        healthbar.appendChild(this.healthbarStatus)
        document.body.appendChild(healthbar)

        // special
        let specialButton = document.createElement('special-button')
        specialButton.addEventListener("click", ()=>{
            for(const observer of this.observers){
                observer.notify()
            }
        })
        document.body.appendChild(specialButton)

    }

    private callBanner(message : string, duration : number) : void {
        let banner = document.createElement('banner')
        let bannerMessage = document.createElement('banner-message')
        bannerMessage.innerHTML = message;
        banner.appendChild(bannerMessage)
        document.body.appendChild(banner)

        setTimeout(function(){ 
            document.body.removeChild(banner)
        }, duration);
    }

    private setStuff(score : number, coins : number) : void {
        this.setScore("add", score)
        this.setCoins("add", coins)
    }

    private setScore(operation : string, value : number) : void {
        let newValue = this.valueOperator(operation, this.scoreStatus.value, value)
        this.scoreStatus.innerHTML = newValue
        this.scoreStatus.value = newValue
    }

    private setCoins(operation :string, value : number) : void {
        let newValue = this.valueOperator(operation, this.coinsStatus.value, value)
        this.coinsStatus.innerHTML = newValue
        this.coinsStatus.value = newValue
    }

    private setHealth(operation :string, value : number) : void {
        let newValue = this.valueOperator(operation, this.healthbarStatus.value, value)
        this.health.style.height = newValue + "%"
        this.healthbarStatus.value = newValue
        this.healthbarStatus.innerHTML = Math.ceil(newValue) + "/100"
    }

    private valueOperator(operation : string, currentValue : number, value: number) : number {
        let newValue : number = 0
        switch(operation) {
            case "add":
                newValue = currentValue + value
                break
            case "subtract":
                newValue = currentValue - value
                break
            default:
                console.log("inavlid operation")
                break
        }
        return newValue
    }

    public subscribe(o:Observer):void {
        this.observers.push(o)
    }
    public unsubscribe(o:Observer):void {
        // remove o from this.observers
    }
}