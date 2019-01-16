class Game{
    constructor(){
        this.endGame = false;
        this.currentPlayer = player1;
        this.currentEnemy = player2;
    }

    setNextTurn() {
        /**
         * Gestion du tour par tour
         */
        if (currentGame.currentPlayer == player1){
            currentGame.currentPlayer = player2;
            currentGame.currentEnemy = player1;
            console.log("Joueur 2, à toi de jouer !");
            return currentGame.currentPlayer;
        }
        if (currentGame.currentPlayer == player2) {
            currentGame.currentPlayer = player1;
            currentGame.currentEnemy = player2;
            console.log("Joueur 1, à toi de jouer !");
            return currentGame.currentEnemy
        }
    }
    
    

    swapWeapon() {
        /**
         * Echange l'arme de currentPlayer contre celle qui est sur sa case
         */
        for (let x = 0; x < gameMap.board.length; x++) {
            for (let y = 0; y < gameMap.board.length; y++) { 
                if (gameMap.board[x][y] == currentGame.currentPlayer.position && gameMap.board[x][y].weapon != null){
                    var weaponBuffer = gameMap.board[x][y].weapon;
                    gameMap.board[x][y].weapon = currentGame.currentPlayer.weapon;
                    currentGame.currentPlayer.weapon = weaponBuffer;
                }
            }
        }
    }

    resetHighlight() {
        for (var x = 0; x < gameMap.board.length; x++) {
            for (var y = 0; y < gameMap.board.length; y++) {
                gameMap.board[x][y].highlight = false;
            }
        }
    }

    highlight() {
        for (var x = 0; x < gameMap.board.length; x++) {
            for (var y = 0; y < gameMap.board.length; y++) {
                if (gameMap.board[x][y].player == this.currentPlayer) {
                    if (gameMap.board.length - 1 - x >= 3 && x >= 3) {
                        gameMap.board[x + 1][y].highlight = true;
                        gameMap.board[x + 2][y].highlight = true;
                        gameMap.board[x + 3][y].highlight = true;
                        gameMap.board[x - 1][y].highlight = true;
                        gameMap.board[x - 2][y].highlight = true;
                        gameMap.board[x - 3][y].highlight = true;
                    }
                    if (gameMap.board.length - 1 - y >= 3 && y >= 3) {
                        gameMap.board[x][y + 1].highlight = true;
                        gameMap.board[x][y + 2].highlight = true;
                        gameMap.board[x][y + 3].highlight = true;
                        gameMap.board[x][y - 1].highlight = true;
                        gameMap.board[x][y - 2].highlight = true;
                        gameMap.board[x][y - 3].highlight = true;
                    }
                    if (gameMap.board.length - x <= 3) {
                        let limiteX = gameMap.board.length;
                        for (let i = x + 1; i < limiteX; i++) {
                            gameMap.board[i][y].highlight = true;
                        }
                        gameMap.board[x - 1][y].highlight = true;
                        gameMap.board[x - 2][y].highlight = true;
                        gameMap.board[x - 3][y].highlight = true;
                    }
                    if (x < 3) {
                        for (let i = x - 1; i >= 0; i--) {
                            gameMap.board[i][y].highlight = true;
                        }
                        gameMap.board[x + 1][y].highlight = true;
                        gameMap.board[x + 2][y].highlight = true;
                        gameMap.board[x + 3][y].highlight = true;
                    }
                    if (gameMap.board.length - y <= 3) {
                        let limiteY = gameMap.board.length;
                        for (let j = y; j < limiteY; j++) {
                            gameMap.board[x][j].highlight = true;
                        }
                        gameMap.board[x][y - 1].highlight = true;
                        gameMap.board[x][y - 2].highlight = true;
                        gameMap.board[x][y - 3].highlight = true;
                    }
                    if (y < 3) {
                        for (let n = y - 1; n >= 0; n--) {
                            gameMap.board[x][n].highlight = true;
                        }
                        gameMap.board[x][y + 1].highlight = true;
                        gameMap.board[x][y + 2].highlight = true;
                        gameMap.board[x][y + 3].highlight = true;
                    } else {
                        gameMap.board[x][y].highlight = false;
                    }
                }
            }
        }
    }

    playTurn() {


    }

    movePlayer() {
        /**
         * Gestion des mouvements des joueurs
         */
        for (let x = 0; x < gameMap.board.length; x++) { 
            for (let y = 0; y < gameMap.board.length; y++) { 
                $("#"+x+y ).click(function(e) {
                    if (gameMap.board[x][y].highlight == true) {
                        currentGame.currentPlayer.position.player = null;
                        gameMap.board[x][y].player = currentGame.currentPlayer;
                        currentGame.currentPlayer.position = gameMap.board[x][y];
                        currentGame.swapWeapon();
                        currentGame.setNextTurn();
                        currentGame.updateGame();
                    }
                    e.stopPropagation();
                    currentGame.playGame();
                });
            }
        }
    }    

    defend() {
        /**
         * Gestion de la défense des joueurs
         */
        for (let x = 0; x < gameMap.board.length; x++) { // FIXME: problème de détection des bordures
            for (let y = 0; y < gameMap.board.length; y++) { 
                if (gameMap.board[x][y].player == this.currentPlayer) {
                    if (gameMap.board[x+1][y].player == this.currentEnemy || gameMap.board[x-1][y].player == this.currentEnemy 
                    || gameMap.board[x][y+1].player == this.currentEnemy || gameMap.board[x][y-1].player == this.currentEnemy) {
                        this.currentPlayer.defense = true;
                        console.log(this.currentPlayer.name+" se défend");
                        currentGame.setNextTurn();
                        currentGame.updateGame();
                    }
                    else {
                        alert("Vous n'êtes pas à côté d'un ennemi");
                    }
                }
            }
        }
    }

    fight() {
        /**
         * Gestion du combat des joueurs
         */
        for (let x = 0; x < gameMap.board.length; x++) { // FIXME: problème de détection des bordures
            for (let y = 0; y < gameMap.board.length; y++) {
                if (gameMap.board[x][y].player == this.currentPlayer) {
                    if (gameMap.board[x+1][y].player == this.currentEnemy || gameMap.board[x-1][y].player == this.currentEnemy 
                    || gameMap.board[x][y+1].player == this.currentEnemy || gameMap.board[x][y-1].player == this.currentEnemy) {
                        this.currentEnemy.isTouched();
                        currentGame.setNextTurn();
                        currentGame.updateGame();
                    }
                    else {
                        alert("Vous n'êtes pas à côté d'un ennemi");
                    }
                }
            }
        }  
    }
    
    updateGame(){
        currentGame.resetHighlight();
        gameMap.printHtml();
        currentGame.highlight();
        gameMap.lightAccessibleCells();

    }

    gameOver() {
        if (currentGame.currentEnemy.health <= 0){
            this.endGame = true;
        }
    }

    playGame() {
        /**
         * Fin de la partie lorsque les PV d'un joueurs <= 0
         */
        if (this.endGame == false) {
            currentGame.movePlayer();
        }
        else {
            this.gameOver();
            alert("Bravo, " + currentPlayer.name + " gagne la partie !")
        }
    }
}



