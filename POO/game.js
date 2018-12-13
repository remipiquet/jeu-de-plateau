class Game{
    constructor(){
        this.currentPlayer = null;
        this.map = new Map();
    }

}

function fight() {
    /**
     * Gestion du combat des joueurs
     */
    if (playersArray[currentPlayer].position.X == playersArray[currentEnemy].position.X+1 &&
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
}

function gameOver() {
    /**
     * Fin de la partie lorsque les PV d'un joueurs <= 0
     */

    let stop = false;
    if (currentPlayer.health <= 0){
        stop = true;
    }
    while (!stop){
        stop = Move();
        if (!stop){
        CurrentPlayer();
        }
    else {
        alert("Bravo, " + currentEnemy.name + " gagne la partie !")
        }
    } 
    

}

function turnByTurn() {
    /**
     * Gestion du tour par tour
     */
    
    function CurrentPlayer(){
        if (currentPlayer < playersArray.length){
            currentPlayer ++;
        }
        else {
            currentPlayer = 0;
        }
    } 

}
