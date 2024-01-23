import { fetchData } from "./meteo-api";
import { spriteList } from "./page-meteo";
import { Rain } from "./rain";

export class Ville{

    constructor(){

        this.node = document.querySelector("#city");
        this.citySelect = document.querySelector("#city_select");
        this.cityName = document.querySelector("#city_name");
        this.weatherData;
        this.isRaining = false;
        this.isDay = false;
        this.windy = false;

        this.changeCity();
        this.citySelect.addEventListener("change", () => this.changeCity()) 
    }

    changeCity() {
        
        // console.log("removing background-"+this.cityName.innerText);
        // console.log("adding background-"+this.citySelect.value);
        this.node.classList.remove("background-"+this.cityName.innerText)
        this.node.classList.add("background-"+this.citySelect.value);
        this.cityName.innerText = this.citySelect.value;
        
        this.updateWeather();
        
    }

    async updateWeather(){

        let lat;
        let long;

        if(this.citySelect.value == "quebec"){
            lat  = 46.8131;
            long = 71.2075;
        }
        else if(this.citySelect.value == "paris"){
            lat  = 48.85661;
            long = 71.2075;
        } 
        else if(this.citySelect.value == "tokyo"){
            lat  = 35.6764;
            long = 139.6500;
        }

        this.weatherData = await fetchData(lat, long);
        console.log(this.weatherData);
        
        if(this.weatherData.rain == 0){
            console.log("it's raining!!!");
            spriteList.push(new Rain(this.weatherData.rain, this.weatherData.windSpeed10m, this.weatherData.temperature));
        }

    }

    tick()
    {
        console.log("ville")
    }
}