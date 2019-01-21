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



    /*barrelUnlight() {
        let mapLimite = gameMap.board.length;
        for (var x = 0; x < gameMap.board.length; x++) {
            for (var y = 0; y < gameMap.board.length; y++) {
                if (gameMap.board[x][y].player == this.currentPlayer && gameMap.board[x+1][y].barrel == true) {
                    

    }*/

    mapLimit(xPlayer,yPlayer,direction) {
        /**
         * Définition des limites du plateau
         */
        let limit;
        switch (direction){
            case "left" :
                var y = yPlayer;
                var stop = false;
                while (y >= 0 && !stop) {
                    if (gameMap.board[xPlayer][y].barrel == true || gameMap.board[xPlayer][y].player == gameMap.currentEnemy) {
                        stop = true;
                    }
                    y--;
                }
                limit = y + 1;
                break;
            case "right" :
                var y = yPlayer;
                var stop = false;
                while (y < gameMap.board.length && !stop) {
                    if (gameMap.board[xPlayer][y].barrel == true || gameMap.board[xPlayer][y].player == gameMap.currentEnemy) {
                        stop = true;
                    }
                    y++;
                }
                limit = y - 1;
                break;
            case "up" :
                var x = xPlayer;
                var stop = false;
                while (x >= 0 && !stop) {
                    if (gameMap.board[x][yPlayer].barrel == true || gameMap.board[x][yPlayer].player == gameMap.currentEnemy) {
                        stop = true;
                        console.log("obstacle détecté en "+x)
                    }
                    x--;
                }
                limit = x + 1;
                break;
            case "down" :
                var x = xPlayer;
                var stop = false;
                while (x < gameMap.board.length && !stop) {
                    if (gameMap.board[x][yPlayer].barrel == true || gameMap.board[x][yPlayer].player == gameMap.currentEnemy) {
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
                    if (gameMap.board[x][y].player == this.currentPlayer) {
                        let limitUp = this.mapLimit(x,y,"up");
                        for (var upX = x; upX > limitUp; upX--) {
                            gameMap.board[upX][y].highlight = true;
                            console.log("light up " + upX)
                        }
                        let limitDown = this.mapLimit(x, y, "down");
                        for (var downX = x; downX > limitDown; downX--) {
                            gameMap.board[downX][y].highlight = true;
                            console.log("light down " + downX)
                        }
                        let limitLeft = this.mapLimit(x, y, "left");
                        for (var leftY = y; leftY > limitLeft; leftY--) {
                            gameMap.board[x][leftY].highlight = true;
                            console.log("light left " + leftY)
                        }
                        let limitRight = this.mapLimit(x, y, "right");
                        for (var rightY = y; rightY > limitRight; rightY--) {
                            gameMap.board[x][leftY].highlight = true;
                            console.log("light right " + rightY)
                        }
                    }
                    // A finir
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



