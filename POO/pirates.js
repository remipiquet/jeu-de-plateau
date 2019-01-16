/**
 * Lancement des fonctions
 */

const gameMap = new Map(10, 10);

gameMap.generate(); 

gameMap.getEmptyCells();

gameMap.placePlayers();

gameMap.placeWeapons();

gameMap.printHtml();


const currentGame = new Game();

currentGame.highlight();

gameMap.lightAccessibleCells();

currentGame.playGame();

