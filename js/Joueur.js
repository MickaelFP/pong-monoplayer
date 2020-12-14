
class Joueur{
    constructor($element){
        this.$element = $element;
        this.cote = 0;
        this.score = 0;
    }

    ajoutScore(){
        this.score += 10;
        // this.$element.slideUp(10);
        this.$element.text(this.score);
        // this.$element.slideDown();
    }
}