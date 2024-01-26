export default class Lamp{

    constructor(node)
    {
        this.node = node;
  
        //donnera un effet de buzz lumière neon
        this.alpha =0.35;
        this.fade = 0.05;
    }

    tick(){

        //ajoute un delay aléatoire entre chaque tick
        if(Math.random()> 0.95){
            //toggle entre ajouté de l'opacité ou en retiré
            this.fade*=-1;
            //modifie l'alpha du boxShadow
            this.alpha += this.fade;
            this.node.style.boxShadow = " 0px 25px 20px rgba(53, 248, 4,"+this.alpha+")"
        }
        //loop à l'infini
        return true;
    }
}