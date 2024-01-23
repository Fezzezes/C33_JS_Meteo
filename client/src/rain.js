import { spriteList } from "./page-meteo";

export class Rain{

    constructor(rain, wind, temp){

        this.node = document.createElement("div");
        this.node.classList.add("rain")
        
        this.rain = rain;
        this.wind = wind;
        this.temp = temp;

        console.log("rain: "+this.rain);
        console.log("wind: "+this.wind);
        console.log("temp: "+this.temp);

        document.querySelector("#city").append(this.node)
    }

    tick()
    {
        spriteList.push(new Particule(this.temp, this.wind));
        return true;
    }
}

class Particule {
    constructor(temp, wind){

        this.node = document.createElement("div");
        this.wind = 0.5*wind;

        //test
        

        this.windVelocity = 0;
        if(temp < -2)
        {
            this.windVelocity = Math.random()*(this.wind);
            this.node.classList.add("snowDrop");  
        }
            
        else
            this.node.classList.add("rainDrop");
        
        this.x = (Math.random()*window.innerWidth-200);
        this.y = 0;
        this.node.style.left = this.x+"px";
        this.node.style.scale = Math.random()*1.5

        document.querySelector(".rain").append(this.node)
        this.speed = this.wind + 5;
    }

    tick (){
        
        let alive = true;

        this.y += this.speed;
        this.node.style.top = this.y+"px";
        
        this.wind += this.windVelocity;
        this.x += this.wind;
        this.node.style.left = this.x+"px";
        
    
  
        if(this.y > 600)
        {
            this.node.remove();
            alive = false;
        }

        return alive;
    }

}