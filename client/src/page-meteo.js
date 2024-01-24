import { fetchData } from "./meteo-api";
import { Ville } from "./ville";
import { WeatherManager } from "./weatherManager";
import loadingScreen from "./loading";
import { loadingCircle } from "./loading";

let currentCity;
export let spriteList = [];
let weatherManager;
let commandline;
let commandlineIsFocus;
// let btnRain;
// let btnWind;
// let btnTemp;
let lessTempBtn;
let moreTempBtn;

export let loading;

window.addEventListener("load", async () => {


    
    currentCity = new Ville("quebec");
    
    let weatherData = await fetchData(currentCity.lat, currentCity.long);
    weatherManager = new WeatherManager(weatherData);
    spriteList.push(weatherManager);

    commandline = document.querySelector("#command-line")
    globalTick();


    lessTempBtn = document.querySelector("#lesstemp")
    moreTempBtn = document.querySelector("#moretemp")
    lessTempBtn.addEventListener("click",()=>{weatherManager.changeTemp(--weatherManager.temp)})
    moreTempBtn.addEventListener("click",()=>{weatherManager.changeTemp(++weatherManager.temp)})
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
        else
        console.log("erreur");

    commandline.value = "";
}


export const startLoadingScreen = () =>{
    
    if(loading != null){
        loading.alive = false;
    }

    loading = new loadingScreen()
    spriteList.push(loading);

}










    