// On créait une classe pour définir les paramètres de la raquette
class Raquette{
    constructor($element){
        
        this.$element = $element;
        this.hauteur = $element.height();
        this.largeur = $element.width();
        this.positionX = parseInt($element.css("left"));
        this.positionY = parseInt($element.css("top"));
        this.direction = 0;
        this.vitesse = 3;
    }

    get bas(){
        return this.positionY + this.hauteur;
    }

    set bas(value){
        this.positionY = value - this.hauteur;
    }

    get droite(){
        return this.positionX + this.largeur;
    }

    set droite(value){
        this.positionX = value - this.largeur;
    }

    bouger(){
        this.positionY += this.vitesse * this.direction;
        this.limite();
        this.majHTML();
    }

    monter(){
        this.direction = -1;
    }

    descendre(){
        this.direction = 1;
    }

    arret(){
        this.direction = 0;
    }

    majHTML(){
        this.$element.css("top", this.positionY);
    }

    limite(){
        if (this.bas > terrain.hauteur){
            this.bas = terrain.hauteur;
            this.arret();
        }
        if (this.positionY < 0){
            this.positionY = 0;
            this.arret();
        }
    }

}
