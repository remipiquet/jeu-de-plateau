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

    placePlayers() {
        /**
         * Placement des joueurs sur le plateau
         */
        let accessibleCells = this.getEmptyCells();
        let player1Position = Math.floor(Math.random() * (accessibleCells.length));
        let player1Json = accessibleCells[player1Position];
        this.board[player1Json.X][player1Json.Y].player = player1;
        player1.position = this.board[player1Json.X][player1Json.Y];
        player1.positionX = this.board[player1Json.X];
        player1.positionY = this.board[player1Json.Y];


        let player2Position = Math.floor(Math.random() * (accessibleCells.length));
        if (player1Position == player2Position+1 || player1Position == player2Position-1 || player1Position == player2Position+10 || player1Position == player2Position-10 ) {
            let player2Json = accessibleCells[player2Position];
            this.board[player2Json.X][player2Json.Y].player = player2;
            player2.position = this.board[player2Json.X][player2Json.Y];
        }
        else {
            let player2Json = accessibleCells[player2Position];
            this.board[player2Json.X][player2Json.Y].player = player2;
            player2.position = this.board[player2Json.X][player2Json.Y];
        }
        console.log(player1.position);
        console.log(player2.position);

        //TODO : Les joueurs ne doivent pas pouvoir être côte à côte (et là c'est le cas !!!!)
    }

    placeWeapons() {
        /**
         * Placement des armes sur le plateau
         */
        
        // Placement de l'arme 2 (knife)
        let accessibleCells = this.getEmptyCells();
        let weapon2Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon2Json = accessibleCells[weapon2Position];
        this.board[weapon2Json.X][weapon2Json.Y].weapon = weapon2;

        // Placement de l'arme 3 (sword)
        let weapon3Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon3Json = accessibleCells[weapon3Position];
        this.board[weapon3Json.X][weapon3Json.Y].weapon = weapon3;

        // Placement de l'arme 4 (harpoon)
        let weapon4Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon4Json = accessibleCells[weapon4Position];
        this.board[weapon4Json.X][weapon4Json.Y].weapon = weapon4;

        // Placement de l'arme 5 (gun)
        let weapon5Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon5Json = accessibleCells[weapon5Position];
        this.board[weapon5Json.X][weapon5Json.Y].weapon = weapon5;
    }

    moveRight(value) {
        let currentPlayerJson = currentPlayer.position;
        this.board[currentPlayerJson.X][currentPlayerJson.Y + value].player = currentPlayer;
        currentPlayer.position = this.board[currentPlayerJson.X][currentPlayerJson.Y + value];
        this.printHtml();
    }

    moveLeft(value) {
        let currentPlayerJson = currentPlayer.position;
        this.board[currentPlayerJson.X][currentPlayerJson.Y - value].player = currentPlayer;
        currentPlayer.position = this.board[currentPlayerJson.X][currentPlayerJson.Y - value];
        this.printHtml();
    }

    moveUp(value) {
        let currentPlayerJson = currentPlayer.position;
        this.board[currentPlayerJson.X + value][currentPlayerJson.Y].player = currentPlayer;
        currentPlayer.position = this.board[currentPlayerJson.X + value][currentPlayerJson.Y];
        this.printHtml();
    }

    moveDown(value) {
        let currentPlayerJson = currentPlayer.position;
        this.board[currentPlayerJson.X + value][currentPlayerJson.Y].player = currentPlayer;
        currentPlayer.position = this.board[currentPlayerJson.X + value][currentPlayerJson.Y];
        this.printHtml();
    }

    //swapWeapon() {
        /**
         * Echange l'arme de current player contre celle qui est sur sa case
         */

/*        this.currentPlayer.dropWeapon();
        this.currentPlayer.getWeapon();
    }*/

    ResetPrint() {
        for (let x = 0; x < this.board.length; x++) {
        let row = $("#x"+x);
        row.empty();
        /*$('#tableZone').remove(row);*/
        console.log("delete row " +x); // Problème avec le visuel des joueurs qui reste en place
        }
    }  

    printHtml() {
        /**
         * Gestion de l'affichage sur la page HTML
         */
        if (this.reDraw = true) {
            this.ResetPrint();
        } else {
            this.reDraw = true;
        }
        let myBoard = this.board;
        for (let x = 0; x < this.board.length; x++) {
            var row = $('<tr class="row"></tr>').attr('id', "x"+x);
            for (let y = 0; y < this.board.length; y++) {
            row.append(function(){
                let caseContent = "<td id= y"+y +"> </td>";
                let barrelImg = '<img src="img/barrel.png" alt="barrel"></img>';
                if (myBoard[x][y].barrel == true) {
                caseContent = "<td id= y" + y + ">" + barrelImg +"</td>";
                }  
                if (myBoard[x][y].weapon == weapon1) {
                caseContent = "<td id= y" + y + ">" + weapon1.imgUrl +"</td>";
                }  
                if (myBoard[x][y].weapon == weapon2) {
                caseContent = "<td id= y" + y + ">" + weapon2.imgUrl +"</td>";
                }
                if (myBoard[x][y].weapon == weapon3) {
                caseContent = "<td id= y" + y + ">" + weapon3.imgUrl +"</td>";
                }
                if (myBoard[x][y].weapon == weapon4) {
                caseContent = "<td id= y" + y + ">" + weapon4.imgUrl +"</td>";
                }
                if (myBoard[x][y].weapon == weapon5) {
                caseContent = "<td id= y" + y + ">" + weapon5.imgUrl +"</td>";
                }
                if (myBoard[x][y].player == player1) {
                caseContent = "<td id= y" + y + ">" + player1.imgUrl +"</td>";
                }
                if (myBoard[x][y].player == player2) {
                caseContent = "<td id= y" + y + ">" + player2.imgUrl +"</td>";
                }
        
                return caseContent;
            });
            }
            $('#tableZone').append(row);
        }
        
    } 


};



const gameMap = new Map(10, 10);

let currentPlayer = player1;

gameMap.generate(); 

gameMap.getEmptyCells();

gameMap.placePlayers();

gameMap.placeWeapons();

gameMap.printHtml();



/* TODO
*
* 
*
*/