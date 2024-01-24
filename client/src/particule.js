export default class Particule {
    constructor(temp, wind){

        this.node = document.createElement("div");
        this.parent = document.querySelector(".weather");
        this.meteoMain = document.querySelector("#meteo-main");
       
        this.parent.append(this.node);

        this.wind = 0.5*wind;
   
        this.node.classList.add("particule"); 

        this.windVelocity = 0;
        if(temp < -2)
        {
            this.windVelocity = Math.random()*(this.wind);
            //test -------------------
            this.windVelocity = 0;
            //test --------------------
            this.node.classList.add("snowDrop");  
        }
        else
            this.node.classList.add("rainDrop");
        
   
        this.x = (Math.random()*window.innerWidth-20);
        this.y = -400;

        this.node.style.left = this.x+"px";

        this.node.style.scale = Math.random()*1.5

        document.querySelector(".weather").append(this.node)
        this.speed = 5;
    }

    tick (){
        
        let alive = true;

        this.y += this.speed;
        console.log(this.y);
        this.node.style.top = this.y+"px";
        
        // this.wind += this.windVelocity;
        // this.x += this.wind;
        // this.node.style.left = this.x+"px";
        
        if(this.y > 700)
        {
            this.node.remove();
            alive = false;
        }

        return alive;
    }

}