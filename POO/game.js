class Game{
    constructor(){
        this.endGame = false;
    }

    setNextTurn() {
        /**
         * Gestion du tour par tour
         */
        //FIXME: marche au premier tour mais tourne en boucle après
        if (gameMap.currentPlayer == player1){
            gameMap.currentPlayer = player2;
            gameMap.currentEnemy = player1;
            console.log("Joueur 2, à toi de jouer !");
            currentGame.movePlayer();
        }
        else {
            gameMap.currentPlayer = player1;
            gameMap.currentEnemy = player2;
            console.log("Joueur 1, à toi de jouer !");
            currentGame.movePlayer();
        }
    }
    

    swapWeapon() {
        /**
         * Echange l'arme de currentPlayer contre celle qui est sur sa case
         */
        for (let x = 0; x < gameMap.board.length; x++) { 
            for (let y = 0; y < gameMap.board.length; y++) { 
                if (gameMap.board[x][y] == gameMap.currentPlayer.position && gameMap.board[x][y].weapon != null){
                    var weaponBuffer = gameMap.board[x][y].weapon;
                    gameMap.board[x][y].weapon = gameMap.currentPlayer.weapon;
                    gameMap.currentPlayer.weapon = weaponBuffer;
                }
            }
        }
    }

    lightAccessibleCells() {
        let myBoard = gameMap.board;
        for (let x = 0; x < gameMap.board.length; x++) { 
            for (let y = 0; y < gameMap.board.length; y++) { 
                if (myBoard[x][y].highlight == true && myBoard[x][y].barrel == false && myBoard[x][y].player == null) {
                    $('#'+x+y).addClass("light");
                    }
            }
        }
    }

    movePlayer() {
        /**
         * Gestion des mouvements des joueurs
         */
        //TODO: Appeler swapWeapon quand arme sur le passage
        for (let x = 0; x < gameMap.board.length; x++) { 
            for (let y = 0; y < gameMap.board.length; y++) { 
                $( "#"+x+y ).click(function(e) {
                    if (gameMap.board[x][y].highlight == true) {
                        gameMap.currentPlayer.position.player = null;
                        gameMap.board[x][y].player = gameMap.currentPlayer;
                        gameMap.currentPlayer.position = gameMap.board[x][y];
                        currentGame.swapWeapon();
                        currentGame.setNextTurn();
                        gameMap.printHtml();
                        gameMap.highlight();
                        currentGame.lightAccessibleCells();
                    }
                    e.stopPropagation();
                });
            }
        }
        //currentGame.gameOver();
    }    

    defend() {
        /**
         * Gestion de la défense des joueurs
         */
    }

    fight() {
        /**
         * Gestion du combat des joueurs
         */
        /*if (playersArray[currentPlayer].position.X == playersArray[currentEnemy].position.X+1 &&
            playersArray[currentPlayer].position.Y == playersArray[currentEnemy].position.Y ||
            playersArray[currentPlayer].position.X == playersArray[currentEnemy].position.X-1 &&
            playersArray[currentPlayer].position.Y == playersArray[currentEnemy].position.Y ||
            playersArray[currentPlayer].position.Y == playersArray[currentEnemy].position.Y+1 &&
            playersArray[currentPlayer].position.X == playersArray[currentEnemy].position.X ||
            playersArray[currentPlayer].position.Y == playersArray[currentEnemy].position.Y-1 &&
            playersArray[currentPlayer].position.X == playersArray[currentEnemy].position.X){
                playersArray[currentPlayer].attack(playersArray[currentEnemy]);
                console.log(playersArray[currentPlayer].name + " inflige " + playersArray[currentPlayer].force + " points de dégats");
                console.log("Il reste " + playersArray[currentEnemy].health + " points de vie à " + playersArray[currentEnemy].name);
            }  
        else {
            alert("Vous n'êtes pas à côté d'un ennemi !")
            }*/   
    }

    playGame() {
        /**
         * Fin de la partie lorsque les PV d'un joueurs <= 0
         */
        if (gameMap.currentEnemy.health > 0){
            currentGame.movePlayer();
        }
        else {
            this.endGame = true;
            alert("Bravo, " + currentPlayer.name + " gagne la partie !")
        }
    }

    testClick() {
        for (let x = 0; x < gameMap.board.length; x++) { 
            for (let y = 0; y < gameMap.board.length; y++) { 
                $( "#"+x+y ).click(function(e) {
                    if (gameMap.board[x][y].highlight == true) {
                        gameMap.currentPlayer.position.player = null;
                        gameMap.board[x][y].player = gameMap.currentPlayer;
                        gameMap.currentPlayer.position = gameMap.board[x][y];
                        currentGame.setNextTurn();
                        gameMap.printHtml();
                    }
                    e.stopPropagation();
                });
            }
        }

    }
}

//TODO: A passer dans pirates.js ?

let currentGame = new Game();

//currentGame.gameOver();

currentGame.movePlayer();

currentGame.lightAccessibleCells();

//currentGame.highlight();




