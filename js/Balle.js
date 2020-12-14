// On créait une classe pour définir les paramètres de la balle
class Balle {
    constructor($element) {
        this.$element = $element;

        this.hauteur = $element.height();
        this.largeur = $element.width();

        this.positionX = parseInt($element.css("left"));
        this.positionY = parseInt($element.css("top"));

        this.vitesseX = 2;
        this.vitesseY = 1;
        //this.vitesse = 2;
        //this.vitesse = this.vitesseDepart;
        //this.vitesseDepart = terrain.largeur / 500;
        this.vitesseMax = terrain.largeur / 100;
        this.acceleration = 1.1;

        this.calc = Math.random();

        this.angle = Math.random();
        //this.angle = this.defAngle();
    }

    get bas() {
        return this.positionY + this.hauteur;
    }

    set bas(value) {
        this.positionY = value - this.hauteur;
    }

    get droite() {
        return this.positionX + this.largeur;
    }

    set droite(value) {
        this.positionX = value - this.largeur;
    }

    /*defAngle() {
        this.buf < 0.5 ? (5*Math.PI/4) - Math.random()*(2*Math.PI/4) : (Math.PI/4) - Math.random()*(2*Math.PI/4);
    }*/
    
    accelerer() {
        if (Math.abs(this.vitesse) < this.vitesseMax) {
            this.vitesse *= this.acceleration;
            consol.log(Math.abs(this.vitesse))            
        }
        else{
            this.vitesse = this.vitesseMax;
        }
    }
    
    bouger() {
        this.positionX += Math.cos(this.angle) * this.vitesseX;
        this.positionY += Math.sin(this.angle) * this.vitesseY;

        this.limite();
        this.majHTML();
    }

    /* On définit les limites qui sont indispensables pour restreindre le déplacement des raquettes et de la balle à l'intérieur
    du terrain. Elles permettent donc de paramétrer/définir les rebonds que l'on souhaite qu'elles effectuent sur ces limites */
    limite() {

        //Limites du terrain et rebonds sur elles
        //Gauche
        if(this.positionX < 0) {
            joueur1.ajoutScore();
            terrain.tiltGauche();
            this.positionX = 0;
            this.angle = Math.PI - this.angle;
            this.recentrer();
        }
    
        //Droite
        if( this.droite > terrain.largeur) {
            joueur1.ajoutScore();
            terrain.tiltDroite();
            this.droite = terrain.largeur;
            this.angle = Math.PI - this.angle;
            this.recentrer();
        }
        
        //Haut
        if(this.positionY < 0) {
            terrain.tiltHaut();
            this.positionY = 0;
            this.angle = -(this.angle);
        }

        //Bas
        if( this.bas > terrain.hauteur) {
            terrain.tiltBas();
            this.bas = terrain.hauteur;
            this.angle = -(this.angle);
        }

        //Limites des raquettes et rebonds sur elles
        //Gauche
        if(this.positionX < raquetteGauche.droite) {
            if(this.bas > raquetteGauche.positionY) {
                if(this.positionY < raquetteGauche.bas) {
                    joueur0.ajoutScore();
                    this.angle = Math.PI - this.angle;
                    this.accelerer();

                    raquetteGauche.changerCouleur();
                }
            }
        }

        //Droite
        if(this.droite > raquetteDroite.positionX){
            if(this.bas > raquetteDroite.positionY) {
                if(this.positionY < raquetteDroite.bas) {
                    this.angle = Math.PI - this.angle;
                    joueur0.ajoutScore();
                    this.accelerer();

                    raquetteDroite.changerCouleur();
                }
            }
        }

    }

    recentrer() {
        this.positionX = terrain.largeur / 2 - this.largeur / 2;
        this.positionY = terrain.hauteur / 2 - this.hauteur / 2;
    }
    
    reinitialiserVitesse() {
        this.vitesse = this.vitesseDepart;
    }
        
    majHTML() {
        this.$element.css("left",balle.positionX);
        this.$element.css("top",balle.positionY);
    }

}

