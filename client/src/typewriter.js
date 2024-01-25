
export default class TypeWriterEffect{

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

        this.alive = true;
    }

    tick(){
        
        //incremente compteur
        ++this.tickCounter;
        //trigger every 2 ticks
        if(this.tickCounter % this.speed == 0){
            //ajoute la lettre au innerText du noeud
            this.node.innerText += this.text.charAt(this.nextLetter);
            ++this.nextLetter;
        }

        //tue l'animation si on atteint la fin du string
       if(this.nextLetter > this.text.length){
            this.alive = false;
       }

        return this.alive;
    }

    killMe(){
        //tue l'animation prématurement
        this.alive = false;
        this.node.innerText = "";
        console.log("Typerwriter is kill");
    }
}