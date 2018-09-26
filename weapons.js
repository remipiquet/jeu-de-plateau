// Fichier JS des armes

function Weapon(id, name, damage) {
  this.id = id;
  this.name = name;
  this.damage = damage;
  this.position = null; // ex: {emptyX: 10, emptyY: 10}
}

var weapon1 = {
  name : "Couteau",
  damage : 20,
  id : 1,
};

var weapon2 = {
  name : "Fourche",
  damage : 30,
  id : 2,
};

var weapon3 = {
  name : "Pistolet",
  damage : 40,
  id : 3,
};

var weapon4 = {
  name : "Fusil",
  damage : 50,
  id : 4,
};
