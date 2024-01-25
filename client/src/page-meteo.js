import { fetchData } from "./meteo-api";
import { Ville } from "./ville";
import { WeatherManager } from "./weatherManager";
import LoadingScreen from "./loading";
import TypeWriterEffect from "./typewriter";
import Satellite from "./satellite";

export let spriteList = [];
export let currentCity;
export let weatherManager;
let commandline;





window.addEventListener("load", async () => {

    console.log(await fetchData(28.6139,-77.2090 ))
    
    currentCity = new Ville("quebec");
    
    let weatherData = await fetchData(currentCity.lat, currentCity.long);
    weatherManager = new WeatherManager(weatherData);
    spriteList.push(weatherManager);

    commandline = document.querySelector("#command-line")
    globalTick();

    document.querySelector("#lessWind").addEventListener("click",()=>{weatherManager.changeWind(--weatherManager.wind)})
    document.querySelector("#moreWind").addEventListener("click",()=>{weatherManager.changeWind(++weatherManager.wind)})

    
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

window.addEventListener("keyup", async (e) =>{
    console.log(e.key)
    let city = document.querySelector("#city_select");
    if(e.key == "1")
    {
        changeCity("quebec") ;
    }
        
    else if(e.key == "2")
    {
        changeCity("paris") ;
    }

    else if(e.key == "3")
    {
        changeCity("tokyo") ;
    }

    else if(e.key == "Enter" && document.activeElement === commandline)
    {
        submitCommand();
    }
        
})

const changeCity = async (city) =>{

    currentCity.changeCity(city);
    console.log(currentCity.lat+", "+currentCity.long)
    weatherManager.setWeather(await fetchData(currentCity.lat, currentCity.long))
}

const submitCommand = () => {

    let texte = commandline.value;
    let erreur = document.querySelector("#erreur-command");
    console.log(texte);


    if(texte == "sudo rain")
    {
        console.log("make it rain")
        //toggle rain
        weatherManager.rain > 0  ? weatherManager.rain = 0 : weatherManager.rain = 1;
        erreur.style.display ="none";
    }
    else if(texte == "sudo snow")
    {
        console.log("snow time")
        //toggle rain

        weatherManager.snow > 0  ? weatherManager.snow = 0 : weatherManager.snow = 1;
        erreur.style.display ="none";
    }
    else if(texte == "sudo daytime"){
        
        weatherManager.daytime > 0  ? weatherManager.daytime = 0 : weatherManager.daytime = 1;
        currentCity.setBackground(weatherManager.daytime);
        startLoadingScreen();
        erreur.style.display ="none";
    }
    else if(texte == "sudo sat"){
        tickCount = 0;
    }
    else{
        erreur.style.display ="block";
        console.log("erreur");
    }
        

    commandline.value = "";
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










    