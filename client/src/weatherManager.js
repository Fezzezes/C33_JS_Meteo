import { spriteList } from "./page-meteo";
import Particule from "./particule";

export class WeatherManager{

    constructor(weatherData){

        this.node = document.createElement("div");
        this.node.classList.add("weather")
        
        this.weatherData;

        this.setWeather(weatherData)
        // this.rain = 0;
        // this.wind = 0;
        // this.temp = 0;

        document.querySelector("#city-view-window").prepend(this.node);
        this.statusWindow = document.querySelector("#weather-status-window");
        this.weatherText = document.createElement("p");
        this.weatherText.innerText = "Il fait présentement "+this.temp+" degrées Celcius";
        this.statusWindow.append(this.weatherText);
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

    tick()
    {
        if(this.rain != 0)
            spriteList.push(new Particule(this.temp, this.wind));

             this.rain = 0;

        return this.alive;
    }
}

