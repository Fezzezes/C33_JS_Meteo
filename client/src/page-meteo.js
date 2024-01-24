import { fetchData } from "./meteo-api";
import { Ville } from "./ville";
import { WeatherManager } from "./weatherManager";


let currentCity;
export let spriteList = [];
let weatherManager;

// let btnRain;
// let btnWind;
// let btnTemp;

window.addEventListener("load", async () => {

    currentCity = new Ville();
    
    let weatherData = await fetchData(currentCity.lat, currentCity.long);
    weatherManager = new WeatherManager(weatherData);
    spriteList.push(weatherManager);

    //-----------------------
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








    