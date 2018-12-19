class Game{
    constructor(){
        this.currentPlayer = player1;
        this.currentEnemy = player2;
        this.endGame = false;
    }

    setNextTurn() {
        /**
         * Gestion du tour par tour
         */
        if (this.currentplayer = player1){
            this.currentPlayer = player2;
            this.currentEnemy = player1;
        }
        else {
            this.currentPlayer = player1;
            this.currentEnemy = player2;
        }
    }
    
    testHighlight() {
        let thisPlayer = this.currentPlayer;
        let playerPos = thisPlayer.position;
        let posId = playerPos.id;
        
        $('highlight').css('color', 'orange');
        //if (posId)
    }
    whereIsPlayer() {
        console.log(currentPlayer.name + " est en X " + currentPlayer.X + " Y " + currentPlayer.Y);
    }
    //movePlayer() {
        /**
         * Gestion des mouvements des joueurs
         */
        //TODO Appeler swapWeapon quand arme sur le passage
        
        
    //CellIsNoBarrel(x, y) { // Accessibilité des cases
    //  gameMap.getEmptyCells();
    //}
    

    //}

    
    
    // Pour bouger en bas
    MoveDown(numCells) {
        player1.positionX = player1.positionX + numCells;
        gameMap.printHtml();
        }

    
    
    // Pour bouger en haut
    /*MoveUp(numPlayer, numCells) {
    if (CellIsNoRock(playersArray[numPlayer].position.X - numCells, playersArray[numPlayer].position.Y)) {
        playersArray[numPlayer].position.X = playersArray[numPlayer].position.X - numCells;
        myGame.board[player1Json.X][player1Json.Y] = player1; 
        myGame.board[player2Json.X][player2Json.Y] = player2; 
        DrawGameBoard();
        }
    }
    
    // Pour bouger à gauche
    MoveLeft(numPlayer, numCells) {
    if (CellIsNoRock(playersArray[numPlayer].position.X, playersArray[numPlayer].position.Y - numCells)) {
        playersArray[numPlayer].position.Y = playersArray[numPlayer].position.Y - numCells;
        myGame.board[player1Json.X][player1Json.Y] = player1; 
        myGame.board[player2Json.X][player2Json.Y] = player2;
        DrawGameBoard();
        }
    }*/



    /*defend() {
        /**
         * Gestion du statut de défense des joueurs
         */
//}

    /*fight() {
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
            }
    }*/

    /*gameOver() {
        /**
         * Fin de la partie lorsque les PV d'un joueurs <= 0
         */
        /*if (currentPlayer.health <= 0){
            this.endGame = true;
            alert("Bravo, " + currentEnemy.name + " gagne la partie !")
        }
    }*/
};

let currentGame = new Game();
let currentPlayer = player1;
let movedown = currentGame.MoveDown();



/* ZONE DE TEST
let thisPlayer = currentGame.currentPlayer;
let playerPos = thisPlayer.position;
let posId = playerPos.id;
let pos1R = posId ++;

let myBoard = gameMap.board;
let */


