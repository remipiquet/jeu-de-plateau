class Player{
    constructor(name, health, weapon, imgUrl){
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.strength = weapon.damage;
        this.position = null;
        this.defense = false;
        this.imgUrl = imgUrl;
        this.index = 0;
        this.positionX = null;
        this.positionY = null;
    }

    /*attack() {

    }*/

    isTouched() {
        if (this.defense == true){
            this.health = this.health - (currentGame.currentPlayer.weapon.damage/2);
            this.defense = false;
            console.log(this.name+" est touché mais il se défend ! Il perd quand même "+(currentGame.currentEnemy.weapon.damage/2)+" points de vie");
            console.log("Il reste "+currentGame.currentEnemy.health+" points de vie à "+currentGame.currentEnemy.name);
        }
        else {
            this.health = this.health - currentGame.currentPlayer.weapon.damage;
            console.log(this.name+" est touché, il perd "+currentGame.currentEnemy.weapon.damage+" points de vie");
            console.log("Il reste "+currentGame.currentEnemy.health+" points de vie à "+currentGame.currentEnemy.name);
        }
    }

    getPlayerHealth() {
        return this.health;
    }

    setPlayerHealth(value) {
        return this.health = value;
    }

    getPlayerPosition() {
        return this.position;
    }

    setPlayerPosition(value) {
        return this.position = value;
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

//TODO: A passer dans pirates.js ?
var player1 = new Player ("player1", 100, weapon1, '<img src="img/player1.png" alt="player1"></img>');
var player2 = new Player ("player2", 100, weapon1, '<img src="img/player2.png" alt="player2"></img>');