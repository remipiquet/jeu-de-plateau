class Player{
    constructor(name, health, weapon, imgUrl){
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.strength = weapon.damage;
        this.position = null;
        this.defense = false;
        this.imgUrl = imgUrl;
    }

    isTouched() {
        /**
         * Gestion d'un joueur touché
         */
        if (this.defense == true){
            this.health = this.health - (currentGame.currentPlayer.weapon.damage/2);
            this.defense = false;
            console.log(currentGame.currentPlayer.name + " attaque, " + currentGame.currentEnemy.name + " perd " + (currentGame.currentPlayer.weapon.damage / 2) + " points de vie");
            currentGame.playGame();
        }
        else {
            this.health = this.health - currentGame.currentPlayer.weapon.damage;
            console.log(currentGame.currentPlayer.name + " attaque, " + currentGame.currentEnemy.name + " perd " + currentGame.currentPlayer.weapon.damage + " points de vie");
            currentGame.playGame();
        }
    }
    
    defend() {
        /**
         * Gestion de la défense des joueurs
         */
        this.defense = true;
        console.log(currentGame.currentPlayer.name + " se défend");
        return this.defense;
    }

    fight(victim) {
        /**
         * Gestion du combat des joueurs
         */

        victim.isTouched();
        return true;
    }
} 
