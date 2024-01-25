import { spriteList } from "./page-meteo";



export default class Satellite{

    constructor(){
        console.log("New satellite")
        this.node = document.createElement("div");
        this.node.classList.add("satellite");
        this.parent = document.querySelector("body")
        this.parent.append(this.node)

        this.speedX = 13;
        this.speedY = 13;
        this.velocity = -0.1;
        this.x = -100;
        this.y = -100;

        this.node.style.left = this.x+"px";
        this.node.style.bottom = this.y+"px";
        this.alive = true;
        this.node.addEventListener("mouseenter", () => {this.alive = false;})
    }

    tick(){

 
        this.x += this.speedX;

        this.speedY+=this.velocity
        this.y += this.speedY;

        this.node.style.left = this.x+"px";
        this.node.style.bottom = this.y+"px";
 
        if(this.x > 1900 || this.y > 800)
        {
            this.node.remove();
            this.alive = false;
        }
            

        return this.alive;
    }
}