class Game{
    constructor(){
        this.gameMap = new Map(10, 10);
        this.currentPlayer = player1;
        this.currentEnemy = player2;
        this.endGame = false;
    }

    setNextTurn() {
        /**
         * Gestion du tour par tour
         */
        if (currentGame.currentPlayer == player1){ // TODO: Remplacer tous les currentGame par this
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
        for (let x = 0; x < this.gameMap.board.length; x++) {
            for (let y = 0; y < this.gameMap.board.length; y++) {
                if (this.gameMap.board[x][y] == currentGame.currentPlayer.position && this.gameMap.board[x][y].weapon != null) { //TODO: changer currentPlayer.position en getter
                    var weaponBuffer = this.gameMap.board[x][y].weapon;
                    this.gameMap.board[x][y].weapon = currentGame.currentPlayer.weapon; // changer en getter
                    currentGame.currentPlayer.weapon = weaponBuffer; // changer en getter
                }
            }
        }
    }

    resetHighlight() {
        /**
         * Remise à zéro du surlignage
         */
        for (var x = 0; x < this.gameMap.board.length; x++) {
            for (var y = 0; y < this.gameMap.board.length; y++) {
                this.gameMap.board[x][y].highlight = false;
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
                    if (this.gameMap.board[xPlayer][y].barrel == true || this.gameMap.board[xPlayer][y].player == currentGame.currentEnemy) {
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
                while (y < this.gameMap.board.length && y <= rightScope && !stop) {
                    if (this.gameMap.board[xPlayer][y].barrel == true || this.gameMap.board[xPlayer][y].player == currentGame.currentEnemy) {
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
                    if (this.gameMap.board[x][yPlayer].barrel == true || this.gameMap.board[x][yPlayer].player == currentGame.currentEnemy) {
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
                while (x < this.gameMap.board.length && x <= downScope && !stop) {
                    if (this.gameMap.board[x][yPlayer].barrel == true || this.gameMap.board[x][yPlayer].player == currentGame.currentEnemy) {
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
            /**
             * Définition des cases sur lesquelles le joueur en cours peut se déplacer
             */
            for (var x = 0; x < this.gameMap.board.length; x++) {
                for (var y = 0; y < this.gameMap.board.length; y++) {
                    if (this.gameMap.board[x][y].player == currentGame.currentPlayer) {
                        let limitUp = this.mapLimit(x, y, "up"); 
                        for (var upX = x; upX >= limitUp; upX--) {
                            this.gameMap.board[upX][y].highlight = true;
                        } // A remplacer par set Highlight
                        let limitDown = this.mapLimit(x, y, "down");
                        for (var downX = x; downX <= limitDown; downX++) {
                            this.gameMap.board[downX][y].highlight = true;
                        }
                        let limitLeft = this.mapLimit(x, y, "left");
                        for (var leftY = y; leftY >= limitLeft; leftY--) {
                            this.gameMap.board[x][leftY].highlight = true;
                        }
                        let limitRight = this.mapLimit(x, y, "right");
                        for (var rightY = y; rightY <= limitRight; rightY++) {
                            this.gameMap.board[x][rightY].highlight = true;
                        }
                    }
                }
            }
        }

    movePlayer() {
        /**
         * Gestion des mouvements des joueurs
         */
        for (let x = 0; x < this.gameMap.board.length; x++) {
            for (let y = 0; y < this.gameMap.board.length; y++) {
                $("#"+x+y ).click(function(e) {
                    if (currentGame.gameMap.board[x][y].highlight == true) {
                        currentGame.currentPlayer.position.player = null;
                        currentGame.gameMap.board[x][y].player = currentGame.currentPlayer;
                        currentGame.currentPlayer.position = currentGame.gameMap.board[x][y];
                        currentGame.swapWeapon();
                        currentGame.playGame();
                    }
                    e.stopPropagation();
                });
            }
        }   
    }    

    defend() { // TODO: A passer dans player.js
        /**
         * Gestion de la défense des joueurs
         */
        for (let x = 0; x < this.gameMap.board.length; x++) {
            for (let y = 0; y < this.gameMap.board.length; y++) {
                if (this.gameMap.board[x][y].player == this.currentPlayer) {
                    if (x < 9){
                        if (this.gameMap.board[x + 1][y].player == this.currentEnemy) {
                            this.currentPlayer.isInDefense();
                            break;
                        }
                    }
                    if (x > 0){
                        if (this.gameMap.board[x - 1][y].player == this.currentEnemy) {
                            this.currentPlayer.isInDefense();
                            break;
                        }
                    }
                    if (y < 9){
                        if (this.gameMap.board[x][y + 1].player == this.currentEnemy) {
                            this.currentPlayer.isInDefense();
                            break;
                        }
                    }
                    if (y > 0){
                        if (this.gameMap.board[x][y - 1].player == this.currentEnemy) {
                            this.currentPlayer.isInDefense();
                            break;
                        }
                    }
                }
            }
        }
    }

    fight() { // TODO: A passer dans player.js
        /**
         * Gestion du combat des joueurs
         */
        for (let x = 0; x < this.gameMap.board.length; x++) {
            for (let y = 0; y < this.gameMap.board.length; y++) {
                if (this.gameMap.board[x][y].player == this.currentPlayer) {
                    if (x < 9){
                        if (this.gameMap.board[x + 1][y].player == this.currentEnemy) {
                            this.currentEnemy.isTouched();
                            break;
                        }
                    }
                    if (x > 0){
                        if (this.gameMap.board[x - 1][y].player == this.currentEnemy) {
                            this.currentEnemy.isTouched();
                            break;
                        }
                    }
                    if (y < 9){
                        if (this.gameMap.board[x][y + 1].player == this.currentEnemy) {
                            this.currentEnemy.isTouched();
                            break;
                        }
                    }
                    if (y > 0){
                        if (this.gameMap.board[x][y - 1].player == this.currentEnemy) {
                            this.currentEnemy.isTouched();
                            break;
                        }
                    }
                }
            }
        } 
        
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
        currentGame.setNextTurn();
        currentGame.resetHighlight();
        this.gameMap.printHtml();
        currentGame.highlight();
        this.gameMap.lightAccessibleCells();
        currentGame.movePlayer();
    }
}



