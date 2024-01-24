export default class Particule {
    constructor(temp, wind){
        console.log("snow");
        this.node = document.createElement("div");
        this.parent = document.querySelector("#city-view-window");
        
       
        this.parent.prepend(this.node);

        this.wind = 0.5*wind;
   
        this.node.classList.add("particule"); 

        if(temp < -2)
        {
            this.windVelocity = Math.random()*(this.wind);

            this.node.classList.add("snowDrop");  
        }
        else
            this.node.classList.add("rainDrop");
        
   
        this.x = (Math.random()*window.innerWidth-20);
        this.y = 0;
        

        this.node.style.left = this.x+"px";

        // this.node.style.scale = Math.random()*1.5;

        
        this.speed = 10;
    }

    tick (){
        
        let alive = true;

        this.y += this.speed;
        // console.log(this.y);
        this.node.style.top = this.y+"px";
        
        this.wind += this.windVelocity;
        this.x += this.wind;

        this.node.style.left = this.x+"px";
        
        if(this.y > 1200)
        {
            this.node.remove();
            alive = false;
        }

        return alive;
    }

}