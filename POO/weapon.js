class Weapon {
    constructor(id, name, damage, imgUrl){
        this.id = id;
        this.name = name;
        this.damage = damage;
        this.imgUrl = imgUrl;
    }

    printHtml() {
        /**
         * Gestion de l'affichage sur la page HTML
         */
        

    }

};


const weapon1 = new Weapon (1, "hook", 10, '<img src="img/hook.png" alt="hook"></img>');
const weapon2 = new Weapon (2, "knife", 20, '<img src="img/knife.png" alt="knife"></img>');
const weapon3 = new Weapon (3, "sword", 30, '<img src="img/sword.png" alt="sword"></img>');
const weapon4 = new Weapon (4, "harpoon", 40, '<img src="img/harpoon.png" alt="harpoon"></img>');
const weapon5 = new Weapon (5, "gun", 50, '<img src="img/gun.png" alt="gun"></img>');

