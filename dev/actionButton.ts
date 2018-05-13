export default class actionButton {

    private actionPanel : any
    public button : any
    private name : string

    constructor(name : string) {
        this.name = name
        this.actionPanel = document.getElementsByTagName('action-panel')
        console.log(this.actionPanel[0]);
        

        this.button = document.createElement('action-button')
        this.button.id = name

        this.actionPanel[0].appendChild(this.button)
    }

    private removeActionButton() : void {
        this.actionPanel[0].removeChild(document.getElementById(this.name))
    }
}