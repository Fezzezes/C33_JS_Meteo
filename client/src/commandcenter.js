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
    
        let texte = this.command.value;
        

        console.log(texte);
    
        if(texte == "sudo rain")
        {
            console.log("make it rain")
            //toggle rain
            this.weatherManager.rain > 0  ? this.weatherManager.rain = 0 : this.weatherManager.rain = 1;
            spriteList.push(new Message("Like tears in the rain", "greenyellow"))
        }
        else if(texte == "sudo snow")
        {
            console.log("snow time")
            //toggle rain
    
            this.weatherManager.snow > 0  ? this.weatherManager.snow = 0 : this.weatherManager.snow = 1;
            spriteList.push(new Message("Winter is coming", "greenyellow"))
        }
        else if(texte == "sudo daytime"){
            
            this.weatherManager.daytime > 0  ? this.weatherManager.daytime = 0 : this.weatherManager.daytime = 1;
            this.currentCity.setBackground(this.weatherManager.daytime);

            spriteList.push(new Message("Let there be light", "greenyellow"))
        }
        else if(texte == "sudo sat"){
            spriteList.push(new Satellite());
            spriteList.push(new Message("Satelitte launched!", "greenyellow"))
        }
        else{
          
            spriteList.push(new Message("Invalid Input...", "red"))
            console.log("erreur");
        }
            
    
        this.command.value = "";
    }
}

