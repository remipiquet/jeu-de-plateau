class Game{
    constructor(){
        this.gameMap = new Map(10, 10);
        this.currentPlayer = player1;
        this.currentEnemy = player2;
        this.endGame = false;
        this.fighting = false;
    }

    howTo() {
        alert("Cliquez sur les cases surlignées en orange pour déplacer le joueur dont c'est le tour. Passez sur une case contenant une arme pour en changer. Lorsque les deux joueurs sont côte à côte, ils peuvent choisir de se battre ou de se défendre. Dès que l'un des joueurs a 0 points de vie, l'autre joueur gagne. Bon jeu !");
    }

    setNextTurn() {
    /**
     * Gestion du tour par tour
     */
        if (this.currentPlayer == player1){
            this.currentPlayer = player2;
            this.currentEnemy = player1;
        }
        else if (this.currentPlayer == player2) {
            this.currentPlayer = player1;
            this.currentEnemy = player2;
        }
    }
    
    

    swapWeapon() {
    /**
     * Echange l'arme de currentPlayer contre celle qui est sur sa case
     */
        for (let x = 0; x < this.gameMap.board.length; x++) {
            for (let y = 0; y < this.gameMap.board.length; y++) {
                if (this.gameMap.board[x][y] == this.currentPlayer.position && this.gameMap.board[x][y].weapon != null) {
                    var weaponBuffer = this.gameMap.board[x][y].weapon;
                    this.gameMap.board[x][y].weapon = this.currentPlayer.weapon; // changer en getter
                    this.currentPlayer.weapon = weaponBuffer; // changer en getter
                }
            }
        }
    }

    resetHighlight() {
    /**
     * Remise à zéro du surlignage
     */
        for (var x = 0; x < this.gameMap.board.length; x++) {
            for (var y = 0; y < this.gameMap.board.length; y++) {
                this.gameMap.board[x][y].highlight = false;
            }
        }
    }

    mapLimit(xPlayer,yPlayer,direction) {
    /**
     * Définition des limites du plateau
     */
        let limit;
        switch (direction){
            case "left" :
                var y = yPlayer;
                var stop = false;
                var leftScope = yPlayer-3;
                while (y >= 0 && y >= leftScope && !stop) {
                    if (this.gameMap.board[xPlayer][y].barrel == true || this.gameMap.board[xPlayer][y].player == this.currentEnemy) {
                        stop = true;
                    }
                    y--;
                }
                limit = y + 1;
                break;
            case "right" :
                var y = yPlayer;
                var stop = false;
                var rightScope = yPlayer+3;
                while (y < this.gameMap.board.length && y <= rightScope && !stop) {
                    if (this.gameMap.board[xPlayer][y].barrel == true || this.gameMap.board[xPlayer][y].player == this.currentEnemy) {
                        stop = true;
                    }
                    y++;
                }
                limit = y - 1;
                break;
            case "up" :
                var x = xPlayer;
                var stop = false;
                var upScope = xPlayer-3;
                while (x >= 0 && x >= upScope && !stop) {
                    if (this.gameMap.board[x][yPlayer].barrel == true || this.gameMap.board[x][yPlayer].player == this.currentEnemy) {
                        stop = true;
                    }
                    x--;
                }
                limit = x + 1;
                break;
            case "down" :
                var x = xPlayer;
                var stop = false;
                var downScope = xPlayer+3;
                while (x < this.gameMap.board.length && x <= downScope && !stop) {
                    if (this.gameMap.board[x][yPlayer].barrel == true || this.gameMap.board[x][yPlayer].player == this.currentEnemy) {
                        stop = true;
                    } 
                    x++;
                }
                limit = x - 1;
                break;
            default :
                limit = -1;
        }
        return limit;
    }

    highlight() {
    /**
     * Définition des cases sur lesquelles le joueur en cours peut se déplacer
     */
        for (var x = 0; x < this.gameMap.board.length; x++) {
            for (var y = 0; y < this.gameMap.board.length; y++) {
                if (this.gameMap.board[x][y].player == this.currentPlayer) {
                    let limitUp = this.mapLimit(x, y, "up"); 
                    for (var upX = x; upX >= limitUp; upX--) {this.gameMap.board[upX][y].highlight = true;}
                    let limitDown = this.mapLimit(x, y, "down");
                    for (var downX = x; downX <= limitDown; downX++) {this.gameMap.board[downX][y].highlight = true;}
                    let limitLeft = this.mapLimit(x, y, "left");
                    for (var leftY = y; leftY >= limitLeft; leftY--) {this.gameMap.board[x][leftY].highlight = true;}
                    let limitRight = this.mapLimit(x, y, "right");
                    for (var rightY = y; rightY <= limitRight; rightY++) {this.gameMap.board[x][rightY].highlight = true;}
                }
            }
        }
    }

    movePlayer() {
    /**
     * Gestion des mouvements des joueurs
     */
        for (let x = 0; x < this.gameMap.board.length; x++) { 
            for (let y = 0; y < this.gameMap.board.length; y++) {
                $("#"+x+y ).click(function(e) { //closure
                    if (currentGame.gameMap.board[x][y].highlight == true) {
                        currentGame.currentPlayer.position.player = null;
                        currentGame.gameMap.board[x][y].player = currentGame.currentPlayer;
                        currentGame.currentPlayer.position = currentGame.gameMap.board[x][y];
                        currentGame.swapWeapon();
                        currentGame.playGame();
                    }
                    e.stopPropagation();
                });
            }
        }   
    }    

    playerProximity() {
    /**
     * Détection de la proximité des joueurs
     */
        var sideBySide = false;
        for (let x = 0; x < this.gameMap.board.length; x++) {
            for (let y = 0; y < this.gameMap.board.length; y++) {
                if (this.gameMap.board[x][y].player == this.currentPlayer) { 
                    if (x < 9 && this.gameMap.board[x + 1][y].player == this.currentEnemy){
                        sideBySide = true;
                    }
                    else if (x > 0 && currentGame.gameMap.board[x - 1][y].player == currentGame.currentEnemy){
                        sideBySide = true;
                    }
                    else if (y < 9 && currentGame.gameMap.board[x][y + 1].player == currentGame.currentEnemy){
                        sideBySide = true;
                    }
                    else if (y > 0 && currentGame.gameMap.board[x][y - 1].player == currentGame.currentEnemy){
                        sideBySide = true;
                    }
                }
            }
        }
        return sideBySide;
    }

    proximitySetup () {
    /**
     * Règles appliquées lorsque les joueurs sont à proximité
     */
        $('#attack').removeAttr("disabled")
        $('#defend').removeAttr("disabled")
        $('.playButtons').css("background", "#ffa500");
        this.currentPlayer.position.highlight = true;
        $('#' + this.currentPlayer.position.id).addClass("light");
    }

    gameOver() {
    /**
     * Fin de la partie lorsque les PV d'un joueurs <= 0
     */
        if (this.currentEnemy.health <= 0){
            this.endGame = true;
            alert("Bravo, " + this.currentPlayer.name + " gagne la partie ! Cliquez sur OK pour relancer le jeu.");
            window.location.reload();
        }
    }

    playGame() {
    /**
     * Gestion du tour de chaque joueur
     */
        this.gameOver();
        this.setNextTurn();
        this.resetHighlight();
        this.gameMap.printHtml();
        if (!this.fighting) {
            this.highlight();
        }
        this.gameMap.lightAccessibleCells();
        if (this.playerProximity()) {
            this.proximitySetup();
            if (!this.fighting) {
                this.movePlayer();
            }
        }
        else {
            this.movePlayer();
        }
    }

    start() {
    /**
     * Lancement du jeu
     */
        this.gameMap.generate();
    
        this.gameMap.getEmptyCells();
    
        this.gameMap.placePlayers();
    
        this.gameMap.placeWeapons();
    
        this.gameMap.printHtml();
    
        this.highlight();
    
        this.gameMap.lightAccessibleCells();
    
        this.movePlayer();
    }
}

const weapon1 = new Weapon (1, "hook", 10, '<img src="img/hook.png" alt="hook"></img>');
const weapon2 = new Weapon (2, "knife", 20, '<img src="img/knife.png" alt="knife"></img>');
const weapon3 = new Weapon (3, "sword", 30, '<img src="img/sword.png" alt="sword"></img>');
const weapon4 = new Weapon (4, "harpoon", 40, '<img src="img/harpoon.png" alt="harpoon"></img>');
const weapon5 = new Weapon (5, "gun", 50, '<img src="img/gun.png" alt="gun"></img>');

var player1 = new Player("Joueur 1", 100, weapon1, '<img src="img/player1.png" alt="player1"></img>');
var player2 = new Player ("Joueur 2", 100, weapon1, '<img src="img/player2.png" alt="player2"></img>');



