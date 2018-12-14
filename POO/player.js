class Player{
    constructor(name, health, weapon, imgUrl){
        this.name = name;
        this.health = health;
        this.weapon = weapon.name;
        this.force = weapon.damage;
        this.position = null;
        this.defense = false;
        this.imgUrl = imgUrl;
        this.index = 0;
    }

    getPlayerHealth() {
        return "Il reste " + this.health + " points de vie au " + this.name;
    }

    setPlayerHealth(value) {
        return this.health = value;
    }

    setPlayerWeapon() {
        /**
         * Récupération de l'arme si présente sur la case du joueur
         */
    }

    dropWeapon() {
        /**
         * Dépose l'arme que le joueur avait avant de passer sur une case contenant une arme
         */
    }

    printHtml() {
        /**
         * Gestion de l'affichage sur la page HTML
         */
        

    }

}; 