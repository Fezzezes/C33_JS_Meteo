import { fetchData } from "./meteo-api";
import { Ville } from "./ville";



let currentCity;
export let spriteList = [];


// let btnRain;
// let btnWind;
// let btnTemp;

window.addEventListener("load", async () => {
    let weatherData = await fetchData(45.5019, 73.5674);
    console.log(weatherData)

    //-----------------------
    currentCity = new Ville();

    document.querySelector("#rain_btn").addEventListener("change",setRain)
    document.querySelector("#wind_btn").addEventListener("change",setWind)
    document.querySelector("#temp_btn").addEventListener("change",setTemp)

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

export const setRain = () => {
    
}

export const setWind = () => {
    
}

export const setTemp = () => {
    // console.log(currentCity.weatherManager.temp)
    // console.log(document.querySelector("#temp_btn").value)
    // currentCity.weatherManager.rain =  document.querySelector("#temp_btn").value ;
    // console.log(currentCity.weatherManager.temp)
}








    