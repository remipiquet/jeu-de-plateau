class Player{
    constructor(name, health, weapon, imgUrl){
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.strength = weapon.damage;
        this.position = null;
        this.defense = false;
        this.imgUrl = imgUrl;
    }

    isTouched(damage) {
    /**
     * Gestion d'un joueur touché
     */
        if (this.defense == true){
            this.health = this.health - (damage/2);
            this.defense = false;
        }
        else {
            this.health = this.health - damage;
            console.log(damage);
        }
    }
    
    defend() {
    /**
     * Gestion de la défense des joueurs
     */
        this.defense = true;
        return this.defense;
    }

    fight(victim) {
    /**
     * Gestion du combat des joueurs
     */
        victim.isTouched(this.weapon.damage);
        return true;
    }
} 
