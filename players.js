    // Fichier JS des joueurs

// /!\IL RESTE TOUT A FAIRE/!\
/*    this.initPlayers = function () {
        for(var i=0; i<this.mapSize; i++) {
           this.plateau[i] = new Array();
        }
    };





function players (name, health, force, weapon, position){
    this.name = name;
    this.health = health;
    this.force = force;
    this.weapon = weapon;
    this.position = position;

}*/

var player = {
  name: "",
  health: 100,
  force: 10,
  weapon: "fist",

};

var player1 = Object.create(player);

var player2 = Object.create(player);
