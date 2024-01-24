import { fetchData } from "./meteo-api";
import { spriteList } from "./page-meteo";
import { WeatherManager } from "./weatherManager";

export class Ville{

    constructor(){

        this.node = document.querySelector("#city");
        this.citySelect = document.querySelector("#city_select");
        this.cityName = document.querySelector("#city_name");
        this.weatherManager = new WeatherManager();
        spriteList.push(this.weatherManager);

        this.changeCity();
        this.citySelect.addEventListener("change", () => this.changeCity()) 
    }

    changeCity() {
        
        // console.log("removing background-"+this.cityName.innerText);
        // console.log("adding background-"+this.citySelect.value);
        console.log("leaving ["+this.cityName.innerText+"] and going to ["+this.citySelect.value+"]")
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
        this.weatherManager.setWeather(this.weatherData)        
        
        this.setBackground(this.weatherData.isDay == 0)
    }

    setBackground(isDay){

        if(this.citySelect.value == "quebec"){

            if(isDay)
                this.node.style.backgroundImage = "url('img/quebec_jour.png')"
            else
                this.node.style.backgroundImage = "url('img/quebec_nuit.png')"
        }
        else if(this.citySelect.value == "paris"){

            if(isDay)
                this.node.style.backgroundImage = "url('img/paris_nuit.png')"
            else
                this.node.style.backgroundImage = "url('img/paris_nuit.png')"
        } 
        else if(this.citySelect.value == "tokyo"){

            if(isDay)
                this.node.style.backgroundImage = "url('img/tokyo_nuit.png')"
            else
                this.node.style.backgroundImage = "url('img/tokyo_nuit.png')"
        }
    }


    tick()
    {
        console.log("ville")
    }
}