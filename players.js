    // Fichier JS des joueurs

// /!\IL RESTE TOUT A FAIRE/!\
/*    this.initPlayers = function () {
        for(var i=0; i<this.mapSize; i++) {
           this.plateau[i] = new Array();
        }
    };
*/




function players (name, health, force, weapon, position){
    this.name = name;
    this.health = health;
    this.force = force;
    this.weapon = weapon;
    this.position = position;

}

var player1 = Object.create(players);
var player2 = Object.create(players);

player1.name = "Joueur 1";
player2.name = "Joueur 2";

/*var player = {
  playerName: "",
  health: 100,
  force: 10,
  weapon: "fist",

};*/
