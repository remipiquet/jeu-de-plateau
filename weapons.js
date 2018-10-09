// Fichier JS des armes

function Weapon(id, name, damage) {
  this.id = id;
  this.name = name;
  this.damage = damage;
  this.position = null;
}

var weapon1 = new Weapon (1, "knife", 20);
var weapon2 = new Weapon (2, "sword", 30);
var weapon3 = new Weapon (3, "harpoon", 40);
var weapon4 = new Weapon (4, "gun", 50);

