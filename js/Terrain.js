// On créait une classe pour définir les paramètres du terrain: dimensions
class Terrain{
    constructor($element){
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }
    
    /* On ajoute des classe que l'on retire par la suite. Cela va permettre de faire réagir les bordures du terrain,
    et ainsi permettre les rebonds de la balle, en ajoutant un effet de clignotement de couleur */

tiltHaut() {

        this.$element.addClass("tiltHaut");
        let ici = this;

        setTimeout(
            function () {
                
                ici.$element.removeClass("tiltHaut");
            }, 200
        );
    }

tiltBas() {
        
        this.$element.addClass("tiltBas");
        let ici = this;

        setTimeout(
            function () {
                
                ici.$element.removeClass("tiltBas");
            }, 200
        );
    }

tiltDroite() {

        this.$element.addClass("tiltDroite");
        let ici = this;

        setTimeout(
            function () {
                ici.$element.removeClass("tiltDroite");
            }, 200
        );
    }

tiltGauche() {

        this.$element.addClass("tiltGauche");
        let ici = this;

        setTimeout(
            function () {
                ici.$element.removeClass("tiltGauche");
            }, 200
        );
    }
}
