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


function Player(name, health, force, weapon) {
  this.name = name;
  this.health = health;
  this.force = force;
  this.weapon = weapon;
  this.position = null; // ex: {emptyX: 10, emptyY: 10}
};
