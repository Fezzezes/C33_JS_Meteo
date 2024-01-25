import { loading, spriteList } from "./page-meteo";
import RainDrop from "./raindrop";
import SnowFlake from "./snowflake";


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

        // document.querySelector("#city-view-window").prepend(this.node);
        this.setWeather(weatherData)
        this.alive = true;
    }

    setWeather(weatherData){

        this.rain = weatherData.rain;
        this.wind = weatherData.windSpeed10m;
        this.snow = weatherData.snowfall;
        this.changeTemp(weatherData.temperature);
        
        console.log("rain: "+this.rain);
        console.log("wind: "+this.wind);
        console.log("temp: "+this.snow);
        console.log("temp: "+this.temp);
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
            string+="Il y a présentement de la pluie. "

        if(this.snow > 0)
            string+="Il y a présentement de la neige. "
        
        return string;
    }

    tick()
    {
        if(!loading.alive)
        {
            if(this.rain > 0)
                spriteList.push(new RainDrop(this.temp, this.wind));

            if(this.snow > 0)
                spriteList.push(new SnowFlake(this.temp, this.wind));
        }

        return this.alive;
    }
}

