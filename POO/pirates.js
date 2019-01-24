/**
 * Lancement des fonctions
 */

const weapon1 = new Weapon (1, "hook", 10, '<img src="img/hook.png" alt="hook"></img>');
const weapon2 = new Weapon (2, "knife", 20, '<img src="img/knife.png" alt="knife"></img>');
const weapon3 = new Weapon (3, "sword", 30, '<img src="img/sword.png" alt="sword"></img>');
const weapon4 = new Weapon (4, "harpoon", 40, '<img src="img/harpoon.png" alt="harpoon"></img>');
const weapon5 = new Weapon (5, "gun", 50, '<img src="img/gun.png" alt="gun"></img>');

var player1 = new Player ("Joueur 1", 100, weapon1, '<img src="img/player1.png" alt="player1"></img>');
var player2 = new Player ("Joueur 2", 100, weapon1, '<img src="img/player2.png" alt="player2"></img>');

const gameMap = new Map(10, 10);

gameMap.generate(); 

gameMap.getEmptyCells();

gameMap.placePlayers();

gameMap.placeWeapons();

gameMap.printHtml();


const currentGame = new Game();

currentGame.highlight();

gameMap.lightAccessibleCells();

currentGame.movePlayer();

