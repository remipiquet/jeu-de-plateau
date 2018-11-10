// Fichier JS des joueurs

function Player(name, health, weapon) {
  this.name = name;
  this.health = health;
  this.weapon = weapon.name;
  this.force = weapon.damage;
  this.position = null;
  this.defense = false;
  this.visual = null;
  this.index = 0;

  this.setIndex = function (newIndex) {
    if (newIndex >= 0 && newIndex < nbPlayers){
      this.index = newIndex;
    }
    else {this.index = -1}
  }

  this.getPosition = function () {
    return this.position;
  }

  this.setPosition = function (position) {
    this.position = position;
  }

  this.attack = function (player){
    player.isTouched(this.force);
  }

  this.isTouched = function (damage){
    if (this.defense){
      this.health = this.health - (damage/2);
      this.defense = false;
    }
    else {
      this.health = this.health - damage;
    }
  }

  this.defend = function (){
    this.defense = true;
  }

  this.move = function (valablePosition){
    var command = prompt(this.name + " à toi de jouer. Où veux tu te déplacer ?");
    var newPosition = {axe:'u',move:0}; // axes de direction : u=UP, d=DOWN, l=LEFT, r=RIGHT
    switch (command) {
      case "droite1":
      newPosition = {axe:'r',move:1};
        break;
      case "gauche1":
        newPosition = {
          'axe': 'l',
          'move': 1
        };
        break;
      case "haut1":
        newPosition = {
          'axe': 'u',
          'move': 1
        };
        break;
      case "bas1":
        newPosition = {
          'axe': 'd',
          'move': 1
        };
        break;

      case "droite2":
        newPosition = {
          'axe': 'r',
          'move': 2
        };
        break;
      case "gauche2":
        newPosition = {
          'axe': 'l',
          'move': 2
        };
        break;
      case "haut2":
        newPosition = {
          'axe': 'u',
          'move': 2
        };
        break;
      case "bas2":
        newPosition = {
          'axe': 'd',
          'move': 2
        };
        break;

      case "droite3":
        newPosition = {
          'axe': 'r',
          'move': 3
        };
        break;
      case "gauche3":
        newPosition = {
          'axe': 'l',
          'move': 3
        };
        break;
      case "haut3":
        newPosition = {
          'axe': 'u',
          'move': 3
        };
        break;
      case "bas3":
        newPosition = {
          'axe': 'd',
          'move': 3
        };
        break;

      case "stop":
        newPosition = true;
        break;

      default:
        alert("Je n'ai pas compris!");

        return newPosition;
    }
    }

  }

}

