import { spriteList } from "./page-meteo";
import { weatherManager } from "./page-meteo";
import TiledImage from "./TiledImage";
import { WeatherManager } from "./weatherManager";

export default class loadingScreen {

    constructor(){
        
        //replace le loadingScreen div en haut de l'écran
        this.node = document.querySelector("#city-loadingScreen");
        this.speed = 100;
        this.y = 0;
        this.node.style.top = "0px";
        this.alive = true;

        //display le loading circle .gif
        this.circle = document.querySelector("#city-loadingCircle")
        this.circle.style.display = "block";

        //vide le texte du status window
        this.weatherText = document.querySelector("#weatherText");
        this.weatherText.innerText = "";
    }

    tick(){

        //ajoute un stutter effect au loading screen
        if(Math.random() < 0.2){
            //stutter la vitesse du loading screen aussi
            this.y += Math.random()*this.speed;
            this.node.style.top = this.y+"px"; 
        }

        //à cette position, l'animation se termine
        if(this.y > 600)
        {
            //animation de loading fin
            this.alive = false;
            //cache le loading circle
            this.circle.style.display = "none";
            //ecrit le texte avec un effet de typewriter dans la fenetre weatherText
            this.typeWriter(0, weatherManager.getWeatherString());
        }
            
        return this.alive;
    }

    typeWriter = (index, text) => {

        //écrit une lettre à la fois
        if(index < text.length){
            this.weatherText.innerText += text.charAt(index);
            index++;
            window.setTimeout(()=>{this.typeWriter(index, text, this.weatherText)}, 25)
        }
    }
}

