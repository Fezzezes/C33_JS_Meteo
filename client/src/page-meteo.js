import { fetchData } from "./meteo-api";
import { Ville } from "./ville";



let currentCity;
export let spriteList = [];

window.addEventListener("load", async () => {
    let weatherData = await fetchData(45.5019, 73.5674);
    console.log(weatherData)

    //-----------------------
    
    currentCity = new Ville();
    globalTick(); 
})

const globalTick = () => {

    // console.log("tick");
    for(let i = 0; i < spriteList.length; i++)
    {
        if(!spriteList[i].tick())
        {
            spriteList.splice(i,1);
            i--;
        }
    }

    // console.log("sprites: "+spriteList.length);
    // console.log(spriteList);
    window.requestAnimationFrame(globalTick);
}



    