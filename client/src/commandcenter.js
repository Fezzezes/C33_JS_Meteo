import { spriteList } from "./page-meteo";
import Message from "./message";
import Satellite from "./satellite";

export default class CommandCenter{

    constructor(weatherManager, city)
    {
        this.command = document.querySelector("#command-line")
        this.weatherManager = weatherManager
        this.currentCity = city;
    }
    
    submitCommand(){
    
        //le texte dans la ligne de commande
        let texte = this.command.value;
        
        console.log(texte);

        if(texte == "sudo rain"){
            //toggle rain + message
            if(this.weatherManager.rain > 0 ){
                this.weatherManager.rain = 0
                spriteList.push(new Message("Rain off", "greenyellow"))
            }
            else{
                this.weatherManager.rain = 1
                spriteList.push(new Message("Rain on", "greenyellow"))
            }     
        }
        else if(texte == "sudo snow"){

            //toggle snow + message
            if(this.weatherManager.snow > 0){

                this.weatherManager.snow = 0
                spriteList.push(new Message("Snow off", "greenyellow"))
            }
            else{
                this.weatherManager.snow = 1
                spriteList.push(new Message("Snow on", "greenyellow"))
            } 
        }
        else if(texte == "sudo daytime"){
            //toggle daytime + message
            if(this.weatherManager.daytime > 0 ){

                this.weatherManager.daytime = 0
                spriteList.push(new Message("Day Time", "greenyellow"))
            }
            else{
                this.weatherManager.daytime = 1
                spriteList.push(new Message("Night Time", "greenyellow"))
            } 

            //ajuste le backgground
            this.currentCity.setBackground(this.weatherManager.daytime);
        }
        else if(texte == "sudo sat"){
            //envoie un satelitte
            spriteList.push(new Satellite());
            spriteList.push(new Message("Satelitte launched!", "greenyellow"))
        }
        else{
            //input invalide
            spriteList.push(new Message("Invalid Input...", "red"))
        } 
        //clear la command line
        this.command.value = "";
    }
}

