let spriteList = []
import Satellite from "./satellite";
import Message from "./message";
import Lamp from "./lamp";

window.addEventListener("load", () => {


    document.querySelector("#password-form").onsubmit = () => {
        let success = true;
        let password = document.querySelector("#password");
        if (password.value !== "web2") {

            //erreur : mauvais mot de passe
            spriteList.push(new Message("Erreur d'authentification", "red", "error-message"))
            success = false;
            password.value = "";
        }
        else
        {
            //le mot de passe est bon, on va garder le choix de ville pour la prochaine page
            let citySelect;
            if(document.querySelector("#quebec").checked)
                citySelect = "quebec"
            else if(document.querySelector("#paris").checked)
                citySelect = "paris"
            else if(document.querySelector("#tokyo").checked)
                citySelect = "tokyo"

            localStorage.setItem("city", citySelect)
        }
    

        return success;
    }

    console.log()
    spriteList.push(new Lamp(document.getElementById("terminal")))

    globalTick();
})

let tickCount = 0;
const globalTick = () => {

    //run chaque tick des objets de la liste de sprite
    for(let i = 0; i < spriteList.length; i++)
    {
        //retire de la liste les animations terminées
        if(!spriteList[i].tick()){
            spriteList.splice(i,1);
            i--;
        }
    }

    //à chaque 1000 ticks, envoie un satellite
    if(tickCount % 1000 == 0){

        spriteList.push(new Satellite());
        tickCount = 0;
    }

    //incremente le compteur de tick
    tickCount++;
    //loop back
    window.requestAnimationFrame(globalTick);
}