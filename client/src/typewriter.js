
export class TypeWriterEffect{

    constructor(node, text){
        //vide le texte du status window
        this.node = node;
        this.node.innerText = "";
        //texte à écrire
        this.text = text;
        //une lettre par 'this.speed' tick 
        this.speed = 2;
        //nombre de tick actuel
        this.tickCounter = 0;
        //la lettre suivante
        this.nextLetter = 0;
    }

    tick(){
        let alive = true;
        //incremente compteur
        ++this.tickCounter;
        //trigger every 'this.speed' tick
        console.log("tick")
        if(this.tickCounter % this.speed == 0){
            
            this.node.innerText += this.text.charAt(this.nextLetter);
            ++this.nextLetter;
        }

       if(this.nextLetter > this.text.length){
            alive =false;
       }

        return alive;
    }

    typeWriter = (index, text) => {

        //écrit une lettre à la fois
       
        console.log("writing and "+this.alive)
        if(index < text.length){
            this.weatherText.innerText += text.charAt(index);
        }
    }
}