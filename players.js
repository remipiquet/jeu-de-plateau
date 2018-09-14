    // Fichier JS des joueurs
/*
    var player1 = {
      name: "Joueur 1",
      health: 100,
      force: 10,
      weapon: "fist",
    };

    var player2 = {
      name: "Joueur 2",
      health: 100,
      force: 10,
      weapon: "fist",
    };
*/

var Player = {
  init: function (name, health, force, weapon, position){
    this.name = name;
    this.health = health;
    this.force = force;
    this.weapon = weapon;
    //this.position = position;
  }
};


var player1 = Object.create(Player);
  player1.init("Joueur 1", 100, 10, "fist");


var player2 = Object.create(Player);
player2.init("Joueur 2", 100, 10, "fist");
