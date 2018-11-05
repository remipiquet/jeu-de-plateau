// Fichier JS des joueurs

function Player(name, health, weapon) {
  this.name = name;
  this.health = health;
  this.weapon = weapon.name;
  this.force = weapon.damage;
  this.position = null;
  this.defense = false;

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

}

