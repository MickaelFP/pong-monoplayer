// On créait une nouvelle fonction afin de definir les mouvents de la balle et de la raquette
let terrain = new Terrain($("#terrain"));

let balle = new Balle($("#balle"));

let raquetteGauche = new Raquette($("#gauche"));
let raquetteDroite = new Raquette($("#droite"));

let joueur0 = new Joueur($("#gauche"));
let joueur1 = new Joueur($("#droite"));

//let son = new Son();

//let demarrer = false;

// On créait une boucle pour les fonction précédentes
setInterval(function () {
    
    //if(demarrer) {
        
    balle.bouger();

    raquetteGauche.bouger();
        
    raquetteDroite.bouger();
        
    //}
}, 10);
    
/*$("#btn-jouer").on("mouseup", function (event) {
    event.preventDefault();
    demarrer = true;
    $("#ecran-debut").addClass("invisible");
});*/

//On fait appel aux addEventListener afin de pouvoir détecter et ainsi lire les touches utiliser
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return
    }

    /* On va pouvoir définir les touches que l'on veut qu'ils détectent,
    ainsi que les conditions de déplacement des raquettes que l'on souhaite leurs associer */
    if (event.key === "h") {
        raquetteGauche.monter();
    }
    if (event.key === "b") {
        raquetteGauche.descendre();
    }
    if (event.key === "b") {
        raquetteDroite.monter();
    }
    if (event.key === "h") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);

window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    /* On va pouvoir attribuer maintenant des conditions d'arrêt du mouvement des raquettes à nos touches,
    et ce afin que nos raquettes n'aient pas un mouvement continue après détection d'une touche */
    if (event.key === "h" || event.key === "b") {
        raquetteGauche.arret();
    }
    if (event.key === "b" || event.key === "h") {
        raquetteDroite.arret();
    }
    event.preventDefault();
}, true);
