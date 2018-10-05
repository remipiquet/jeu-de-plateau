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

var currentPlayer = 0;

var accessibleCells = myGame.getEmptyCells();

// pour chaque joueur on place le joueur de maniere a ne pas etre a coté d'un autre joueur

for (var indexPlayer = 0; indexPlayer < 2; indexPlayer++) {
  playersArray[indexPlayer].position = accessibleCells[Math.floor(Math.random() * (accessibleCells.length))];

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
 *       Gestion du tour par tour       *
 ***************************************/
// Quel joueur est en train de jouer
// Prompt pour lui demander ou il veut se déplacer (on peut même lui indiquer les cases ou il peut aller)
// On valide ou pas son Déplacement
// On réalise le déplacement
// On passe la main au joueur suivant
// Jusqu'a ce que mort s'en suive (au début mettre une fonction stop pour arrêter)
//--------------------------------------------------------------------------------
// boucle "while !Stop" sur le tableau player.length
// appeler move pour le faire bouger
// currentplayer = i+1 (sauf si on arrive au bout du tableau, dans ce cas i=0)
// quand on tape Stop, ça stope le jeu


function CurrentPlayer(){
  if (currentPlayer < playersArray.length){
    currentPlayer ++;
  }
  else {
    currentPlayer = 0;
  }
}


function TurnByTurn(){
  var stop = false;
  while (!stop){
    stop = Move();
    if (!stop){
      CurrentPlayer();
    }
  }
}



/****************************************
 *        Déplacement des joueurs       *
 ***************************************/

function CellIsNoRock(x, y) { // Accessibilité des cases
  return myGame.board[x][y] == 0;
}

function whereIsPlayer(num) {
  var player = playersArray[num];
  console.log(player.name + " est en X " + player.position.X + " Y " + player.position.Y);
}
whereIsPlayer(0);
whereIsPlayer(1);


// Pour bouger à droite
function MoveRight(currentPlayer, numCells) {
  if (CellIsNoRock(playersArray[currentPlayer].position.X + numCells, playersArray[currentPlayer].position.Y)) {
    playersArray[currentPlayer].position.X = playersArray[currentPlayer].position.X + numCells;
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger à gauche
function MoveLeft(currentPlayer, numCells) {
  if (CellIsNoRock(playersArray[currentPlayer].position.X - numCells, playersArray[currentPlayer].position.Y)) {
    playersArray[currentPlayer].position.X = playersArray[currentPlayer].position.X - numCells;
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger en haut
function MoveUp(currentPlayer, numCells) {
  if (CellIsNoRock(playersArray[currentPlayer].position.X, playersArray[currentPlayer].position.Y)) {
    playersArray[currentPlayer].position.Y = playersArray[currentPlayer].position.Y - numCells;
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger en bas
function MoveDown(currentPlayer, numCells) {
  if (CellIsNoRock(playersArray[currentPlayer].position.X, playersArray[currentPlayer].position.Y)) {
    playersArray[currentPlayer].position.Y = playersArray[currentPlayer].position.Y + numCells;
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Prompt de commande de déplacement
function Move() {
  // window.alert("Titre du jeu à trouver");
  console.log(currentPlayer);
  var command = prompt(playersArray[currentPlayer].name + " à toi de jouer. Où veux tu te déplacer ?");
  var state = false;
  switch (command) {
    case "droite1":
      MoveRight(currentPlayer, 1);
      break;
    case "gauche1":
      MoveLeft(currentPlayer, 1);
      break;
    case "haut1":
      MoveUp(currentPlayer, 1);
      break;
    case "bas1":
      MoveDown(currentPlayer, 1);
      break;

    case "droite2":
      MoveRight(currentPlayer, 2);
      break;
    case "gauche2":
      MoveLeft(currentPlayer, 2);
      break;
    case "haut2":
      MoveUp(currentPlayer, 2);
      break;
    case "bas2":
      MoveDown(currentPlayer, 2);
      break;

    case "droite3":
      MoveRight(currentPlayer, 3);
      break;
    case "gauche3":
      MoveLeft(currentPlayer, 3);
      break;
    case "haut3":
      MoveUp(currentPlayer, 3);
      break;
    case "bas3":
      MoveDown(currentPlayer, 3);
      break;

    case "stop":
      state=true;
      break;
      
    default:
      alert("Je n'ai pas compris!");
    
    return state;  
  }
}

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

// 01/10 : problème avec currentPlayer