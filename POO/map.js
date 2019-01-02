class Map {
    /**
     * 
     */
    constructor (mapSize, statBarrels){
        this.mapSize = mapSize;
        this.statBarrels = statBarrels;
        this.board = [];
        this.reDraw = false;
    }    
    
    generate() {
        /**
         * Génération du plateau de jeu en 10x10 avec à peu près 1/10ème de tonneaux
         */
        for (let x = 0; x < this.mapSize; x++) {
            this.board[x] = [];
            for (let y = 0; y < this.mapSize; y++) {
                if (Math.floor((Math.random() * this.statBarrels)) == 0) {
                    this.board[x][y] = new Cell(""+x+y, null, true, null, x, y);
                    //console.log(Cell);
                } else {
                    this.board[x][y] = new Cell(""+x+y, null, false, null, x, y);
                    //console.log(Cell);
                }
            }
        }
        //console.log(this.board);
        return this.board;
    }

    getEmptyCells() {
        /**
         * Récupération des cases vides
         */
        let emptyCells = new Array(); // on crée un tableau
        for (let x = 0; x < this.mapSize; x++) { // on parcours l'axe X
            for (let y = 0; y < this.mapSize; y++) { // on parcours l'axe Y
                if (this.board[x][y].barrel == false) { // si les cellules parcourues du tableau sont vides...
                    emptyCells.push({ X: x, Y: y }); // ...stockage en JSON des cellules vides
                }
            }
        }
        //console.log(emptyCells);
        return emptyCells;
    };

    clearAdjacentsCells(accessibleCells) { //FIXME: marche pas
        for (let x = 0; x < this.mapSize; x++) {
            for (let y = 0; y < this.mapSize; y++) {
                if (this.board[x][y].player == player1) {
                    for (var j=0; j<this.board.length; j++){
                        accessibleCells.push({X: x,Y: j});
                    }
                    for (var i = 0; i < this.board.length; i++) {
                        accessibleCells.push({X: i,Y: y});
                    }
                    
                }
            }
        }     
    }

    placePlayers() {
        /**
         * Placement des joueurs sur le plateau
         */
        let accessibleCells = this.getEmptyCells();
        let player1Position = Math.floor(Math.random() * (accessibleCells.length));
        let player1Json = accessibleCells[player1Position];
        this.board[player1Json.X][player1Json.Y].player = player1;
        player1.position = this.board[player1Json.X][player1Json.Y];
        this.clearAdjacentsCells(accessibleCells);
        let player2Position = Math.floor(Math.random() * (accessibleCells.length));
        let player2Json = accessibleCells[player2Position];
        this.board[player2Json.X][player2Json.Y].player = player2;
        player2.position = this.board[player2Json.X][player2Json.Y];


        
        //this.board[player1Json.X+1][player1Json.Y].highlight = true;

        //FIXME:    /!\ A revoir, ça ne fonctionne pas !!!!! /!\
        //FIXME: Et en plus il faut un truc pour que ça ne dépasse pas le tableau sinon ça bugue quand par exemple player2Json.X+1 est en dehors du tableau
        /*let player2Position = Math.floor(Math.random() * (accessibleCells.length));
        let player2Json = accessibleCells[player2Position];
        if (this.board[player1Json.X][player1Json.Y] == this.board[player2Json.X+1][player2Json.Y] || this.board[player1Json.X][player1Json.Y] == this.board[player2Json.X-1][player2Json.Y] || this.board[player1Json.X][player1Json.Y] == this.board[player2Json.X][player2Json.Y+1] || this.board[player1Json.X][player1Json.Y] == this.board[player2Json.X][player2Json.Y-1]) {
            player2Position = Math.floor(Math.random() * (accessibleCells.length));
            this.board[player2Json.X][player2Json.Y].player = player2;
            player2.position = this.board[player2Json.X][player2Json.Y];
        }
        else {
            this.board[player2Json.X][player2Json.Y].player = player2;
            player2.position = this.board[player2Json.X][player2Json.Y];
        }
        //console.log(player1.position);
        //console.log(player2.position);*/

    }

    placeWeapons() {
        /**
         * Placement des armes sur le plateau
         */
        
        let accessibleCells = this.getEmptyCells();
        let weapon2Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon2Json = accessibleCells[weapon2Position];
        this.board[weapon2Json.X][weapon2Json.Y].weapon = weapon2;

        let weapon3Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon3Json = accessibleCells[weapon3Position];
        this.board[weapon3Json.X][weapon3Json.Y].weapon = weapon3;

        let weapon4Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon4Json = accessibleCells[weapon4Position];
        this.board[weapon4Json.X][weapon4Json.Y].weapon = weapon4;

        let weapon5Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon5Json = accessibleCells[weapon5Position];
        this.board[weapon5Json.X][weapon5Json.Y].weapon = weapon5;
    }

    /**
     * Méthodes de mouvement des joueurs
     */
    moveRight(value) {
        let currentPlayer = currentGame.currentPlayer;
        let currentPlayerJson = currentPlayer.position;
        this.board[currentPlayerJson.X][currentPlayerJson.Y + value].player = currentPlayer;
        currentPlayer.position = this.board[currentPlayerJson.X][currentPlayerJson.Y + value];
        //$('#tableZone').wrap();
        this.printHtml();
        currentGame.setNextTurn();
    }

    moveLeft(value) {
        let currentPlayer = currentGame.currentPlayer;
        let currentPlayerJson = currentPlayer.position;
        this.board[currentPlayerJson.X][currentPlayerJson.Y - value].player = currentPlayer;
        currentPlayer.position = this.board[currentPlayerJson.X][currentPlayerJson.Y - value];
        //$('#tableZone').wrap();
        this.printHtml();
        currentGame.setNextTurn();
    }

    moveUp(value) {
        let currentPlayer = currentGame.currentPlayer;
        let currentPlayerJson = currentPlayer.position;
        this.board[currentPlayerJson.X - value][currentPlayerJson.Y].player = currentPlayer;
        currentPlayer.position = this.board[currentPlayerJson.X - value][currentPlayerJson.Y];
        //$('#tableZone').wrap();
        this.printHtml();
        currentGame.setNextTurn();
    }

    moveDown(value) {
        let currentPlayer = currentGame.currentPlayer;
        let currentPlayerJson = currentPlayer.position;
        this.board[currentPlayerJson.X + value][currentPlayerJson.Y].player = currentPlayer;
        currentPlayer.position = this.board[currentPlayerJson.X + value][currentPlayerJson.Y];
        //$('#tableZone').wrap();
        this.printHtml();
        currentGame.setNextTurn();
    }

    highlight() { 
        for (var x = 0; x < this.board.length; x++) { 
            for (var y = 0; y < this.board.length; y++) { 
                if (this.board[x][y].player == currentPlayer) { 
                    if (this.board.length -1 - x >= 3 && this.board.length -1 - y >= 3 && x >= 3 && y >=3) {
                        console.log("milieu"); // fonctionne
                        this.board[x+1][y].highlight = true; 
                        this.board[x+2][y].highlight = true; 
                        this.board[x+3][y].highlight = true; 

                        this.board[x-1][y].highlight = true; 
                        this.board[x-2][y].highlight = true; 
                        this.board[x-3][y].highlight = true; 

                        this.board[x][y+1].highlight = true; 
                        this.board[x][y+2].highlight = true; 
                        this.board[x][y+3].highlight = true; 

                        this.board[x][y-1].highlight = true; 
                        this.board[x][y-2].highlight = true; 
                        this.board[x][y-3].highlight = true; 
                    }
                    if (this.board.length-x < 3) { // FIXME: marche pas
                        console.log("bas");
                        let limiteX = 10-x;
                        for (var i = x+1; i <= this.board.length-x; i++) { // c'est le limiteX qui ne marche pas
                            this.board[i][y].highlight = true;
                            this.board[x-1][y].highlight = true; 
                            this.board[x-2][y].highlight = true; 
                            this.board[x-3][y].highlight = true; 
                            console.log(i);
                        }
                    }
                    if (x < 3 && x > 0){ // fonctionne
                        console.log("haut");
                        for (var m = x-1; m >= 0; m--) {
                            this.board[m][y].highlight = true;
                            this.board[x+1][y].highlight = true; 
                            this.board[x+2][y].highlight = true; 
                            this.board[x+3][y].highlight = true; 
                            console.log(m);
                        }
                    }
                    if (this.board.length-y < 3) { // FIXME: marche pas
                        console.log("droite");
                        let limiteY = 10-y;
                        for (var j = y+1; j <= this.board.length-y; j++) {
                            console.log(j);
                            this.board[x][j].highlight = true;
                            this.board[x][y-1].highlight = true; 
                            this.board[x][y-2].highlight = true; 
                            this.board[x][y-3].highlight = true; 
                        }
                    }
                    if (y < 3 && y > 0) { // fonctionne
                        console.log("gauche");
                        for (var n = y-1; n >= 0; n--) {
                            this.board[x][n].highlight = true;
                            this.board[x][y+1].highlight = true; 
                            this.board[x][y+2].highlight = true; 
                            this.board[x][y+3].highlight = true; 
                            console.log(n);
                        }
                    }
                }
                if (this.board[x][y].barrel == true){
                    console.log("barrel");
                    this.board[x][y].highlight = false; 
                }
                if (this.board[x][y].player == currentEnemy){
                    console.log("enemy");
                    this.board[x][y].highlight = false; 
                }
            }
        }
    }

    ResetPrint() { //FIXME: marche pas (s'initialise au premier print / n'efface pas l'ancien print du joueur)
        for (let x = 0; x < this.board.length; x++) {
            let row = $("#x"+x);
            $(".row").empty();
            //$('#tableZone .class'+row).remove(row);
            console.log("delete row " +x); // Problème avec le visuel des joueurs qui reste en place
        }
    }  

    printHtml() { 
        if (this.reDraw == true) {
                this.ResetPrint();
            } else {
                this.reDraw = true;
            }    
        //$(".row").remove();
        let myBoard = this.board;
        for (let x = 0; x < this.board.length; x++) {
            var row = $('<tr class="row"></tr>').attr('id', "x"+x);
            for (let y = 0; y < this.board.length; y++) {
                row.append(function(){
                    //$("#y"+y).empty();
                    let caseContent = "<td id=y"+y +"> </td>";
                    let barrelImg = '<img src="img/barrel.png" alt="barrel"></img>';
                    if (myBoard[x][y].barrel == true) {
                    caseContent = "<td id=y class=barrel" + y + ">" + barrelImg +"</td>";
                    }  
                    if (myBoard[x][y].weapon == weapon1) {
                    caseContent = "<td id=y class=weapon1" + y + ">" + weapon1.imgUrl +"</td>";
                    }  
                    if (myBoard[x][y].weapon == weapon2) {
                    caseContent = "<td id=y class=weapon2" + y + ">" + weapon2.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].weapon == weapon3) {
                    caseContent = "<td id=y class=weapon3" + y + ">" + weapon3.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].weapon == weapon4) {
                    caseContent = "<td id=y class=weapon4" + y + ">" + weapon4.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].weapon == weapon5) {
                    caseContent = "<td id=y class=weapon5" + y + ">" + weapon5.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].player == player1) {
                    caseContent = "<td id=y class=player1" + y + ">" + player1.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].player == player2) {
                    caseContent = "<td id=y class=player2" + y + ">" + player2.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].highlight == true) {
                        caseContent = "<td id=y" + y + " class=highlight style='background-color:green;'></td>";
                        }
                    return caseContent;
                });
            }
            $('#tableZone').append(row);
        }
        
    } 


};

//TODO: A passer dans pirates.js ?

const gameMap = new Map(10, 10);

let currentPlayer = player1;
let currentEnemy = player2;

gameMap.generate(); 

gameMap.getEmptyCells();

gameMap.placePlayers();

gameMap.placeWeapons();

gameMap.highlight();

gameMap.printHtml();



/* TODO
*
* 
*
*/