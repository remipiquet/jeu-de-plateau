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
        for (let x = 0; x < currentGame.gameMap.board.length; x++) {
            for (let y = 0; y < currentGame.gameMap.board.length; y++) {
                if (currentGame.gameMap.board[x][y].player == currentGame.currentPlayer) { 
                    if (x < 9 && currentGame.gameMap.board[x + 1][y].player == currentGame.currentEnemy){
                        this.defense = true;
                        console.log(currentGame.currentPlayer.name + " se défend");
                        currentGame.playGame();
                        return this.defense;
                    }
                    if (x > 0 && currentGame.gameMap.board[x - 1][y].player == currentGame.currentEnemy){
                        this.defense = true;
                        console.log(currentGame.currentPlayer.name + " se défend");
                        currentGame.playGame();
                        return this.defense;
                    }
                    if (y < 9 && currentGame.gameMap.board[x][y + 1].player == currentGame.currentEnemy){
                        this.defense = true;
                        console.log(currentGame.currentPlayer.name + " se défend");
                        currentGame.playGame();
                        return this.defense;
                    }
                    if (y > 0 && currentGame.gameMap.board[x][y - 1].player == currentGame.currentEnemy){
                        this.defense = true;
                        console.log(currentGame.currentPlayer.name + " se défend");
                        currentGame.playGame();
                        return this.defense;
                    }
                }
            }
        }
    }

    fight() {
        /**
         * Gestion du combat des joueurs
         */
        for (let x = 0; x < currentGame.gameMap.board.length; x++) {
            for (let y = 0; y < currentGame.gameMap.board.length; y++) {
                if (currentGame.gameMap.board[x][y].player == currentGame.currentPlayer) {
                    if (x < 9 && currentGame.gameMap.board[x + 1][y].player == currentGame.currentEnemy){//TODO: à remplacer par un switch
                        currentGame.currentEnemy.isTouched();
                        return this.health;
                    }
                    if (x > 0 && currentGame.gameMap.board[x - 1][y].player == currentGame.currentEnemy){
                        currentGame.currentEnemy.isTouched();
                        return this.health;
                    }
                    if (y < 9 && currentGame.gameMap.board[x][y + 1].player == currentGame.currentEnemy){
                        currentGame.currentEnemy.isTouched();
                        return this.health;
                    }
                    if (y > 0 && currentGame.gameMap.board[x][y - 1].player == currentGame.currentEnemy){
                        currentGame.currentEnemy.isTouched();
                        return this.health;
                    }
                }
            }
        } 
        
    }
} 
