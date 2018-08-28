// initialisation du jeu
var myGame = new Board(5, 4);


// initialisation du joueur 1

/*player1[X][Y] = Math.floor(Math.random()*(emptyCells));
console.log(player1);*/
//myGame.contenuCase(1, 2);
//myGame.afficheTout();
//myGame.getEmptyCells();

board.prototype.whereIsPlayer1 = function() {
  player1Position = Math.floor(Math.random()*(emptyCells));
};
      console.log("Le joueur 1 est en position :"+player1Position);
