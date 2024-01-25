import { fetchData } from "./meteo-api";
import { spriteList, startLoadingScreen } from "./page-meteo";
import { WeatherManager } from "./weatherManager";

export class Ville{

    constructor(city){
        //trouve le noeud du background
        this.node = document.querySelector("#city-background");
        //store le nom de la ville
        this.cityName = city
        //declare les coordonnées
        this.lat;
        this.long;
        //set la ville
        this.changeCity(city);
    }

    changeCity(nextCity) {
        //update la fenetre de status pour enlever la veille info
        let oldSelection = document.querySelector("#"+this.cityName+"-select");
        oldSelection.innerText = "Online"; 
        //change le nom de ville
        this.cityName = nextCity;
        //update la fenetre de status des villes avec la nouvelle info
        let nextSelection = document.querySelector("#"+this.cityName+"-select");
        nextSelection.innerText = "Monitoring"; 
        
        //set les nouvelles coordonnées
        this.setCoordonate();
    }

    setCoordonate(){
        //coordonnées de quebec, paris ou tokyo
        if(this.cityName  == "quebec"){
            this.lat  = 46.8131;
            this.long = 71.2075;
        }
        else if(this.cityName  == "paris"){
            this.lat  = 48.85661;
            this.long = -71.2075;
        } 
        else if(this.cityName == "tokyo"){
            this.lat  = 35.6764;
            this.long = -139.6500;
        }
    }

    setBackground(isDay){

        let bg;
        //trouve le bon background (ville + day/night)
        if(this.cityName == "quebec")
            isDay == 0 ? bg ="url('./img/quebec_jour.png')" : bg ="url('./img/quebec_nuit.png')";

        else if(this.cityName == "paris")
            isDay == 0 ? bg ="url('./img/paris_jour.png')": bg ="url('./img/paris_nuit.png')";
        
        else if(this.cityName == "tokyo")
            isDay == 0 ? bg ="url('./img/tokyo_jour.png')": bg ="url('./img/tokyo_nuit.png')";
        
        //set le bon background
        this.node.style.backgroundImage = bg;
        //commence une animation de loading screen
        startLoadingScreen();
    }

}