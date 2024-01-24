import { spriteList } from "./page-meteo";
import TiledImage from "./TiledImage";

export default class loadingScreen {

    constructor(node){
        
        this.node = document.querySelector("#city-loadingScreen");
        this.speed = 100;
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

            let statusNode = document.querySelector("#status");
            let statusText = statusNode.innerText;
            statusNode.innerText= "";
            typeWriter(0, statusText, statusNode);

        }
            
        
        return this.alive;
    }
}

const typeWriter = (index, statusText, statusNode) => {

    if(index < statusText.length){
        statusNode.innerText += statusText.charAt(index);
        index++;
        setTimeout(()=>{typeWriter(index, statusText, statusNode), 5000})
        console.log(statusNode.innerText);
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