export default class SnowFlake {
    constructor(wind){

        //cree une div enfant de city-view-window
        this.node = document.createElement("div");
        this.parent = document.querySelector("#city-view-window");
        this.parent.append(this.node);
        //classes pour le css
        this.node.classList.add("particule"); 
        this.node.classList.add("snowFlake"); 

        //le vent aura un effet sur la trajectoire des flocons
        this.wind = 0.5*wind;
        this.windVelocity = Math.random()*(this.wind);

        //les vents auront un impact sur la vitesse des flocons
        this.speed = 10+wind;
        
        //place les flocons sur l'axe des 'x'
        this.x = (Math.random()*window.innerWidth-200)+100;
        this.node.style.left = this.x+"px";
        //hauteur initial
        this.y = 0;
        //scale random
        this.node.style.scale = Math.random()*1.5;
    }

    tick (){
        
        let alive = true;

        //update le 'y'
        this.y += this.speed;
        this.node.style.top = this.y+"px";
        //update le 'x'
        this.wind += this.windVelocity;
        this.x += this.wind;
        this.node.style.left = this.x+"px";
        
        //tue l'animation si le flocons sort de sa zone
        if(this.y > 1200){
            this.node.remove();
            alive = false;
        }
        
        return alive;
    }

}