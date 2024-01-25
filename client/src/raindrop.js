export default class RainDrop {
    constructor(){

        //cree un div enfant de city-view-window
        this.node = document.createElement("div");
        this.parent = document.querySelector("#city-view-window");
        this.parent.append(this.node);
        //classes pour le css
        this.node.classList.add("particule"); 
        this.node.classList.add("rainDrop");

        //le vent aura un impact sur la direction de l'animation
        //place la goutte sur l'axe des 'x' sur la longueur de l'écran +- 100 px
        this.x = (Math.random()*window.innerWidth-200)+100;
        this.node.style.left = this.x+"px";
        //place la goutte en hauteur
        this.y = -20;
        //vitesse de la goutte
        this.speed = 20;
    }

    tick (){
        
        let alive = true;

        //incremente la vitesse à la position y
        this.y += this.speed;
        this.node.style.top = this.y+"px";
    
        //si la goutte sort de sa limite, tue l'animation
        if(this.y > 1200){
            this.node.remove();
            alive = false;
        }

        return alive;
    }

}