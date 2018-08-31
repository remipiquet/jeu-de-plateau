// initialisation du jeu
var myGame = new Board(5, 4);


// initialisation du joueur 1

/*player1[X][Y] = Math.floor(Math.random()*(emptyCells));
console.log(player1);*/
//myGame.contenuCase(1, 2);
//myGame.afficheTout();
//myGame.getEmptyCells();

var boardEmptyCells = myGame.getEmptyCells();

var player1Position = Math.floor(Math.random()*(boardEmptyCells.length));
console.log(boardEmptyCells[player1Position]);

var player1Json = boardEmptyCells[player1Position];
console.log(player1Json);
myGame.board[player1Json.emptyX][player1Json.emptyY] = 1;


var found = false;

while (!found){
var player2Position = Math.floor(Math.random()*(boardEmptyCells.length));
console.log("démarrage de la boucle")
var player2Json = boardEmptyCells[player2Position];

  if (player1Position != player2Position) {
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

myGame.afficheTout();

/*
// à refaire avec myPosition comme ça on peut faire player1.myPosition
whereIsPlayer1 = function() {
  player1Position = Math.floor(Math.random()*(emptyCells));
};
      console.log("Le joueur 1 est en position :"+player1Position);
*/
