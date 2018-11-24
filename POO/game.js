function Game() {
    this.currentPlayer = null;
    this.currentMap = null;

    function start() {
        this.currentMap = new Map(10); //Constructeur
        this.currentMap.generate();
    }


}

Game.start();
