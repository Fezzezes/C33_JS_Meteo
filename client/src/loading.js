import { spriteList } from "./page-meteo";
import TiledImage from "./TiledImage";

export default class loadingScreen {

    constructor(node){
        
        this.node = document.querySelector("#city-loadingScreen");
        this.speed = 20;
        this.y = 0;
        this.node.style.top = "0px";
        this.alive = true;
        this.circle = document.querySelector("#city-loadingCircle")
        this.circle.style.display = "block";
        // new loadingCircle();
    }

    tick(){

        
        let rnd = Math.random()
 
        if(rnd < 0.2){

            this.y += Math.random()*this.speed;
            this.node.style.top = this.y+"px"; 
        }

        if(this.y > 600)
        {
            this.alive = false;
            this.circle.style.display = "none";
        }
            
        
        return this.alive;
    }
}

// export class loadingCircle {

//     constructor()
//     {
//         this.node = document.querySelector("#city-loadingCircle");

//         this.node.style.display ="block";
//     }

//     tick(){
//         this.tiledImage.tick();
//     }

// }