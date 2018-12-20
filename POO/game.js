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
        if(this.currentPlayer = player2){
            this.currentPlayer = player1;
            this.currentEnemy = player2;
        }
    }
    
    /*testHighlight() {
        let thisPlayer = this.currentPlayer;
        let playerPos = thisPlayer.position;
        let posId = playerPos.id;
        posId +1 == $(caseContent).css('color', 'orange');
        
        //if (posId)
    }*/

    getEmptyCells() {
        /**
         * Récupération des cases vides
         */
        let emptyCells = new Array(); // on crée un tableau
        for (let x = 0; x < gameMap.mapSize; x++) { // on parcours l'axe X
            for (let y = 0; y < gameMap.mapSize; y++) { // on parcours l'axe Y
                if (gameMap.board[x][y].barrel == false) { // si les cellules parcourues du tableau sont vides...
                    emptyCells.push({
                        X: x,
                        Y: y
                    }); // ...stockage en JSON des cellules vides
                }
            }
        }
        //console.log(emptyCells);
        return emptyCells;
    };
    movePlayer() {
        /**
         * Gestion des mouvements des joueurs
         */
        //TODO Appeler swapWeapon quand arme sur le passage

    }
    

    defend() {
    
    }

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




