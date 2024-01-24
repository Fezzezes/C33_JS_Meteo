import { fetchData } from "./meteo-api";
import { Ville } from "./ville";
import { WeatherManager } from "./weatherManager";


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
window.addEventListener("load", async () => {


    
    currentCity = new Ville("quebec");
    
    let weatherData = await fetchData(currentCity.lat, currentCity.long);
    weatherManager = new WeatherManager(weatherData);
    spriteList.push(weatherManager);

    commandline = document.querySelector("#command-line")
    console.log(commandline)
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
        currentCity.changeCity("quebec");
        console.log(currentCity.lat+", "+currentCity.long)
        weatherManager.setWeather(await fetchData(currentCity.lat, currentCity.long))
    }
        
    else if(e.key == "2")
    {
        currentCity.changeCity("paris");
        console.log(currentCity.lat+", "+currentCity.long)
        weatherManager.setWeather(await fetchData(currentCity.lat, currentCity.long))
    }

    else if(e.key == "3")
    {
        currentCity.changeCity("tokyo");
        console.log(currentCity.lat+", "+currentCity.long)
        weatherManager.setWeather(await fetchData(currentCity.lat, currentCity.long))
    }

    else if(e.key == "Enter" && document.activeElement === commandline)
    {
        submitCommand();
    }
        
})

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

    spriteList.push(new loadingScreen());

}

class loadingScreen {

    constructor(node){
        
        this.node = document.querySelector("#city-loadingScreen");
        this.speed = 20;
        this.y = 0;
        this.node.style.top = "0px";
        // this.node.style.display = "block";
        console.log(this.node.style.top)
    }

    tick(){

        
        let rnd = Math.random()
        console.log(rnd) 
        if(rnd < 0.2)
        {
            this.y += Math.random()*this.speed;
            this.node.style.top = this.y+"px";
    
            console.log(this.node.style.top)
        }

        if(this.y > 600)
        {
            
            return false;
        }
            
        else
            return true;

    }
}








    