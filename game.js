// initialisation du jeu
var myGame = new Board(5, 4);


// initialisation du joueur 1
var player1 = Object.create(player);
player1[x][y] = Math.floor(Math.random() * (emptyCells));

//myGame.contenuCase(1, 2);
//myGame.afficheTout();
//myGame.getEmptyCells();
