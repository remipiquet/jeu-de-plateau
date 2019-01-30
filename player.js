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
    }

    isTouched() {
        /**
         * Gestion d'un joueur touché
         */
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
        currentGame.playGame();
    }

    isInDefense(){
        /**
         * Gestion de la défense des joueurs
         */
        this.defense = true;
        console.log(this.name + " se défend");
        currentGame.playGame();
    }
} 
