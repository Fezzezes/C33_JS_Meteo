export default class RainDrop {
    constructor(wind){

        this.node = document.createElement("div");
        this.parent = document.querySelector("#city-view-window");
        this.parent.append(this.node);

        this.wind = 0.5*wind;
   
        this.node.classList.add("particule"); 
        this.node.classList.add("rainDrop");
        
   
        this.x = (Math.random()*window.innerWidth-20);
        this.y = -20;
        
        this.node.style.left = this.x+"px";
        this.speed = 20;
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