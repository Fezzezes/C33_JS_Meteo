import { loading, spriteList } from "./page-meteo";
import RainDrop from "./raindrop";
import SnowFlake from "./snowflake";
import { currentCity } from "./page-meteo";

export class WeatherManager{

    constructor(weatherData){

        this.node = document.createElement("div");
        this.node.classList.add("weather")
        
        console.log(weatherData);
        this.weatherData = weatherData;

        
        this.rain = 0;
        this.snow = 0;
        this.wind = 0;
        this.temp = 0;
        this.daytime = 0;

        // document.querySelector("#city-view-window").prepend(this.node);
        this.setWeather(weatherData)
        this.alive = true;
    }

    setWeather(weatherData){

        this.rain = weatherData.rain;
        this.wind = weatherData.windSpeed10m;
        this.snow = weatherData.snowfall;
        this.daytime =weatherData.isDay;
        this.daytime = 1;
        currentCity.setBackground(this.daytime);
        this.changeTemp(weatherData.temperature);
        
        
        console.log("rain: "+this.rain);
        console.log("wind: "+this.wind);
        console.log("snow: "+this.snow);
        console.log("temp: "+this.temp);
        console.log("day: "+this.daytime)
    }

    changeTemp(temp){

        console.log("new temp: "+temp);
        this.temp = temp;
        document.querySelector("#celcius").innerText = temp +"°C"
    }
    

    getWeatherString(){

        //retourne un string décrivant la météo actuelle
        let string = "Il fait présentement "+this.temp+" degrées Celcius. Les vents soufflent à une force de "+this.wind+". ";

        if(this.rain > 0)
            string+="Il y a présentement de la pluie. ";

        if(this.snow > 0)
            string+="Il y a présentement de la neige. ";
        
        if(this.daytime > 0)
            string+="C'est la nuit";

        return string;
    }

    tick()
    {
        //trigger après le loading animation
        if(!loading.alive)
        {
            if(this.rain > 0)
                spriteList.push(new RainDrop(this.wind));

            if(this.snow > 0)
                spriteList.push(new SnowFlake(this.wind));

        }

        return this.alive;
    }
}

