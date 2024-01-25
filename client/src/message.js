export default class Message{

    constructor(message, color){
        //crée un p enfant de #button-panel
        this.erreur = document.createElement("p");
        document.querySelector("#button-panel").append(this.erreur)

        //set l'id, la couleur et le message
        this.erreur.id = "erreur-command"
        this.erreur.innerText = message;
        this.erreur.style.color = color;

        //set les paramètres pour l'animation
        this.pause = false;
        this.opacity = 2;
        this.fade = 0.01;

        //set des listenener pour arreter ou continuer le fade
        this.erreur.addEventListener("mouseenter",()=>{this.pause = true})
        this.erreur.addEventListener("mouseout",()=>{this.pause = false})

    }

    tick(){

        let alive = true;
        //pas d'animation lorsqu'on est en pause
        if(!this.pause){
            //sinon, on diminue l'opacité
            this.opacity -= this.fade;
            this.erreur.style.opacity = this.opacity;
        }

        //si l'opacité atteint '0', tué l'animation
        if(this.opacity < 0){
            alive = false;
            this.erreur.remove();
        }
        return alive;
    }
}