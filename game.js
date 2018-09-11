// ****** Initialisation du jeu ******

var myGame = new Board(5, 4);


// ****** Placement des joueurs sur le plateau ******

var boardEmptyCells = myGame.getEmptyCells(); // On prend les cases vides

var player1Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On place au hasard le joueur 1 dans une de ces cases vides
//console.log(boardEmptyCells[player1Position]);

var player1Json = boardEmptyCells[player1Position]; // On stocke le placement du joueur 1 en JSON dans ces cases vides
//console.log(player1Json);
myGame.board[player1Json.emptyX][player1Json.emptyY] = player1.name; // On donne à la case le résultat 1 (pour signifier le joueur 1 sur le plateau)


var found = false; // condition de la boucle while

while (!found){ // tant que found n'est pas égal à "true"...
  var player2Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides
  var player2Json = boardEmptyCells[player2Position]; // On stocke le placement du joueur 2 en JSON dans ces cases vides

    if (player1Position != player2Position) { // On vérifie que J1 et J2 ne soient pas sur la même case
      if (player1Json.emptyX != player2Json.emptyX && player1Json.emptyY != player2Json.emptyY) { // On vérifie qu'ils ne soient pas sur le même axe pour éviter qu'ils soient côte à côte
          myGame.board[player2Json.emptyX][player2Json.emptyY] = player2.name;
            found = true;
          }
    }
}

// ****** Placement des armes sur le plateau ******

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

// Déplacement des joueurs
var whereIsPlayer1 = console.log("Le joueur un est en X "+player1Json.emptyX+" Y "+player1Json.emptyY); // On récupère la position du joueur en cours
// On vérifie les cases acccessibles autour de lui (de x-3 à x+3 et de y-3 à y+3)
// On valide la case choisie par l'utilisateur et on modifie la position du joueur
// On vérifie si les deux joueurs sont côte à côte

// test de déplacement
var moveLeft = player1Json.emptyX ++;
var whereIsPlayer1 = console.log("Le joueur un est en X "+player1Json.emptyX+" Y "+player1Json.emptyY);
