    // Fichier JS des joueurs 

// /!\IL RESTE TOUT A FAIRE/!\
    this.initPlayers = function () {
        for(var x=0; x<this.mapSize; x++) {
           this.plateau[x] = new Array(); 
        }
    }
    

    


function players (name, health, force, weapon, position){
    this.name = name;
    this.health = health;
    this.force = force;
    this.weapon = weapon;
    this.position = position;

}