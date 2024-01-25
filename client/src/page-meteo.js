import { fetchData } from "./meteo-api";
import { Ville } from "./ville";
import { WeatherManager } from "./weatherManager";
import LoadingScreen from "./loading";
import TypeWriterEffect from "./typewriter";
import Satellite from "./satellite";

import CommandCenter from "./commandcenter";
export let spriteList = [];
export let currentCity;
export let weatherManager;

let commandCenter;


window.addEventListener("load", async () => {

    currentCity = new Ville(localStorage.getItem("city"));
    
    let weatherData = await fetchData(currentCity.lat, currentCity.long);
    weatherManager = new WeatherManager(weatherData);
    spriteList.push(weatherManager);

    commandCenter = new CommandCenter(weatherManager, currentCity);
 
    globalTick();

    document.querySelector("#lessWind").addEventListener("click",()=>{weatherManager.changeWind(--weatherManager.wind)})
    document.querySelector("#moreWind").addEventListener("click",()=>{weatherManager.changeWind(++weatherManager.wind)})

    window.addEventListener("keyup", (e) =>{

        if(e.key == "Enter" && document.activeElement === commandCenter.command)
            commandCenter.submitCommand();      
    })

    window.addEventListener("keydown", (e) =>{
        if(e.key == "1")
            changeCity("quebec") ;
        else if(e.key == "2")
            changeCity("paris") ;
        else if(e.key == "3")
            changeCity("tokyo") ;
    })


})


let tickCount = 0;
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

    if(tickCount % 1000 == 0){

        spriteList.push(new Satellite());
        tickCount = 0;
    }
    // console.log("sprites: "+spriteList.length);
    // console.log(spriteList);
    tickCount++;
    window.requestAnimationFrame(globalTick);
}




const changeCity = async (city) =>{

    currentCity.changeCity(city);
    console.log(currentCity.lat+", "+currentCity.long)
    weatherManager.setWeather(await fetchData(currentCity.lat, currentCity.long))
}


export const startLoadingScreen = () =>{
    
    //cancel ces animation si le user change de ville durant un loading screen
    let loading = spriteList.find(x => x instanceof LoadingScreen);
    let typeWriter = spriteList.find(x => x instanceof TypeWriterEffect);

    console.log("i found loadingScreen: "+(loading != null))
    console.log("i found typeWriter: "+(typeWriter != null))
    if(loading != null) 
        loading.alive = false;

    if(typeWriter != null)
        typeWriter.killMe();
    
    spriteList.push(new LoadingScreen());

}










    