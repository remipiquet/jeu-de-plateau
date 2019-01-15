/**
 * Lancement des fonctions
 */

const gameMap = new Map(10, 10);

gameMap.generate(); 

gameMap.getEmptyCells();

gameMap.placePlayers();

gameMap.placeWeapons();

//gameMap.highlight();

gameMap.printHtml();



const currentGame = new Game();

//currentGame.gameOver();

//currentGame.movePlayer();

currentGame.highlight();

gameMap.lightAccessibleCells();

//currentGame.endGame();

//currentGame.highlight();

currentGame.playGame();

/*
if (currentGame.currentEnemy.health > 0) {
    currentGame.movePlayer();
}
else {
    currentGame.endGame == true
    alert("Bravo, " + currentPlayer.name + " gagne la partie !")
}
*/
