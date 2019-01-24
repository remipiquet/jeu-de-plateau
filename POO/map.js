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
                } else {
                    this.board[x][y] = new Cell(""+x+y, null, false, null, x, y);
                }
            }
        }
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
                    console.log("joueur 1 est en " + x + y);
                    emptyCells.splice(-x,1);
                    emptyCells.splice(-y,1);
                    emptyCells.splice(-(x+1),1);
                    //console.log("splice " + (x + 1));
                    emptyCells.splice(-(y+1),1);
                    //console.log("splice " + (y + 1));
                    emptyCells.splice(-(x-1),1);
                    //console.log("splice " + (x - 1));
                    emptyCells.splice(-(y-1),1);
                    //console.log("splice " + (y - 1));
                }  
            }    
        }
        return emptyCells;    
    }

    /*playerProximity(){
        for (let x = 0; x < this.mapSize; x++) { // on parcours l'axe X
            for (let y = 0; y < this.mapSize; y++) {
                if (x < this.mapSize - 1 && x > 0 && y < this.mapSize - 1 && y > 0) {
                    console.log("le joueur n'est pas sur un bord")
                }
                if (y == this.mapSize - 1) {
                    console.log("le joueur est tout à droite")
                }
                if (y == 0) {
                    console.log("le joueur est tout à gauche")
                }
                if (x == this.mapSize - 1) {
                    console.log("le joueur est tout en bas")
                }
                if (x == 0) {
                    console.log("le joueur est tout en haut")
                }
            }
        }
    }*/

    placePlayers() {
        /**
         * Placement des joueurs sur le plateau
         */

        let accessibleCells = this.getEmptyCells();
        let player1Position = Math.floor(Math.random() * (accessibleCells.length));
        let player1Pos = accessibleCells[player1Position];
        this.board[player1Pos.X][player1Pos.Y].player = player1;
        player1.position = this.board[player1Pos.X][player1Pos.Y];

        this.getEmptyCells(); // FIXME: le joueur 2 peut apparaitre à côté du joueur 1
        let player2Position = Math.floor(Math.random() * (accessibleCells.length));
        let player2Pos = accessibleCells[player2Position];
        this.board[player2Pos.X][player2Pos.Y].player = player2;
        player2.position = this.board[player2Pos.X][player2Pos.Y];
        if (this.board[player1Pos.X] === this.board[player2Pos.X] || this.board[player1Pos.Y] === this.board[player2Pos.Y]) {
            console.log("reroll "+this.board[player1Pos.X]);
            player1.position.player = null;
            player2.position.player = null;
            this.placePlayers();
            /*this.getEmptyCells();
            let player2Position = Math.floor(Math.random() * (accessibleCells.length));
            let player2Pos = accessibleCells[player2Position];
            this.board[player2Pos.X][player2Pos.Y].player = player2;
            player2.position = this.board[player2Pos.X][player2Pos.Y];*/
        }
    }
        
    

    placeWeapons() {
        /**
         * Placement des armes sur le plateau
         */
        
        let accessibleCells = this.getEmptyCells();
        let weapon2Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon2Pos = accessibleCells[weapon2Position];
        this.board[weapon2Pos.X][weapon2Pos.Y].weapon = weapon2;

        let weapon3Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon3Pos = accessibleCells[weapon3Position];
        this.board[weapon3Pos.X][weapon3Pos.Y].weapon = weapon3;

        let weapon4Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon4Pos = accessibleCells[weapon4Position];
        this.board[weapon4Pos.X][weapon4Pos.Y].weapon = weapon4;

        let weapon5Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon5Pos = accessibleCells[weapon5Position];
        this.board[weapon5Pos.X][weapon5Pos.Y].weapon = weapon5;
    }

    lightAccessibleCells() {
        let myBoard = gameMap.board;
        for (let x = 0; x < gameMap.board.length; x++) {
            for (let y = 0; y < gameMap.board.length; y++) {
                if (myBoard[x][y].highlight == true && myBoard[x][y].barrel == false && myBoard[x][y].player == null) {
                    $('#' + x + y).addClass("light");
                }
                else {
                    this.board[x][y].highlight = false;
                }
            }
        }
    }

    resetPrint() {
        for (let x = 0; x < this.board.length; x++) {
            let row = $("#x"+x);
            $(".row").empty();
            $('#player1Health').empty();
            $('#player2Health').empty();
            $('#player1Weapon').empty();
            $('#player2Weapon').empty();
            $('#player1Strength').empty();
            $('#player2Strength').empty();
        }
    }  

    printHtml() { 
        if (this.reDraw == true) {
                this.resetPrint();
            } else {
                this.reDraw = true;
            }    
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
                        caseContent = "<td id=" + x + y + ">" + player1.imgUrl +"</td>";
                    }
                    if (myBoard[x][y].player == player2) {
                        caseContent = "<td id=" + x + y + ">" + player2.imgUrl +"</td>";
                    }
                    return caseContent;
                });
            }
            $('#tableZone').append(row);
        }
        $('#player1Health').append(player1.health);
        $('#player2Health').append(player2.health);
        $('#player1Weapon').append(player1.weapon.imgUrl);
        $('#player2Weapon').append(player2.weapon.imgUrl);
        $('#player1Strength').append(player1.weapon.damage);
        $('#player2Strength').append(player2.weapon.damage);
    } 


};
