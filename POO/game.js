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
        }
        else {
            gameMap.currentPlayer = player1;
            gameMap.currentEnemy = player2;
            console.log("Joueur 1, à toi de jouer !");
        }
        return gameMap.currentPlayer;
    }
    

    swapWeapon() {
        /**
         * Echange l'arme de currentPlayer contre celle qui est sur sa case
         */
        for (var x = 0; x < gameMap.board.length; x++) { 
            for (var y = 0; y < gameMap.board.length; y++) { 
                if (gameMap.board[x][y].weapon != null){
                    let weaponBuffer = gameMap.board[x][y].weapon;
                    gameMap.board[x][y].weapon = gameMap.currentPlayer.weapon; // FIXME: la nouvelle arme ne s'affiche pas sur le plateau
                    gameMap.currentPlayer.weapon = weaponBuffer;
                }
            }
        }
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
        if (gameMap.currentEnemy.health <= 0){
            this.endGame = true;
            alert("Bravo, " + currentPlayer.name + " gagne la partie !")
        }
    }
}

//TODO: A passer dans pirates.js ?

let currentGame = new Game();

//currentGame.highlight();




