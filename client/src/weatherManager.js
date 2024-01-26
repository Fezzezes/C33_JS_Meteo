import { spriteList } from "./page-meteo";
import LoadingScreen from "./loading";
import RainDrop from "./raindrop";
import SnowFlake from "./snowflake";
import { currentCity } from "./page-meteo";

export class WeatherManager{

    constructor(weatherData){
        
        //set la météo
        this.setWeather(weatherData)
        this.alive = true;
    }

    setWeather(weatherData){

        console.log(weatherData)
        //set la météo
        this.rain = weatherData.rain;
        this.snow = weatherData.snowfall;
        this.daytime =weatherData.isDay;
        this.temp = weatherData.temperature
        this.changeWind(weatherData.windSpeed10m);
        //set le background de la ville
        currentCity.setBackground(this.daytime);
        
        // console.log("rain: "+this.rain);
        // console.log("wind: "+this.wind);
        // console.log("snow: "+this.snow);
        // console.log("temp: "+this.temp);
        // console.log("day: "+this.daytime)
    }

    changeWind(wind){
        //le vent ne descend pas sous '0'
        if(wind < 0)
            wind = 0;

        //update le vent
        this.wind = wind;
        //update la force du vent dans le panneau de controle
        document.querySelector("#celcius").innerText =" wind:"+ wind;
    }
    

    getWeatherString(){

        //retourne un string décrivant la météo actuelle
        let string = "Il fait présentement "+this.temp+" degrées Celcius dans la ville de "+currentCity.cityName+". Les vents soufflent à une force de "+this.wind+"ms. ";
        
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
        //trigger si il n'y a pas de loadingScreen dans sprite list
        if(spriteList.find(x => x instanceof LoadingScreen) == null)
        {
            //animation de pluie
            if(this.rain > 0)
                spriteList.push(new RainDrop());
            //animation de neige
            if(this.snow > 0)
                spriteList.push(new SnowFlake(this.wind));
        }

        return this.alive;
    }
}

