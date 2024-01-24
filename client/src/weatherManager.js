import { spriteList } from "./page-meteo";

export class WeatherManager{

    constructor(){

        this.node = document.createElement("div");
        this.node.classList.add("weather")
        
        this.weatherData;
        this.rain = 0;
        this.wind = 0;
        this.temp = 0;

        document.querySelector("#city").append(this.node)

        console.log(this);
        this.alive = true;
    }

    setWeather(weatherData){

        console.log(weatherData);
        this.weatherData = weatherData;

        this.rain = weatherData.rain;
        this.rain = 1;
        this.wind = weatherData.windSpeed10m;
        this.wind = 20
        this.temp = weatherData.temperature;
        console.log("rain: "+this.rain);
        console.log("wind: "+this.wind);
        console.log("temp: "+this.temp);

        document.querySelector("#rain_btn").checked = this.rain > 0;
        document.querySelector("#wind_btn").value = this.wind;
        document.querySelector("#temp_btn").value = this.temp;
    }

    // setWeather(rain, wind, temp){

    //     this.rain = rain;
    //     this.wind = wind;
    //     this.temp = temp;
    //     console.log("rain: "+this.rain);
    //     console.log("wind: "+this.wind);
    //     console.log("temp: "+this.temp);
    // }

    tick()
    {
        if(this.rain != 0)
            spriteList.push(new Particule(this.temp, this.wind));

        return this.alive;
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

        document.querySelector(".weather").append(this.node)
        this.speed = this.wind + 5;
    }

    tick (){
        
        let alive = true;

        this.y += this.speed;
        this.node.style.top = this.y+"px";
        
        this.wind += this.windVelocity;
        this.x += this.wind;
        this.node.style.left = this.x+"px";
        
        if(this.y > 700)
        {
            this.node.remove();
            alive = false;
        }

        return alive;
    }

}