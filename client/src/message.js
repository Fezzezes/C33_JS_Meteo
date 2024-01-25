export default class Message{

    constructor(message, color){
        this.erreur = document.createElement("p");
        document.querySelector("#button-panel").append(this.erreur)
        this.erreur.id = "erreur-command"
        this.erreur.innerText = message;
        this.erreur.style.color = color;

        this.pause = false;
        this.opacity = 2;
        this.fade = 0.01;

        this.erreur.addEventListener("mouseenter",()=>{this.pause = true})
        this.erreur.addEventListener("mouseout",()=>{this.pause = false})

    }

    tick(){

        let alive = true;

        if(!this.pause){

            this.opacity -= this.fade;
            this.erreur.style.opacity = this.opacity;
        }

        
        if(this.opacity < 0)
        {
            alive = false;
            this.erreur.remove();
        }

        return alive;
    }
}