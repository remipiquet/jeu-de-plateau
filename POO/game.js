function Game() {
    this.currentPlayer = null;
    this.currentMap = null;

    function start() {
        this.currentMap = new Map(10, 8); //Constructeur
        this.currentMap.generate();
    }


}

Game();
