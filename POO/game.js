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
            return currentGame.currentPlayer && currentGame.currentEnemy;
        }
        if (currentGame.currentPlayer == player2) {
            currentGame.currentPlayer = player1;
            currentGame.currentEnemy = player2;
            console.log("Joueur 1, à toi de jouer !");
            return currentGame.currentPlayer && currentGame.currentEnemy;
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

    mapLimit(xPlayer,yPlayer,direction) {
        /**
         * Définition des limites du plateau
         */
        let limit;
        switch (direction){
            case "left" :
                var y = yPlayer;
                var stop = false;
                var leftScope = yPlayer-3;
                while (y >= 0 && y >= leftScope && !stop) {
                    if (gameMap.board[xPlayer][y].barrel == true || gameMap.board[xPlayer][y].player == currentGame.currentEnemy) {
                        stop = true;
                    }
                    y--;
                }
                limit = y + 1;
                break;
            case "right" :
                var y = yPlayer;
                var stop = false;
                var rightScope = yPlayer+3;
                while (y < gameMap.board.length && y <= rightScope && !stop) {
                    if (gameMap.board[xPlayer][y].barrel == true || gameMap.board[xPlayer][y].player == currentGame.currentEnemy) {
                        stop = true;
                    }
                    y++;
                }
                limit = y - 1;
                break;
            case "up" :
                var x = xPlayer;
                var stop = false;
                var upScope = xPlayer-3;
                while (x >= 0 && x >= upScope && !stop) {
                    if (gameMap.board[x][yPlayer].barrel == true || gameMap.board[x][yPlayer].player == currentGame.currentEnemy) {
                        stop = true;
                    }
                    x--;
                }
                limit = x + 1;
                break;
            case "down" :
                var x = xPlayer;
                var stop = false;
                var downScope = xPlayer+3;
                while (x < gameMap.board.length && x <= downScope && !stop) {
                    if (gameMap.board[x][yPlayer].barrel == true || gameMap.board[x][yPlayer].player == currentGame.currentEnemy) {
                        stop = true;
                    } 
                    x++;
                }
                limit = x - 1;
                break;
            default :
                limit = -1;
                console.log(direction);
        }
        return limit;
    }

        highlight() {
            for (var x = 0; x < gameMap.board.length; x++) { 
                for (var y = 0; y < gameMap.board.length; y++) { 
                    if (gameMap.board[x][y].player == currentGame.currentPlayer) { 
                        let limitUp = this.mapLimit(x, y, "up"); 
                        for (var upX = x; upX >= limitUp; upX--) {gameMap.board[upX][y].highlight = true;}
                        let limitDown = this.mapLimit(x, y, "down");
                        for (var downX = x; downX <= limitDown; downX++) {gameMap.board[downX][y].highlight = true;}
                        let limitLeft = this.mapLimit(x, y, "left");
                        for (var leftY = y; leftY >= limitLeft; leftY--) {gameMap.board[x][leftY].highlight = true;}
                        let limitRight = this.mapLimit(x, y, "right");
                        for (var rightY = y; rightY <= limitRight; rightY++) {gameMap.board[x][rightY].highlight = true;}
                    }
                }
            }
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
                        currentGame.playGame();
                    }
                    e.stopPropagation();
                    //currentGame.playGame();
                });
            }
        }   
    }    

    defend() {
        /**
         * Gestion de la défense des joueurs
         */
        for (let x = 0; x < gameMap.board.length; x++) {
            for (let y = 0; y < gameMap.board.length; y++) { 
                if (gameMap.board[x][y].player == this.currentPlayer) {
                    if (x < 9){
                        if (gameMap.board[x+1][y].player == this.currentEnemy){
                            this.currentPlayer.defense = true;
                            console.log(this.currentPlayer.name+" se défend");
                        }
                    }
                    if (x > 0){
                        if (gameMap.board[x-1][y].player == this.currentEnemy){
                            this.currentPlayer.defense = true;
                            console.log(this.currentPlayer.name+" se défend");
                        }
                    }
                    if (y < 9){
                        if (gameMap.board[x][y+1].player == this.currentEnemy){
                            this.currentPlayer.defense = true;
                            console.log(this.currentPlayer.name+" se défend");
                        }
                    }
                    if (y > 0){
                        if (gameMap.board[x][y-1].player == this.currentEnemy){
                            this.currentPlayer.defense = true;
                            console.log(this.currentPlayer.name+" se défend");
                        }
                    }
                    else {
                        alert("Vous n'êtes pas à côté d'un ennemi");
                    }
                }
            }
        }
        currentGame.playGame(); 
    }

    fight() {
        /**
         * Gestion du combat des joueurs
         */
        for (let x = 0; x < gameMap.board.length; x++) {
            for (let y = 0; y < gameMap.board.length; y++) {
                if (gameMap.board[x][y].player == this.currentPlayer) {
                    if (x < 9){
                        if (gameMap.board[x+1][y].player == this.currentEnemy){
                            this.currentEnemy.isTouched();
                        }
                    }
                    if (x > 0){
                        if (gameMap.board[x-1][y].player == this.currentEnemy){
                            this.currentEnemy.isTouched();
                        }
                    }
                    if (y < 9){
                        if (gameMap.board[x][y+1].player == this.currentEnemy){
                            this.currentEnemy.isTouched();
                        }
                    }
                    if (y > 0){
                        if (gameMap.board[x][y-1].player == this.currentEnemy){
                            this.currentEnemy.isTouched();
                        }
                    }
                    else {
                        alert("Vous n'êtes pas à côté d'un ennemi");
                    }
                }
            }
        } 
        currentGame.playGame(); 
    }

    gameOver() {
        /**
         * Fin de la partie lorsque les PV d'un joueurs <= 0
         */
        if (currentGame.currentEnemy.health <= 0){
            this.endGame = true;
            alert("Bravo, " + currentGame.currentPlayer.name + " gagne la partie ! Cliquez sur OK pour relancer le jeu.");
            window.location.reload();
        }
    }

    playGame() {
        /**
         * Gestion du tour de chaque joueur
         */
        currentGame.gameOver();
        currentGame.swapWeapon();
        currentGame.setNextTurn();
        currentGame.resetHighlight();
        gameMap.printHtml();
        currentGame.highlight();
        gameMap.lightAccessibleCells();
        currentGame.movePlayer();
    }
}



