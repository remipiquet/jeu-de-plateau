/*********************************************
 *           Initialisation du jeu            *
 *********************************************/

var myGame = new Board(5, 4);

/*********************************************
 *    Placement des joueurs sur le plateau    *
 *********************************************/

var playersArray = []; // Création d'un tableau pour les joueurs
var nbPlayers = 2;

for (var i = 0; i < nbPlayers; i++) {
  var index = parseInt(i) + 1;
  var player = new Player('Joueur ' + index, 100, 10, 'fist');
  playersArray.push(player);
}

var accessibleCells = myGame.getEmptyCells();

// pour chaque joueur on place le joueur de maniere a ne pas etre a coté d'un autre joueur

for (var indexPlayer = 0; indexPlayer < 2; indexPlayer++) {
  playersArray[indexPlayer].position = accessibleCells[Math.floor(Math.random() * (accessibleCells.length))];
  var player1 = playersArray[0].position
  myGame.board[player1.X][player1.Y] = "Joueur 1";

  //var player2 = playersArray[1].position     // Pourquoi ça ne marche pas ???
  //myGame.board[player2.X][player2.Y] = "Joueur 2";
  


  // On rend inacccessible les cases qui sont proches de player x et sa case
  var inaccessibleCells = new Array();
  inaccessibleCells.push(playersArray[indexPlayer].position);

  if (playersArray[indexPlayer].position.X - 1 >= 0) {
    inaccessibleCells.push({
      X: playersArray[indexPlayer].position.X - 1,
      Y: playersArray[indexPlayer].position.Y
    });
  }
  if (playersArray[indexPlayer].position.X + 1 <= accessibleCells.length) {
    inaccessibleCells.push({
      X: playersArray[indexPlayer].position.X + 1,
      Y: playersArray[indexPlayer].position.Y
    });
  }
  if (playersArray[indexPlayer].position.Y - 1 >= 0) {
    inaccessibleCells.push({
      X: playersArray[indexPlayer].position.X,
      Y: playersArray[indexPlayer].position.Y - 1
    });
  }
  if (playersArray[indexPlayer].position.X + 1 <= accessibleCells.length) {
    inaccessibleCells.push({
      X: playersArray[indexPlayer].position.X,
      Y: playersArray[indexPlayer].position.Y + 1
    });
  }

  // on enleve les cases inaccessibles des cases accessibles
  for (var j = 0; j < accessibleCells.length; j++) {
    for (var k = 0; k < inaccessibleCells.length; k++) {
      //console.log('j '+j);  //debug
      if (j >= 0 && accessibleCells.length > j) {
        if (inaccessibleCells[k].X == accessibleCells[j].X && inaccessibleCells[k].Y == accessibleCells[j].Y) {
          accessibleCells.splice(j, 1);
        }
      }
    }
  }
}


console.log(playersArray); // debug console


/********************************************
 *     Placement des armes sur le plateau    *
 ********************************************/

// Placement de l'arme 1 (Couteau)
var accessibleCells = myGame.getEmptyCells();
var weapon1Position = Math.floor(Math.random() * (accessibleCells.length));
var weapon1Json = accessibleCells[weapon1Position];
myGame.board[weapon1Json.X][weapon1Json.Y] = weapon1.name;


// Placement de l'arme 2 (Fourche)
var accessibleCells = myGame.getEmptyCells();
var weapon2Position = Math.floor(Math.random() * (accessibleCells.length));
var weapon2Json = accessibleCells[weapon2Position];
myGame.board[weapon2Json.X][weapon2Json.Y] = weapon2.name;


// Placement de l'arme 3 (Flingue)
var accessibleCells = myGame.getEmptyCells();
var weapon3Position = Math.floor(Math.random() * (accessibleCells.length));
var weapon3Json = accessibleCells[weapon3Position];
myGame.board[weapon3Json.X][weapon3Json.Y] = weapon3.name;


// Placement de l'arme 4 (Lance-flame)
var accessibleCells = myGame.getEmptyCells();
var weapon4Position = Math.floor(Math.random() * (accessibleCells.length));
var weapon4Json = accessibleCells[weapon4Position];
myGame.board[weapon4Json.X][weapon4Json.Y] = weapon4.name;



// Commande pour voir le plateau en textuel
myGame.afficheTout();


/****************************************
 *           Tour par tour              *
 ***************************************/

function CurrentPlayer() {
  var currentplayer = player[0];
  while (i < player.length){
    if (currentPlayer.Move)
  }
  // tant que i<player.length, dès que player bouge, on incrémente player[index]
}



 


/****************************************
 *        Déplacement des joueurs       *
 ***************************************/

function CellIsFree(x, y) { // Accessibilité des cases
  return myGame.board[x][y] == 0;
}

function whereIsPlayer(index) {
  var player = playersArray[index];
  console.log(player.name + " est en X " + player.position.X + " Y " + player.position.Y);
}
whereIsPlayer(0);
whereIsPlayer(1);
// On vérifie les cases acccessibles autour de lui (de x-3 à x+3 et de y-3 à y+3)
// On valide la case choisie par l'utilisateur et on modifhie la position du joueur
// On vérifie si les deux joueurs sont côte à côte

var numCells = 0;

// Pour bouger à droite
function MoveRight(index, numCells) {
  if (CellIsFree(playersArray[index].position.X + numCells, playersArray[index].position.Y)) {
    playersArray[index].position.X = playersArray[index].position.X + numCells;
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger à gauche
function MoveLeft(index, numCells) {
  if (CellIsFree(playersArray[index].position.X - numCells, playersArray[index].position.Y)) {
    playersArray[index].position.X = playersArray[index].position.X - numCells;
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger en haut
function MoveUp(index, numCells) {
  if (CellIsFree(playersArray[index].position.X, playersArray[index].position.Y)) {
    playersArray[index].position.Y = playersArray[index].position.Y - numCells;
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger en bas
function MoveDown(index, numCells) {
  if (CellIsFree(playersArray[index].position.X, playersArray[index].position.Y)) {
    playersArray[index].position.Y = playersArray[index].position.Y + numCells;
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}
// Prompt de commande de déplacement
function Move() {
 // window.alert("Titre du jeu à trouver");
  var command = prompt("Joueur 1, à toi de jouer. Où veux tu te déplacer ?");
  //return currentPlayer;

  switch (command) {
    case "1droite1":
      MoveRight(0, 1);
      break;
    case "1gauche1":
      MoveLeft(0, 1);
      break;
    case "1haut1":
      MoveLeft(0, 1);
      break;
    case "1bas1":
      MoveLeft(0, 1);
      break;

    case "1droite2":
      MoveRight(0, 2);
      break;
    case "1gauche2":
      MoveLeft(0, 2);
      break;
    case "1haut2":
      MoveLeft(0, 2);
      break;
    case "1bas2":
      MoveLeft(0, 2);
      break;

    case "1droite3":
      MoveRight(0, 3);
      break;
    case "1gauche3":
      MoveLeft(0, 3);
      break;
    case "1haut3":
      MoveLeft(0, 3);
      break;
    case "1bas3":
      MoveLeft(0, 3);
      break;

    case "2droite1":
      MoveRight(1, 1);
      break;
    case "2gauche1":
      MoveLeft(1, 1);
      break;
    case "2haut1":
      MoveLeft(1, 1);
      break;
    case "2bas1":
      MoveLeft(1, 1);
      break;

    case "2droite2":
      MoveRight(1, 2);
      break;
    case "2gauche2":
      MoveLeft(1, 2);
      break;
    case "2haut2":
      MoveLeft(1, 2);
      break;
    case "2bas2":
      MoveLeft(1, 2);
      break;

    case "2droite3":
      MoveRight(1, 3);
      break;
    case "2gauche3":
      MoveLeft(1, 3);
      break;
    case "2haut3":
      MoveLeft(1, 3);
      break;
    case "2bas3":
      MoveLeft(1, 3);
      break;

    default:
      alert("Je n'ai pas compris!");
  }
}
// currentPlayer.move permet d'enlever la moitié du script



/***************************************
 *       Gestion du tour par tour       *
 ***************************************/
// Quel joueur est en train de jouer
// Prompt pour lui demander ou il veut se déplacer (on peut même lui indiquer les cases ou il peut aller)
// On valide ou pas son Déplacement
// On réalise le Déplacement
// On passe la main au joueur suivant
// Jusqu'a ce que mort s'en suive (au début mettre une fonction stop pour arrêter)

// boucle "while !Stop" sur le tableau player.length
// appeler move pour le faire bouger
// currentplayer = i+1 (sauf si on arrive au bout du tableau, dans ce cas i=0)
// quand on tape Stop, ça stope le jeu



/***************************************
 *      ********   To do   ********     *
 ***************************************/
// Les joueurs ne doivent pas apparaitre sur les armes
// Les joueurs ne doivent pas pouvoir "sauter" par dessus les rochers
// Y'a un bug de déplacement (des fois le joueur se déplace de plusieurs cases au lieu d'une)
// Limite du plateau à fixer (endBoard)
// Fonction qui récupère les déplacements possibles
// Gestion du tour par tour
// Boucle à faire pour le placement des armes
// placement des joueurs dans le tabeau JSON (pour qu'on les voie sur le plateau)