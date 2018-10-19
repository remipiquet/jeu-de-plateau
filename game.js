/*********************************************
 *           Initialisation du jeu            *
 *********************************************/

var myGame = new Board(5, 4);


/*********************************************
 *    Placement des joueurs sur le plateau    *
 *********************************************/

var playersArray = [];
var nbPlayers = 2; 

for (var i = 0; i < nbPlayers; i++) {
  var index = parseInt(i) + 1;
  var player = new Player('Joueur ' + index, 100, weapon1,);
  playersArray.push(player);
}

var currentPlayer = 0;
var currentEnemy = 1;

var accessibleCells = myGame.getEmptyCells();

// pour chaque joueur on place le joueur de maniere a ne pas etre a coté d'un autre joueur

for (var indexPlayer = 0; indexPlayer < nbPlayers; indexPlayer++) {
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
      //console.log('j '+ j);  //debug
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

// Placement de l'arme 2 (knife)
var accessibleCells = myGame.getEmptyCells();
var weapon2Position = Math.floor(Math.random() * (accessibleCells.length));
var weapon2Json = accessibleCells[weapon2Position];
myGame.board[weapon2Json.X][weapon2Json.Y] = weapon2.name;

// Placement de l'arme 3 (sword)
var accessibleCells = myGame.getEmptyCells();
var weapon3Position = Math.floor(Math.random() * (accessibleCells.length));
var weapon3Json = accessibleCells[weapon3Position];
myGame.board[weapon3Json.X][weapon3Json.Y] = weapon3.name;

// Placement de l'arme 4 (harpoon)
var accessibleCells = myGame.getEmptyCells();
var weapon4Position = Math.floor(Math.random() * (accessibleCells.length));
var weapon4Json = accessibleCells[weapon4Position];
myGame.board[weapon4Json.X][weapon4Json.Y] = weapon4.name;

// Placement de l'arme 5 (gun)
var accessibleCells = myGame.getEmptyCells();
var weapon5Position = Math.floor(Math.random() * (accessibleCells.length));
var weapon5Json = accessibleCells[weapon5Position];
myGame.board[weapon5Json.X][weapon5Json.Y] = weapon5.name;

// Commande pour voir le plateau en textuel
myGame.afficheTout();


/****************************************
 *       Gestion du tour par tour       *
 ***************************************/

function CurrentPlayer(){
  if (currentPlayer < playersArray.length){
    currentPlayer ++;
  }
  else {
    currentPlayer = 0;
  }
}

function EndGame(){
  var stop = false;
  if (currentPlayer.health <= 0){
    stop = true;
  }
  while (!stop){
    stop = Move();
    if (!stop){
      CurrentPlayer();
    }
    else {
      alert("Bravo, " + currentEnemy.name + " gagne la partie !")
    }
  }
}

function CurrentEnemy(){
  if (currentPlayer=0){
    currentEnemy=1;
  }
  if (currentPlayer=1){
    currentEnemy=0;
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
      WeaponChange();
      break;
    case "gauche1":
      MoveLeft(currentPlayer, 1);
      WeaponChange();
      break;
    case "haut1":
      MoveUp(currentPlayer, 1);
      WeaponChange();
      break;
    case "bas1":
      MoveDown(currentPlayer, 1);
      WeaponChange();
      break;

    case "droite2":
      MoveRight(currentPlayer, 2);
      WeaponChange();
      break;
    case "gauche2":
      MoveLeft(currentPlayer, 2);
      WeaponChange();
      break;
    case "haut2":
      MoveUp(currentPlayer, 2);
      WeaponChange();
      break;
    case "bas2":
      MoveDown(currentPlayer, 2);
      WeaponChange();
      break;

    case "droite3":
      MoveRight(currentPlayer, 3);
      WeaponChange();
      break;
    case "gauche3":
      MoveLeft(currentPlayer, 3);
      WeaponChange();
      break;
    case "haut3":
      MoveUp(currentPlayer, 3);
      WeaponChange();
      break;
    case "bas3":
      MoveDown(currentPlayer, 3);
      WeaponChange();
      break;

    case "stop":
      state=true;
      break;
      
    default:
      alert("Je n'ai pas compris!");
    
    return state;  
  }
}


/****************************************
 *     Gestion du changement d'arme     *
 ***************************************/

// si currentPlayer est sur une case weapon
function WeaponChange(){
  if (playersArray[currentPlayer].position == weapon2Json || playersArray[currentPlayer].position == weapon3Json 
    || playersArray[currentPlayer].position == weapon4Json || playersArray[currentPlayer].position == weapon5Json){
      console.log("prout");
    } 
}

// ça change son arme et sa force contre celle qui est dans la case
// et ça remplace l'arme au sol par l'arme que le joueur avait


/****************************************
 *         Gestion de la baston         *
 ***************************************/

function Duel(){
  if (playersArray[currentPlayer].position.X == playersArray[currentEnemy].position.X+1 &&
    playersArray[currentPlayer].position.Y == playersArray[currentEnemy].position.Y ||
    playersArray[currentPlayer].position.X == playersArray[currentEnemy].position.X-1 &&
    playersArray[currentPlayer].position.Y == playersArray[currentEnemy].position.Y ||
    playersArray[currentPlayer].position.Y == playersArray[currentEnemy].position.Y+1 &&
    playersArray[currentPlayer].position.X == playersArray[currentEnemy].position.X ||
    playersArray[currentPlayer].position.Y == playersArray[currentEnemy].position.Y-1 &&
    playersArray[currentPlayer].position.X == playersArray[currentEnemy].position.X){
    playersArray[currentPlayer].attack(playersArray[currentEnemy]);
    console.log(playersArray[currentPlayer].name + " inflige " + playersArray[currentPlayer].force + " points de dégats");
    console.log("Il reste " + playersArray[currentEnemy].health + " points de vie à " + playersArray[currentEnemy].name);
  }  
  else {
    alert("Vous n'êtes pas à côté d'un ennemi !")
  } 
}


function DrawBarrels(){
  var canvas = document.getElementById('Pirates!');
  if (!canvas) {
    alert("Impossible de récupérer le canvas");
    return;
  }

  var context = canvas.getContext('2d');
  if (!context) {
    alert("Impossible de récupérer le context du canvas");
    return;
  }


  /*
  var barrel = new Image();
  barrel.src = 'img/barrel.png';

  for (i = 0; i < myGame.board.length; i++) {
    for (j = 0; j < myGame.board.length; j++) {
        if (myGame.board[i][j] == "barrel") {
  //        var i50 = i*50;
  //        var j50 = j*50;
          console.log("tonneau en "+i+" "+j);


          barrel.on = function () {
            console.log("test " + i + " " + j);
            context.drawImage(barrel, i*50, j*50, 50, 50);
            
          
          };
      }
    }
                    //barrel.src = 'img/barrel.png';
  }
*/


}

function DrawGameBoard() {
  for (i = 0; i < myGame.board.length; i++) {
    $("#tableZone").append("<tr>");
    for (j = 0; j < myGame.board.length; j++) {
        $("#tableZone").append("<td></td>")
      if (myGame.board[i][j] == "barrel") {
        //        var i50 = i*50;
        //        var j50 = j*50;
        console.log("tonneau en " + i + " " + j);
        $("tr:even").append("<img id="barrel" src="img/barrel.png" />");

      
      }
    }
    $("#tableZone").append("</tr>");
  }
}
DrawGameBoard();


/***************************************
 *      ********   To do   ********     *
 ***************************************/
// Les joueurs ne doivent pas apparaitre sur les armes
// Les joueurs ne doivent pas pouvoir "sauter" par dessus les rochers
// Limite du plateau à fixer (endBoard)
// Fonction qui récupère les déplacements possibles
// Boucle à faire pour le placement des armes
// placement des joueurs dans le tabeau JSON (pour qu'on les voie sur le plateau)

// /!\ Problème avec le tour par tour qui continue d'incrémenter après le joueur 2
