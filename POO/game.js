class Game{
    constructor(){
        this.endGame = false;
        this.currentPlayer = gameMap.currentPlayer;
        this.currentEnemy = gameMap.currentEnemy;
    }

    setNextTurn() {
        /**
         * Gestion du tour par tour
         */
        //FIXME: marche pas
        if (gameMap.currentplayer = player1){
            gameMap.currentPlayer = player2;
            gameMap.currentEnemy = player1;
            return currentPlayer;
        }
        if (gameMap.currentplayer = player2){
            gameMap.currentPlayer = player1;
            gameMap.currentEnemy = player2;
            return currentPlayer;
        }
    }
    

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




