import { spriteList } from "./page-meteo";
import { weatherManager } from "./page-meteo";
import TypeWriterEffect from "./typewriter";

export default class LoadingScreen {

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
        if(this.y > 900)
        {
            //animation de loading fin
            this.alive = false;
            //cache le loading circle
            this.circle.style.display = "none";
            //ecrit le texte avec un effet de typewriter dans la fenetre weatherText
            // this.typeWriter(0, weatherManager.getWeatherString());
            spriteList.push(new TypeWriterEffect(document.querySelector("#weatherText"), weatherManager.getWeatherString()))
        }
            
        return this.alive;
    }



}


