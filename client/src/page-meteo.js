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

    //nouvelle ville, gardera les infos sur la localisation
    currentCity = new Ville(localStorage.getItem("city"));
    //fetch les info meteo dans la ville actuel
    let weatherData = await fetchData(currentCity.lat, currentCity.long);
    //le weatherManager va gerer les infos sur la meteo et leurs animation
    weatherManager = new WeatherManager(weatherData);
    spriteList.push(weatherManager);
    //le commandCenter agira en fonction des commandes entrer dans la ligne de commande
    commandCenter = new CommandCenter(weatherManager, currentCity);

    //bouton pour augmenter ou diminuer le vent
    document.querySelector("#lessWind").addEventListener("click",()=>{weatherManager.changeWind(--weatherManager.wind)})
    document.querySelector("#moreWind").addEventListener("click",()=>{weatherManager.changeWind(++weatherManager.wind)})

    //on keyup du boutn enter, envoie une commande au commandCenter (si le command line est au focus)
    window.addEventListener("keyup", (e) =>{
        if(e.key == "Enter" && document.activeElement === commandCenter.command)
            commandCenter.submitCommand();      
    })

    //les boutons 1,2,3 peuvent être appuyés pour changer de ville rapidement
    window.addEventListener("keydown", (e) =>{
        if(e.key == "1")
            changeCity("quebec") ;
        else if(e.key == "2")
            changeCity("paris") ;
        else if(e.key == "3")
            changeCity("tokyo") ;
    })

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

const changeCity = async (city) =>{

    //update la ville actuelle
    currentCity.changeCity(city);
    //update la meteo
    weatherManager.setWeather(await fetchData(currentCity.lat, currentCity.long))
}

export const startLoadingScreen = () =>{
    
    //cancel ces animations si elles sont déja dans la liste pour évité des doublés
    let loading = spriteList.find(x => x instanceof LoadingScreen);
    let typeWriter = spriteList.find(x => x instanceof TypeWriterEffect);

    console.log("i found loadingScreen: "+(loading != null))
    console.log("i found typeWriter: "+(typeWriter != null))

    if(loading != null) 
        loading.alive = false;

    if(typeWriter != null)
        typeWriter.killMe();
    
    //commence une nouvelle animation pour le loading screen
    spriteList.push(new LoadingScreen());
}










    