import { fetchData } from "./meteo-api";
import { Ville } from "./ville";
import { WeatherManager } from "./weatherManager";
import LoadingScreen from "./loading";
import TypeWriterEffect from "./typewriter";

export let spriteList = [];
export let currentCity;
export let weatherManager;
let commandline;
let commandlineIsFocus;
// let btnRain;
// let btnWind;
// let btnTemp;




window.addEventListener("load", async () => {


    
    currentCity = new Ville("quebec");
    
    let weatherData = await fetchData(currentCity.lat, currentCity.long);
    weatherManager = new WeatherManager(weatherData);
    spriteList.push(weatherManager);

    commandline = document.querySelector("#command-line")
    globalTick();

    document.querySelector("#lessWind").addEventListener("click",()=>{weatherManager.changeWind(--weatherManager.wind)})
    document.querySelector("#moreWind").addEventListener("click",()=>{weatherManager.changeWind(++weatherManager.wind)})
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
    console.log(texte);


    if(texte == "sudo rain")
    {
        console.log("make it rain")
        //toggle rain

        weatherManager.rain > 0  ? weatherManager.rain = 0 : weatherManager.rain = 1;
    }
    else if(texte == "sudo snow")
    {
        console.log("snow time")
        //toggle rain

        weatherManager.snow > 0  ? weatherManager.snow = 0 : weatherManager.snow = 1;
    }
    else if(texte == "sudo day"){
        weatherManager.daytime = 0;
        currentCity.setBackground(weatherManager.daytime);
    }
    else if(texte == "sudo night"){
        weatherManager.daytime = 1;
        currentCity.setBackground(weatherManager.daytime);
    }
    else
        console.log("erreur");

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










    