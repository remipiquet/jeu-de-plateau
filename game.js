/*********************************************
*           Initialisation du jeu            *
*********************************************/

var myGame = new Board(5, 4);

/*********************************************
*    Placement des joueurs sur le plateau    *
*********************************************/

var players = []; // Création d'un tableau pour les joueurs

for (var i = 0; i<2; i++) {
  var index = parseInt(i) + 1;
  var player = new Player('Joueur '  + index, 100, 10, 'fist');
  players.push(player);
}

var boardEmptyCells = myGame.getEmptyCells(); // On prend les cases vides

players[0].position = boardEmptyCells[Math.floor(Math.random()*(boardEmptyCells.length))]; // On place le joueur 1 dans une de ces cases vides (en Json)

var found = false; // Placement du joueur 2
while (!found) { // Tant que found vaut false
  players[1].position = boardEmptyCells[Math.floor(Math.random()*(boardEmptyCells.length))]; // On place le joueur 2 dans une case vide
  if (players[1].position.emptyX != players[0].position.emptyX && players[1].position.emptyY != players[0].position.emptyY) { // Si J1&J2 ont des X&Y différents
    found = true; // On valide la condition et J2 est placé
  }
}

console.log(players);


/********************************************
*     Placement des armes sur le plateau    *
********************************************/

// Placement de l'arme 1 (Couteau)
// boucle for à mettre en place pour ne pas répéter à chaque arme
var boardEmptyCells = myGame.getEmptyCells(); // On reprend les cases vides cette fois sans celles occupées par les joueurs

var weapon1Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides

var weapon1Json = boardEmptyCells[weapon1Position]; // On stocke le placement de l'arme 1 en JSON dans ces cases vides

  myGame.board[weapon1Json.emptyX][weapon1Json.emptyY] = weapon1.name; // On donne à la case le résultat 5 (pour signifier l'arme n°1 sur le plateau)


// Placement de l'arme 2 (Fourche)
var boardEmptyCells = myGame.getEmptyCells(); // On reprend les cases vides

var weapon2Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides

var weapon2Json = boardEmptyCells[weapon2Position]; // On stocke le placement de l'arme 2 en JSON dans ces cases vides

  myGame.board[weapon2Json.emptyX][weapon2Json.emptyY] = weapon2.name; // On donne à la case le résultat 6 (pour signifier l'arme n°2 sur le plateau)


// Placement de l'arme 3 (Flingue)
var boardEmptyCells = myGame.getEmptyCells(); // On reprend les cases vides

var weapon3Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides

var weapon3Json = boardEmptyCells[weapon3Position]; // On stocke le placement de l'arme 3 en JSON dans ces cases vides

  myGame.board[weapon3Json.emptyX][weapon3Json.emptyY] = weapon3.name; // On donne à la case le résultat 7 (pour signifier l'arme n°3 sur le plateau)


// Placement de l'arme 4 (Lance-flame)
var boardEmptyCells = myGame.getEmptyCells(); // On reprend les cases vides

var weapon4Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides

var weapon4Json = boardEmptyCells[weapon4Position]; // On stocke le placement de l'arme 2 en JSON dans ces cases vides

  myGame.board[weapon4Json.emptyX][weapon4Json.emptyY] = weapon4.name; // On donne à la case le résultat 8 (pour signifier l'arme n°2 sur le plateau)



// Commande pour voir le plateau en textuel
myGame.afficheTout();

/***************************************
*       Gestion du tour par tour       *
***************************************/

function CurrentPlayer(){

}


/***************************************
*        Déplacement des joueurs       *
***************************************/

/**
 * Check if the given position is a rock
 * @param int x
 * @param int y
 * @return boolean
 */
function noAccess(x,y){
  return myGame.board[x][y] == 0;
}

function endBoard(x,y){
  return myGame.board[x][y] == undefined;
}

function whereIsPlayer(index) {
  var player = players[index];
  console.log(player.name + " est en X "+player.position.emptyX+" Y "+player.position.emptyY);
}
whereIsPlayer(0);
whereIsPlayer(1);
// On vérifie les cases acccessibles autour de lui (de x-3 à x+3 et de y-3 à y+3)
// On valide la case choisie par l'utilisateur et on modifie la position du joueur
// On vérifie si les deux joueurs sont côte à côte

var numCells = 0;

// Pour bouger à droite
function MoveRight(index, numCells) {
  if (noAccess(players[index].position.emptyX+numCells,players[index].position.emptyY)){
    players[index].position.emptyX = players[index].position.emptyX+numCells;
  //  player1Json.emptyX = player1Json.emptyX+3  ---> pour bouger de 3 cases
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger à gauche
function MoveLeft(index, numCells) {
  if (noAccess(players[index].position.emptyX-numCells,players[index].position.emptyY)){
    players[index].position.emptyX = players[index].position.emptyX-numCells;
  }
    whereIsPlayer(0);
    whereIsPlayer(1);
}

// Pour bouger en haut
function MoveUp(index, numCells) {
  if (noAccess(players[index].position.emptyX,players[index].position.emptyY-1)){
    players[index].position.emptyX = players[index].position.emptyY-numCells;
  }
    whereIsPlayer(0);
    whereIsPlayer(1);
}

// Pour bouger en bas
function MoveDown(index, numCells) {
  if (noAccess(players[index].position.emptyX,players[index].position.emptyY+1)){
    players[index].position.emptyX = players[index].position.emptyY+numCells;
  }
    whereIsPlayer(0);
    whereIsPlayer(1);
}
