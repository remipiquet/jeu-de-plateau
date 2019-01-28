/*********************************************
*           Initialisation du jeu            *
*********************************************/

var myGame = new Board(10, 8);


/*********************************************
*    Placement des joueurs sur le plateau    *
*********************************************/

var playersArray = [];
var nbPlayers = 2; 
for (var i = 0; i < nbPlayers; i++) {
  var index = parseInt(i) + 1;
  var player = new Player('Joueur ' + index, 100, "hook");
  playersArray.push(player); // TODO a passer en POO
}
var currentPlayer = 0;
var currentEnemy = 1;
var accessibleCells = myGame.getEmptyCells();

function placePlayers() {
    // pour chaque joueur on place le joueur de maniere a ne pas etre a coté d'un autre joueur
    for (var indexPlayer = 0; indexPlayer < nbPlayers; indexPlayer++) {
      playersArray[indexPlayer].setPosition(accessibleCells[Math.floor(Math.random() * (accessibleCells.length))]);

      // On rend inacccessible les cases qui sont proches de player x et sa case
      var inaccessibleCells = new Array();
      inaccessibleCells.push(playersArray[indexPlayer].getPosition());

      if (playersArray[indexPlayer].getPosition().X - 1 >= 0) {
        inaccessibleCells.push({
          X: playersArray[indexPlayer].getPosition().X - 1,
          Y: playersArray[indexPlayer].getPosition().Y
        });
    }
    if (playersArray[indexPlayer].getPosition().X + 1 <= accessibleCells.length) {
      inaccessibleCells.push({
        X: playersArray[indexPlayer].getPosition().X + 1,
        Y: playersArray[indexPlayer].getPosition().Y
      });
    }
    if (playersArray[indexPlayer].getPosition().Y - 1 >= 0) {
      inaccessibleCells.push({
        X: playersArray[indexPlayer].getPosition().X,
        Y: playersArray[indexPlayer].getPosition().Y - 1
      });
    }
    if (playersArray[indexPlayer].getPosition().X + 1 <= accessibleCells.length) {
      inaccessibleCells.push({
        X: playersArray[indexPlayer].getPosition().X,
        Y: playersArray[indexPlayer].getPosition().Y + 1
      });
    }

    // on enleve les cases inaccessibles des cases accessibles
    for (var j = 0; j < accessibleCells.length; j++) {
      for (var k = 0; k < inaccessibleCells.length; k++) {
        if (j >= 0 && accessibleCells.length > j) {
          if (inaccessibleCells[k].X == accessibleCells[j].X && inaccessibleCells[k].Y == accessibleCells[j].Y) {
            accessibleCells.splice(j, 1);
          }
        }
      }
    } 
  }
}
placePlayers();


var player1 = playersArray[0];
var player2 = playersArray[1];
var player1Json = player1.position;
var player2Json = player2.position;
myGame.board[player1Json.X][player1Json.Y] = player1; 
myGame.board[player2Json.X][player2Json.Y] = player2; 




/********************************************
*     Placement des armes sur le plateau    *
********************************************/
var weapon1 = new Weapon(1, "hook", 10, '<img src="img/hook.png" alt="hook"></img>');
var weapon2 = new Weapon(2, "knife", 20, '<img src="img/knife.png" alt="knife"></img>');
var weapon3 = new Weapon(3, "sword", 30, '<img src="img/sword.png" alt="sword"></img>');
var weapon4 = new Weapon(4, "harpoon", 40, '<img src="img/harpoon.png" alt="harpoon"></img>');
var weapon5 = new Weapon(5, "gun", 50, '<img src="img/gun.png" alt="gun"></img>');

function placeWeapons() {
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
}
placeWeapons();


/****************************************
*       Gestion du tour par tour       *
***************************************/
// TODO Objet TurnByTurn
function turnByTurn() {
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
}
turnByTurn();


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


// Pour bouger en bas
function MoveDown(numPlayer, numCells) {
  if (CellIsNoRock(playersArray[numPlayer].position.X + numCells, playersArray[numPlayer].position.Y)) {
    playersArray[numPlayer].position.X = playersArray[numPlayer].position.X + numCells;
    myGame.board[player1Json.X][player1Json.Y] = player1; 
    myGame.board[player2Json.X][player2Json.Y] = player2; 
    DrawGameBoard();
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger en haut
function MoveUp(numPlayer, numCells) {
  if (CellIsNoRock(playersArray[numPlayer].position.X - numCells, playersArray[numPlayer].position.Y)) {
    playersArray[numPlayer].position.X = playersArray[numPlayer].position.X - numCells;
    myGame.board[player1Json.X][player1Json.Y] = player1; 
    myGame.board[player2Json.X][player2Json.Y] = player2; 
    DrawGameBoard();
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger à gauche
function MoveLeft(numPlayer, numCells) {
  if (CellIsNoRock(playersArray[numPlayer].position.X, playersArray[numPlayer].position.Y - numCells)) {
    playersArray[numPlayer].position.Y = playersArray[numPlayer].position.Y - numCells;
    myGame.board[player1Json.X][player1Json.Y] = player1; 
    myGame.board[player2Json.X][player2Json.Y] = player2;
    DrawGameBoard();
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// Pour bouger à droite
function MoveRight(numPlayer, numCells) {
  if (CellIsNoRock(playersArray[numPlayer].position.X, playersArray[numPlayer].position.Y + numCells)) {
    playersArray[numPlayer].position.Y = playersArray[numPlayer].position.Y + numCells;
    myGame.board[player1Json.X][player1Json.Y] = player1; 
    myGame.board[player2Json.X][player2Json.Y] = player2; 
    DrawGameBoard();
  }
  whereIsPlayer(0);
  whereIsPlayer(1);
}

// On récupère newPosition
// Si le game.board est accessible, on set newposition



/****************************************
 *     Gestion du changement d'arme     *
 ***************************************/

// si currentPlayer est sur une case weapon
function WeaponChange(){
  if (myGame.board[player1Json.X][player1Json.Y] == weapon2Json || playersArray[currentPlayer].position == weapon3Json 
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


/****************************************
 *       Mise en place du visuel        *
 ***************************************/

function ResetGameBoard() {
  for (i = 0; i < myGame.board.length; i++) {
    var row = $("#x"+i);
    row.empty();
    /*$('#tableZone').remove(row);*/
    console.log("delete row " +i); // Problème avec le visuel des joueurs qui reste en place
  }
}  

function DrawGameBoard() { // TODO A mettre dans Board (ou alors à distiller dans chacun des objets)
  if (myGame.active) {
    ResetGameBoard();
  } else {
    myGame.active = true;
  }
  for (i = 0; i < myGame.board.length; i++) {
    var row = $('<tr class="row"></tr>').attr('id', "x"+i);
    for (j = 0; j < myGame.board.length; j++) {
      row.append(function(){
        var caseContent = "<td id= y"+j +"> </td>";
        var barrelVisual = '<img src="img/barrel.png" alt="barrel"></img>';
        var player1Visual = '<img src="img/player1.png" alt="player1"></img>';
        var player2Visual = '<img src="img/player2.png" alt="player2"></img>';
        if (myGame.board[i][j] == "barrel") {
          caseContent = "<td id= y" + j + ">" + barrelVisual +"</td>";
        }  
        if (myGame.board[i][j] == weapon1.name) {
          caseContent = "<td id= y" + j + ">" + weapon1.visual +"</td>";
        }  
        if (myGame.board[i][j] == weapon2.name) {
          caseContent = "<td id= y" + j + ">" + weapon2.visual +"</td>";
        }
        if (myGame.board[i][j] == weapon3.name) {
          caseContent = "<td id= y" + j + ">" + weapon3.visual +"</td>";
        }
        if (myGame.board[i][j] == weapon4.name) {
          caseContent = "<td id= y" + j + ">" + weapon4.visual +"</td>";
        }
        if (myGame.board[i][j] == weapon5.name) {
          caseContent = "<td id= y" + j + ">" + weapon5.visual +"</td>";
        }
  
        if (myGame.board[i][j] == player1) {
          caseContent = "<td id= y" + j + ">" + player1Visual +"</td>";
        }
        if (myGame.board[i][j] == player2) {
          caseContent = "<td id= y" + j + ">" + player2Visual +"</td>";
        }
  
        return caseContent;
      });
    }
    $('#tableZone').append(row);
  }
}
DrawGameBoard();


/****************************************
 *        Mise à jour du visuel         *
 ***************************************/

// Gestion du clic 
function clic() {
  console.log("clic dans la case " + myGame.board[i] + " " + myGame.board[j]);
}
var tableClic = document.getElementById("tableZone");
tableClic.addEventListener("click", clic);


/***************************************
 *      ********   To do   ********     *
 ***************************************/
// Les joueurs ne doivent pas apparaitre sur les armes
// Les joueurs ne doivent pas pouvoir "sauter" par dessus les rochers
// Limite du plateau à fixer (endBoard)
// Fonction qui récupère les déplacements possibles
// Boucle à faire pour le placement des armes
// Les joueurs peuvent être coincés avec les barrels

// /!\ Problème avec le tour par tour qui continue d'incrémenter après le joueur 2
// /!\ Problème avec les tonneaux qui parfois coincent un personnage

/* A VOIR AVEC JOHAN :
Récupération des cellules cliquées
Actualisation du visuel
Finalisation de player.move
*/

/* @ Antho
onclick="recuperationPositionX(this)"
$("tableZone").append("<tr class='ligne' id='ligne" + y + "'onclick='recuperationPositionY(this);'></tr>");
$("#ligne" + y).append("<td style= background-color: " + donjon[y][o].texte + "'onclick='recuperationPositionX(this)'></td>");

OU

$(document).ready(function(){
  $(#donjon td).click(function(){
    
    var column_num = ($(this).index());
    var row_num = ($(this).parent().index());

    console.log("Row_num=" + row_num + " , Column_num =" + column_num + " " + this);
  });
});
*/
