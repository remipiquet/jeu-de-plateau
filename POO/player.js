class Player{
    constructor(name, health, weapon, imgUrl){
        this.name = name;
        this.health = health;
        this.weapon = weapon.name;
        this.force = weapon.damage;
        this.position = null;
        this.positionX = null;
        this.positionY = null;
        this.defense = false;
        this.imgUrl = imgUrl;
        this.index = 0;
    }

    getPlayerHealth() {
        return this.health;
    }

    setPlayerHealth(value) {
        return this.health = value;
    }

    getPlayerPositionX() {
        return this.positionX;
    }

    setPlayerPositionX(value){
        return this.positionX = value;
    }

    getPlayerPositionY() {
        return this.positionY;
    }

    setPlayerPositionX(value) {
        return this.positionY = value;
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

var player1 = new Player (player1, 100, 'hook', '<img src="img/player1.png" alt="player1"></img>');
var player2 = new Player (player2, 100, 'hook', '<img src="img/player2.png" alt="player2"></img>');