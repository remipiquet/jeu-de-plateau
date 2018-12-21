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
        //FIXME: marche pas
        if (this.currentplayer = player1){
            this.currentPlayer = player2;
            this.currentEnemy = player1;
        }
        else {
            this.currentPlayer = player1;
            this.currentEnemy = player2;
        }
        return this.currentPlayer
    }
    
    /*highlight() { //FIXME: marche pas
        for (let x = 0; x < gameMap.board; x++) { 
            for (let y = 0; y < gameMap.board; y++) { 
                if (gameMap.board[x][y] == currentPlayer.position) { 
                    gameMap.board[x+1][y].highlight == true; 
                    gameMap.board[x+2][y].highlight == true; 
                    gameMap.board[x+3][y].highlight == true; 

                    gameMap.board[x-1][y].highlight == true; 
                    gameMap.board[x-2][y].highlight == true; 
                    gameMap.board[x-3][y].highlight == true; 

                    gameMap.board[x][y+1].highlight == true; 
                    gameMap.board[x][y+2].highlight == true; 
                    gameMap.board[x][y+3].highlight == true; 

                    gameMap.board[x][y-1].highlight == true; 
                    gameMap.board[x][y-2].highlight == true; 
                    gameMap.board[x][y-3].highlight == true; 
                }
                else {
                    gameMap.board[x][y].highlight == false; 
                }
            }
        }
    }*/

    swapWeapon() {
        /**
         * Echange l'arme de currentPlayer contre celle qui est sur sa case
         */
    }

    movePlayer() {
        /**
         * Gestion des mouvements des joueurs
         */
        //TODO: Appeler swapWeapon quand arme sur le passage

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

    gameOver() {
        /**
         * Fin de la partie lorsque les PV d'un joueurs <= 0
         */
        /*if (currentPlayer.health <= 0){
            this.endGame = true;
            alert("Bravo, " + currentEnemy.name + " gagne la partie !")
        }*/
    }
}

//TODO: A passer dans pirates.js ?

let currentGame = new Game();

//currentGame.highlight();




