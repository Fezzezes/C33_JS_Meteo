import { fetchData } from "./meteo-api";
import { Ville } from "./ville";

export let cityName;
let currentCity;

window.addEventListener("load", async () => {
    let weatherData = await fetchData(45.5019, 73.5674);
    console.log(weatherData)

    //-----------------------
    
    currentCity = new Ville(); 
})



    