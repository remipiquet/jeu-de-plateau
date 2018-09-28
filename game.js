/*********************************************
*           Initialisation du jeu            *
*********************************************/

var myGame = new Board(5, 4);

/*********************************************
*    Placement des joueurs sur le plateau    *
*********************************************/

var players = []; // Création d'un tableau pour les joueurs
// TODO var nbPlayeurs = 4;

for (var i=0; i<2; i++) { // On incrémente i jusqu'à 1 (2 joueurs)
  var index = parseInt(i) + 1; // i est un entier et on lui ajoute +1 
  var player = new Player('Joueur ' + index, 100, 10, 'fist'); // Initialisation des joueurs 
  players.push(player); // ajout de player dans le tableau players
}

var boardEmptyCells = myGame.getEmptyCells(); // On prend les cases vides

//players[0].position = boardEmptyCells[Math.floor(Math.random()*(boardEmptyCells.length))]; // On place le joueur 1 dans une de ces cases vides



// pour chaque joueur on place le joueur de maniere a ne pas etre a coté d'un autre joueur
var accessibleCells = boardEmptyCells;

//console.log("boardEmptyCells.length:" + boardEmptyCells.length);
//console.log("accessibleCells.length:" + accessibleCells.length);
for(var indexPlayer=0; indexPlayer<2; indexPlayer++){
  players[indexPlayer].position = accessibleCells[Math.floor(Math.random() * (accessibleCells.length))];

  // On rend inacccessible les cases qui sont proches de player x et sa case
  var inaccessibleCells = new Array();
  inaccessibleCells.push(players[indexPlayer].position);

  if (players[indexPlayer].position.X - 1 >= 0){
     inaccessibleCells.push({ X: players[indexPlayer].position.X-1, Y: players[indexPlayer].position.Y });
}
  if (players[indexPlayer].position.X + 1 <= accessibleCells.length) {
     inaccessibleCells.push({ X: players[indexPlayer].position.X+1, Y: players[indexPlayer].position.Y });
  }
  if (players[indexPlayer].position.Y - 1 >= 0){
      inaccessibleCells.push({ X: players[indexPlayer].position.X, Y: players[indexPlayer].position.Y-1 });
  }
  if (players[indexPlayer].position.X + 1 <= accessibleCells.length) {
      inaccessibleCells.push({ X: players[indexPlayer].position.X, Y: players[indexPlayer].position.Y+1 });
  }

  // on enleve les cases inaccessibles des cases accessibles
  for(var j=0; j<accessibleCells.length; j++){
    for (var k = 0; k < inaccessibleCells.length; k++) {
      console.log('j '+j);
      if (j >= 0 && accessibleCells.length > j) {
        if (inaccessibleCells[k].X == accessibleCells[j].X && inaccessibleCells[k].Y == accessibleCells[j].Y){
          accessibleCells.splice(j, 1);
        }
      }
    }
  }
}

/*
var found = false;

while (!found) { // Tant que found vaut false
  players[1].position = boardEmptyCells[Math.floor(Math.random()*(boardEmptyCells.length))]; // On place le joueur 2 dans une case vide
  if (players[1].position.X != players[0].position.X && players[1].position.Y != players[0].position.Y) { // Si J1&J2 ont des X&Y différents
    found = true; // On valide la condition et J2 est placé
  }
}
*/
console.log(players); // debug console


/********************************************
*     Placement des armes sur le plateau    *
********************************************/

// Placement de l'arme 1 (Couteau)
// boucle for à mettre en place pour ne pas répéter à chaque arme
var boardEmptyCells = myGame.getEmptyCells(); // On reprend les cases vides cette fois sans celles occupées par les joueurs

var weapon1Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides

var weapon1Json = boardEmptyCells[weapon1Position]; // On stocke le placement de l'arme 1 en JSON dans ces cases vides

  myGame.board[weapon1Json.X][weapon1Json.Y] = weapon1.name; // On donne à la case le résultat 5 (pour signifier l'arme n°1 sur le plateau)


// Placement de l'arme 2 (Fourche)
var boardEmptyCells = myGame.getEmptyCells(); // On reprend les cases vides

var weapon2Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides

var weapon2Json = boardEmptyCells[weapon2Position]; // On stocke le placement de l'arme 2 en JSON dans ces cases vides

  myGame.board[weapon2Json.X][weapon2Json.Y] = weapon2.name; // On donne à la case le résultat 6 (pour signifier l'arme n°2 sur le plateau)


// Placement de l'arme 3 (Flingue)
var boardEmptyCells = myGame.getEmptyCells(); // On reprend les cases vides

var weapon3Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides

var weapon3Json = boardEmptyCells[weapon3Position]; // On stocke le placement de l'arme 3 en JSON dans ces cases vides

  myGame.board[weapon3Json.X][weapon3Json.Y] = weapon3.name; // On donne à la case le résultat 7 (pour signifier l'arme n°3 sur le plateau)


// Placement de l'arme 4 (Lance-flame)
var boardEmptyCells = myGame.getEmptyCells(); // On reprend les cases vides

var weapon4Position = Math.floor(Math.random()*(boardEmptyCells.length)); // On prend une position au hasard dans les cases vides

var weapon4Json = boardEmptyCells[weapon4Position]; // On stocke le placement de l'arme 2 en JSON dans ces cases vides

  myGame.board[weapon4Json.X][weapon4Json.Y] = weapon4.name; // On donne à la case le résultat 8 (pour signifier l'arme n°2 sur le plateau)



// Commande pour voir le plateau en textuel
myGame.afficheTout();



/***************************************
*        Déplacement des joueurs       *
***************************************/

function CellIsFree(x,y){ // Accessibilité des cases
  return myGame.board[x][y] == 0;
}

/*
function endBoard(x,y){ // a changer avec myGame (est-ce que X est supérieur à la longueur de mon tableau Board ?) et pareil sur le Y
  return myGame.board[x][y] == undefined;
}
*/

function whereIsPlayer(index) {
  var player = players[index];
  console.log(player.name + " est en X "+player.position.X+" Y "+player.position.Y);
}
whereIsPlayer(0);
whereIsPlayer(1);
// On vérifie les cases acccessibles autour de lui (de x-3 à x+3 et de y-3 à y+3)
// On valide la case choisie par l'utilisateur et on modifhie la position du joueur
// On vérifie si les deux joueurs sont côte à côte

var numCells = 0;

// Pour bouger à droite
function MoveRight(index, numCells) {
  if (CellIsFree(players[index].position.X+numCells,players[index].position.Y)){
    players[index].position.X = players[index].position.X+numCells;
  //  player1Json.X = player1Json.X+3  ---> pour bouger de 3 cases
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger à gauche
function MoveLeft(index, numCells) {
  if (CellIsFree(players[index].position.X-numCells,players[index].position.Y)){
    players[index].position.X = players[index].position.X-numCells;
  }
    whereIsPlayer(0);
    whereIsPlayer(1);
}

// Pour bouger en haut
function MoveUp(index, numCells) {
  if (CellIsFree(players[index].position.X,players[index].position.Y)){ 
    players[index].position.Y = players[index].position.Y-numCells;
  }
    whereIsPlayer(0);
    whereIsPlayer(1);
}

// Pour bouger en bas
function MoveDown(index, numCells) {
  if (CellIsFree(players[index].position.X,players[index].position.Y)){ 
    players[index].position.Y = players[index].position.Y+numCells;
  }
    whereIsPlayer(0);
    whereIsPlayer(1);
}
 // Prompt de commande de déplacement
function Move(){
  var currentPlayer = Player[0];
  return currentPlayer;
  window.alert("Titre du jeu à trouver");
  var command = prompt("Joueur 1, à toi de jouer. Où veux tu te déplacer ?"); // Prompt pour lui demander ou il veut se déplacer (on peut même lui indiquer les cases ou il peut aller)

  switch (command){
    case "1droite1" : MoveRight(0, 1); break;
    case "1gauche1": MoveLeft(0, 1); break;
    case "1haut1": MoveLeft(0, 1); break;
    case "1bas1": MoveLeft(0, 1); break;

    case "1droite2": MoveRight(0, 2); break;
    case "1gauche2": MoveLeft(0, 2); break;
    case "1haut2": MoveLeft(0, 2); break;
    case "1bas2": MoveLeft(0, 2); break;

    case "1droite3": MoveRight(0, 3); break;
    case "1gauche3": MoveLeft(0, 3); break;
    case "1haut3": MoveLeft(0, 3); break;
    case "1bas3": MoveLeft(0, 3); break;

    case "2droite1": MoveRight(1, 1); break;
    case "2gauche1": MoveLeft(1, 1); break;
    case "2haut1": MoveLeft(1, 1); break;
    case "2bas1": MoveLeft(1, 1); break;

    case "2droite2": MoveRight(1, 2); break;
    case "2gauche2": MoveLeft(1, 2); break;
    case "2haut2": MoveLeft(1, 2); break;
    case "2bas2": MoveLeft(1, 2); break;

    case "2droite3": MoveRight(1, 3); break;
    case "2gauche3": MoveLeft(1, 3); break;
    case "2haut3": MoveLeft(1, 3); break;
    case "2bas3": MoveLeft(1, 3); break;

    default: alert("Je n'ai pas compris!");
  }
    // currentPlayer.move permet d'enlever la moitié du script

/*  Ancienne méthode en usine à if
    if (command == "1droite2"){MoveRight(0,2);}
    if (command == "1gauche2"){MoveLeft(0,2);}
    if (command == "1haut2"){MoveUp(0,2);}
    if (command == "1bas2"){MoveDown(0,2);}

    if (command == "1droite3"){MoveRight(0,3);}
    if (command == "1gauche3"){MoveLeft(0,3);}
    if (command == "1haut3"){MoveUp(0,3);}
    if (command == "1bas3"){MoveDown(0,3);}

    if (command == "2droite1"){MoveRight(1,1);}
    if (command == "2gauche1"){MoveLeft(1,1);}
    if (command == "2haut1"){MoveUp(1,1);}
    if (command == "2bas1"){MoveDown(1,1);}

    if (command == "2droite2"){MoveRight(1,2);}
    if (command == "2gauche2"){MoveLeft(1,2);}
    if (command == "2haut2"){MoveUp(1,2);}
    if (command == "2bas2"){MoveDown(1,2);}

    if (command == "2droite3"){MoveRight(1,3);}
    if (command == "2gauche3"){MoveLeft(1,3);}
    if (command == "2haut3"){MoveUp(1,3);}
    if (command == "2bas3"){MoveDown(1,3);}

    default : (alert("Je n'ai pas compris!")); // a finir
  }
  */


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
// Limite du plateau à fixer
// Fonction qui récupère les déplacements possibles
// Gestion du tour par tour