export default class actionButton {

    private actionPanel : any
    public button : HTMLElement
    private name : string

    constructor(name : string) {
        this.name = name
        this.actionPanel = document.getElementsByTagName('action-panel')
        console.log(this.actionPanel[0]);
        

        this.button = document.createElement('action-button')
        this.button.id = name

        this.actionPanel[0].appendChild(this.button)
    }

    public removeActionButton() : void {
        this.actionPanel[0].removeChild(document.getElementById(this.name))
    }

    public changeImage(image:string) : void {
        this.button.style.backgroundImage = "url(img/ui/"+image+")"
    }
}