// initialisation du jeu
var myGame = new Board(5, 4);


// initialisation du joueur 1

/*player1[X][Y] = Math.floor(Math.random()*(emptyCells));
console.log(player1);*/
//myGame.contenuCase(1, 2);
//myGame.afficheTout();
//myGame.getEmptyCells();

var boardEmptyCells = myGame.getEmptyCells(); // On prend les cases vides

var player1Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On place au hasard le joueur 1 dans une de ces cases vides
//console.log(boardEmptyCells[player1Position]);

var player1Json = boardEmptyCells[player1Position]; // On stocke le placement du joueur 1 en JSON dans ces cases vides
//console.log(player1Json);
myGame.board[player1Json.emptyX][player1Json.emptyY] = 1; // On donne à la case le résultat 1 (pour signifier le joueur 1 sur le plateau)


var found = false; // condition de la boucle while

while (!found){
  var player2Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides
  var player2Json = boardEmptyCells[player2Position]; // On stocke le placement du joueur 2 en JSON dans ces cases vides

    if (player1Position != player2Position) { // On vérifie que les joueurs soient éloignés d'au moins 1 case
      if (player1Json.emptyX == player2Json.emptyX) {
        if (player2Json.emptyY != player1Json.emptyY + 1 && player2Json.emptyY != player1Json.emptyY - 1); {
          myGame.board[player2Json.emptyX][player2Json.emptyY] = 2;
            found = true;
          }
      }
      if (player1Json.emptyY == player2Json.emptyY) {
        if (player2Json.emptyX != player1Json.emptyX + 1 && player2Json.emptyX != player1Json.emptyX - 1); {
          myGame.board[player2Json.emptyX][player2Json.emptyY] = 2;
            found = true;
        }
      }
    }
}


var boardEmptyCells = myGame.getEmptyCells();
/*var weaponFound = false;

while (!weaponFound){
  var

}*/


myGame.afficheTout();


/*
// à refaire avec myPosition comme ça on peut faire player1.myPosition
whereIsPlayer1 = function() {
  player1Position = Math.floor(Math.random()*(emptyCells));
};
      console.log("Le joueur 1 est en position :"+player1Position);
*/
