export default class Satellite{

    constructor(){
       
        //cree une div.satellite enfant du body
        this.node = document.createElement("div");
        this.node.classList.add("satellite");
        this.parent = document.querySelector("body")
        this.parent.append(this.node)

        //parametre pour la trajectoire du satellite
        this.speedX = 13;
        this.speedY = 13;
        this.courbe = -0.1;
        this.x = -100;
        this.y = -100;

        //position initiale
        this.node.style.left = this.x+"px";
        this.node.style.bottom = this.y+"px";

        this.alive = true;
    }

    tick(){

        //ajoute la vitesse à la position 'x'
        this.x += this.speedX;
        this.node.style.left = this.x+"px";

        //ajoute la courbe à la vitesse pour faire tourne le satellite
        this.speedY+=this.courbe
        this.y += this.speedY;
        this.node.style.bottom = this.y+"px";
 
        //tue l'animation si le satellite sort de sa zone
        if(this.x > 1900 || this.y > 800){
            this.node.remove();
            this.alive = false;
        }
            
        return this.alive;
    }
}