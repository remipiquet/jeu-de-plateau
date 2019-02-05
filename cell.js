class Cell{

    constructor(id, weapon, barrel, player, X, Y) {
        this.id = id;
        this.weapon = weapon;
        this.barrel = barrel;
        this.player = player;
        this.highlight = false;
        this.positionX = X;
        this.positionY = Y;
    }

    set highlight() {
        this.highlight = true;
    }
}  