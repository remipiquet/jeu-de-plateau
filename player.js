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
        }
        else {
            this.health = this.health - currentGame.currentPlayer.weapon.damage;
        }
        currentGame.playGame();
    }
    
    defend() {
        /**
         * Gestion de la défense des joueurs
         */
        for (let x = 0; x < currentGame.gameMap.board.length; x++) {
            for (let y = 0; y < currentGame.gameMap.board.length; y++) {
                if (currentGame.gameMap.board[x][y].player == currentGame.currentPlayer) {
                    if (x < 9){
                        if (currentGame.gameMap.board[x + 1][y].player == currentGame.currentEnemy) {
                            this.defense = true;
                            currentGame.playGame();
                            break;
                        }
                    }
                    if (x > 0){
                        if (currentGame.gameMap.board[x - 1][y].player == currentGame.currentEnemy) {
                            this.defense = true;
                            currentGame.playGame();
                            break;
                        }
                    }
                    if (y < 9){
                        if (currentGame.gameMap.board[x][y + 1].player == currentGame.currentEnemy) {
                            this.defense = true;
                            currentGame.playGame();
                            break;
                        }
                    }
                    if (y > 0){
                        if (currentGame.gameMap.board[x][y - 1].player == currentGame.currentEnemy) {
                            this.defense = true;
                            currentGame.playGame();
                            break;
                        }
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
                    if (x < 9){
                        if (currentGame.gameMap.board[x + 1][y].player == currentGame.currentEnemy) {
                            currentGame.currentEnemy.isTouched();
                            break;
                        }
                    }
                    if (x > 0){
                        if (currentGame.gameMap.board[x - 1][y].player == currentGame.currentEnemy) {
                            currentGame.currentEnemy.isTouched();
                            break;
                        }
                    }
                    if (y < 9){
                        if (currentGame.gameMap.board[x][y + 1].player == currentGame.currentEnemy) {
                            currentGame.currentEnemy.isTouched();
                            break;
                        }
                    }
                    if (y > 0){
                        if (currentGame.gameMap.board[x][y - 1].player == currentGame.currentEnemy) {
                            currentGame.currentEnemy.isTouched();
                            break;
                        }
                    }
                }
            }
        } 
        
    }
} 
