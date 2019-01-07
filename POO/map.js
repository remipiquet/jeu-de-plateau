class Map {
    /**
     * 
     */
    constructor (mapSize, statBarrels){
        this.mapSize = mapSize;
        this.statBarrels = statBarrels;
        this.board = [];
        this.reDraw = false;
        this.currentPlayer = player1;
        this.currentEnemy = player2;
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
                if (this.board[x][y].barrel == false) { // si les cellules parcourues du tableau sont innaccessibles...
                    emptyCells.push({ X: x, Y: y }); // ...stockage en JSON des cellules vides
                }
                if (this.board[x][y].player == player1) { //FIXME: marche pas
                    console.log("joueur 1 est en " +x +" "+y)
                    emptyCells.splice(-x,1);
                    emptyCells.splice(-y,1);
                    emptyCells.splice(-(x+1),1);
                    emptyCells.splice(-(y+1),1);
                    emptyCells.splice(-(x-1),1);
                    emptyCells.splice(-(y-1),1);
                }
                /*if (this.board[x][y].player == player1) {
                    emptyCells.remove({ X: x, Y: y });
                }
                if (this.board[x][y].player == player1) {
                    emptyCells.push({ X: x+1, Y: y });
                    emptyCells.push({ X: x-1, Y: y });
                    emptyCells.push({ X: x, Y: y+1 });
                    emptyCells.push({ X: x, Y: y-1 });
                }  */     
            }    
        //console.log(emptyCells);
        }
        return emptyCells;    
    }

    getInaccessibleCells() { //FIXME: marche pas
        this.getEmptyCells();
        let inaccessibleCells = [];

        for (let x = 0; x < this.mapSize; x++) {
            for (let y = 0; y < this.mapSize; y++) {
                if (this.board[x][y].player == player1) {
                    inaccessibleCells.push({ X: x, Y: y });
                    inaccessibleCells.push({X:x-1,Y:y});
                    inaccessibleCells.push({X:x+1,Y:y});
                    inaccessibleCells.push({X:x,Y:y-1});
                    inaccessibleCells.push({X:x,Y:y+1});
                }
                /*if (this.board[x-1][y] <= accessibleCells.length) {
                    inaccessibleCells.push({X:x-1,Y:y});
                }
                if (this.board[x+1][y] <= accessibleCells.length) {
                    inaccessibleCells.push({X:x+1,Y:y});
                }
                if (this.board[x][y-1] <= accessibleCells.length) {
                    inaccessibleCells.push({X:x,Y:y-1});
                }
                if (this.board[x][y+1] <= accessibleCells.length) {
                    inaccessibleCells.push({X:x,Y:y+1});
                }*/
                for (var j = 0; j < emptyCells.length; j++) {
                    for (var k = 0; k < emptyCells.length; k++) {
                        if (j >= 0 && emptyCells.length > j) {
                            if (inaccessibleCells[k].X == emptyCells[j].X && inaccessibleCells[k].Y == emptyCells[j].Y) {
                                emptyCells.splice(j, 1);
                            }
                        }
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
        let player1Json = accessibleCells[player1Position]; // FIXME: nom à changer, c'est plus en Json
        this.board[player1Json.X][player1Json.Y].player = player1;
        player1.position = this.board[player1Json.X][player1Json.Y];

        //this.getInaccessibleCells();
        this.getEmptyCells();
        let player2Position = Math.floor(Math.random() * (accessibleCells.length));
        let player2Json = accessibleCells[player2Position]; // FIXME: nom à changer, c'est plus en Json
        this.board[player2Json.X][player2Json.Y].player = player2;
        player2.position = this.board[player2Json.X][player2Json.Y];
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
        let currentPlayer = this.currentPlayer;
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
        let currentPlayer = this.currentPlayer;
        this.board[currentPlayer.positionX + value][currentPlayer.positionY].player = currentPlayer;
        currentPlayer.position = this.board[currentPlayer.positionX + value][currentPlayer.positionY];
        //$('#tableZone').wrap();
        this.printHtml();
        currentGame.setNextTurn();
    }

    highlight() { 
        for (var x = 0; x < this.board.length; x++) { 
            for (var y = 0; y < this.board.length; y++) { 
                if (this.board[x][y].player == currentPlayer) { 
                    if (this.board.length -1 - x >= 3 && x >= 3) {
                        console.log("milieu"); // fonctionne
                        this.board[x+1][y].highlight = true; // FIXME: DRY
                        this.board[x+2][y].highlight = true; 
                        this.board[x+3][y].highlight = true; 

                        this.board[x-1][y].highlight = true; 
                        this.board[x-2][y].highlight = true; 
                        this.board[x-3][y].highlight = true; 
                    }    
                    if (this.board.length -1 - y >= 3 && y >=3){
                        this.board[x][y+1].highlight = true; 
                        this.board[x][y+2].highlight = true; 
                        this.board[x][y+3].highlight = true; 

                        this.board[x][y-1].highlight = true; 
                        this.board[x][y-2].highlight = true; 
                        this.board[x][y-3].highlight = true; 
                    }
                    if (this.board.length-x <= 3) { 
                        console.log("bas");
                        let limiteX = this.board.length-x;
                        for (let i = x+1; i <= limiteX; i++) { // FIXME: marche pas
                            this.board[i][y].highlight = true;
                            console.log("highlight bas"+i+y);
                        }
                        this.board[x-1][y].highlight = true; 
                        this.board[x-2][y].highlight = true; 
                        this.board[x-3][y].highlight = true; 
                    }
                    if (x < 3){
                        console.log("haut");
                        for (let i = x-1; i >= 0; i--) {
                            this.board[i][y].highlight = true;
                            console.log("highlight haut"+i+y);
                        }
                        this.board[x+1][y].highlight = true; 
                        this.board[x+2][y].highlight = true; 
                        this.board[x+3][y].highlight = true; 
                    }
                    if (this.board.length-y <= 3) {
                        console.log("droite");
                        let limiteY = this.board.length;
                        let limiteYmoins = limiteY-y;
                        for (let j = y+1; j < limiteYmoins; j++) {// FIXME: marche pas
                            console.log(j);
                            this.board[x][j].highlight = true;
                            console.log("highlight droite"+x+j);
                        }
                        this.board[x][y-1].highlight = true; 
                        this.board[x][y-2].highlight = true; 
                        this.board[x][y-3].highlight = true; 
                    }
                    if (y < 3) {
                        console.log("gauche");
                        for (let n = y-1; n >= 0; n--) {
                            this.board[x][n].highlight = true;
                            console.log("highlight gauche"+x+n);
                        }
                        this.board[x][y+1].highlight = true; 
                        console.log("highlight"+x+(y+1));
                        this.board[x][y+2].highlight = true; 
                        console.log("highlight"+x+(y+2));
                        this.board[x][y+3].highlight = true; 
                        console.log("highlight"+x+(y+3));
                    }
                }
                /*if (this.board[x][y].barrel == true){
                    console.log("barrel");
                    this.board[x][y].highlight = false; 
                }
                if (this.board[x][y].player == currentEnemy){
                    console.log("enemy");
                    this.board[x][y].highlight = false; 
                }*/
            }
        }
    }

    resetPrint() { //FIXME: marche pas (s'initialise au premier print / n'efface pas l'ancien print du joueur)
        for (let x = 0; x < this.board.length; x++) {
            let row = $("#x"+x);
            $(".row").empty();
            //$('#tableZone .class'+row).remove(row);
            console.log("delete row " +x); // Problème avec le visuel des joueurs qui reste en place
        }
    }  

    printHtml() { 
        if (this.reDraw == true) {
                this.resetPrint();
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
                    let caseContent = "<td id="+ x + y +"></td>";
                    let barrelImg = '<img src="img/barrel.png" alt="barrel"></img>';
                    if (myBoard[x][y].barrel == true) {
                        caseContent = "<td id=" + x + y + ">" + barrelImg +"</td>";
                    }  
                    if (myBoard[x][y].weapon == weapon1) {
                        caseContent = "<td id="+ x + y + ">" + weapon1.imgUrl +"</td>";
                    }  
                    if (myBoard[x][y].weapon == weapon2) {
                        caseContent = "<td id=" + x + y + ">" + weapon2.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].weapon == weapon3) {
                        caseContent = "<td id=" + x + y + ">" + weapon3.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].weapon == weapon4) {
                        caseContent = "<td id=" + x + y + ">" + weapon4.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].weapon == weapon5) {
                        caseContent = "<td id=" + x + y + ">" + weapon5.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].player == player1) {
                        caseContent = "<td id=" + x  + y + " class='light' style='box-shadow: #F2C42C 0px 0px 10px 3px inset;'>" + player1.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].player == player2) {
                        caseContent = "<td id=" + x + y + ">" + player2.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].highlight == true && myBoard[x][y].barrel == false && myBoard[x][y].player == null) {
                        //caseContent = "<td id=y" + y + " class=highlight style='box-shadow: #F2C42C 0px 0px 10px 3px inset;'></td>";
                        let testContent = "#" + x + y;
                        $(testContent).addClass("light"); // FIXME: Pb de sélecteur jQuery ?
                        $('#x' + x + '-y' + y).css("color", "red");
                        // FIXME: Pb avec le css qui ne s'affiche pas
                        }
                    return caseContent;
                });
                /*Test de gestion du clic */
                $('#tableZone').click(function(){
                    alert("clic sur "+x +y);
                });
                /*Fin du test*/
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