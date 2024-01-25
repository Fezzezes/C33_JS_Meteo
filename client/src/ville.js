import { fetchData } from "./meteo-api";
import { spriteList, startLoadingScreen } from "./page-meteo";
import { WeatherManager } from "./weatherManager";

export class Ville{

    constructor(city){

        this.node = document.querySelector("#city-background");
        this.cityName = city
        
        this.lat;
        this.long;
        // spriteList.push(this.weatherManager);

        this.changeCity(city);
    }

    changeCity(nextCity) {
        let text = document.querySelector("#city_name");
        // console.log("removing background-"+this.cityName.innerText);
        // console.log("adding background-"+this.citySelect.value);
        console.log("leaving ["+text.innerText+"] and going to ["+nextCity+"]")
        this.node.classList.remove("background-"+text.innerText)
        this.node.classList.add("background-"+nextCity);
        text.innerText = nextCity; 
        this.cityName = nextCity;
        this.setCoordonate();

        startLoadingScreen();
    }

    setCoordonate(){
        if(this.cityName  == "quebec"){
            this.lat  = 46.8131;
            this.long = 71.2075;
        }
        else if(this.cityName  == "paris"){
            this.lat  = 48.85661;
            this.long = 71.2075;
        } 
        else if(this.cityName == "tokyo"){
            this.lat  = 35.6764;
            this.long = 139.6500;
        }
    }

    setBackground(isDay){

        let bg;
    
        if(this.cityName == "quebec")
            isDay == 0 ? bg ="url('./img/quebec_jour.png')" : bg ="url('./img/quebec_nuit.png')";

        else if(this.cityName == "paris")
            isDay == 0 ? bg ="url('img/paris_nuit.png')": bg ="url('img/paris_nuit.png')";
        
        else if(this.cityName == "tokyo")
            isDay == 0 ? bg ="url('img/tokyo_nuit.png')": bg ="url('img/tokyo_nuit.png')";
        

        this.node.style.backgroundImage = bg;
    }

}