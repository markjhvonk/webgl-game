export default class Ui {
    constructor() {
        console.log("make ui")
        // menu button
        let menu = document.createElement('menu')
        document.body.appendChild(menu)

        // banner
        let banner = document.createElement('banner')
        let bannerMessage = document.createElement('banner-message')
        bannerMessage.innerHTML = "test";
        banner.appendChild(bannerMessage)
        document.body.appendChild(banner)

        // score
        let score = document.createElement('score')
        let scoreStar = document.createElement('score-star')
        let scoreStatus = document.createElement('score-status')
        scoreStatus.innerHTML = "2600"
        score.appendChild(scoreStar)
        score.appendChild(scoreStatus)
        document.body.appendChild(score)

        // action panel
        let actionPanel = document.createElement('action-panel')
        let actionButton1 = document.createElement('action-button')
        actionPanel.appendChild(actionButton1)
        let actionButton2 = document.createElement('action-button')
        actionPanel.appendChild(actionButton2)
        let actionButton3 = document.createElement('action-button')
        actionPanel.appendChild(actionButton3)
        document.body.appendChild(actionPanel)

        // coins
        let coins = document.createElement('coins')
        let coinsStatus = document.createElement('coins-status')
        coinsStatus.innerHTML = "355"
        let coinsCoin = document.createElement('coins-coin')
        coins.appendChild(coinsStatus)
        coins.appendChild(coinsCoin)
        document.body.appendChild(coins)

        // healthbar
        let healthbar = document.createElement('healthbar')
        let bar = document.createElement('bar')
        let health = document.createElement('health')
        health.style.height = "20%"
        let healthbarStatus = document.createElement('healthbar-status')
        healthbarStatus.innerHTML = "20/100"
        bar.appendChild(health)
        healthbar.appendChild(bar)
        healthbar.appendChild(healthbarStatus)
        document.body.appendChild(healthbar)
        
    }
}