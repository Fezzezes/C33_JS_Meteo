import { loading, spriteList } from "./page-meteo";
import Particule from "./particule";


export class WeatherManager{

    constructor(weatherData){

        this.node = document.createElement("div");
        this.node.classList.add("weather")
        
        this.weatherData;

        
        // this.rain = 0;
        // this.wind = 0;
        // this.temp = 0;

        // document.querySelector("#city-view-window").prepend(this.node);
        this.statusWindow = document.querySelector("#weather-status-window");
        this.weatherText = document.createElement("p");

        this.statusWindow.append(this.weatherText);
        this.setWeather(weatherData)
        
        this.alive = true;
    }

    setWeather(weatherData){

        console.log(weatherData);
        this.weatherData = weatherData;

        this.rain = weatherData.rain;
        this.rain = 1;
        this.wind = weatherData.windSpeed10m;
        this.wind = 10
        this.temp = weatherData.temperature;
        console.log("rain: "+this.rain);
        console.log("wind: "+this.wind);
        console.log("temp: "+this.temp);

        this.changeTemp(this.temp)
    }

    changeTemp(temp){

        console.log("new temp: "+temp);
        this.temp = temp;
        document.querySelector("#celcius").innerText = temp +"°C"
        this.weatherText.innerText = "Il fait présentement "+temp+" degrées Celcius";
    }

    tick()
    {
        if(this.rain != 0 && !loading.alive)
            spriteList.push(new Particule(this.temp, this.wind));

            // this.rain = 0;

        return this.alive;
    }
}

