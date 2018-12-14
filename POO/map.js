class Map {
    /**
     * 
     */
    constructor (mapSize, statBarrels, board, reDraw,){
        this.mapSize = mapSize;
        this.statBarrels = statBarrels;
        this.board = board;
        this.reDraw = reDraw;
    }    
    
    Accesseurs
    // Méthodes

    generate() {
        /**
         * Génération du plateau de jeu en 10x10 avec à peu près 1/10ème de tonneaux
         */
        this.board = [];
        for (var x=0; x<this.mapSize; x++){
            this.board[x] = new Array();
                for(var y=0; y<mapSize; y++){
                    if(Math.floor((Math.random() * statBarrels)) == 0){ 
                        Cell.barrel = true;
                    }else{
                        Cell.barrel = false;
                    }
                }
        }
        return this.board;
    };

    getEmptyCells() { 
        /**
         * Récupération des cases vides
         */
        var emptyCells = new Array(); // on crée un tableau
        for(var x=0; x<mapSize; x++){ // on parcours l'axe X
            for(var y=0; y<mapSize; y++){ // on parcours l'axe Y
                if (board[x][y] == 0){ // si les cellules parcourues du tableau sont vides...
                        emptyCells.push({X : x, Y : y}); // ...stockage en JSON des cellules vides
                }
            }
        }
            return emptyCells;
    };


    placePlayers() {
        /**
         * Placement des joueurs sur le plateau
         */
        
        var accessibleCells = getEmptyCells();

        // pour chaque joueur on place le joueur de maniere a ne pas etre a coté d'un autre joueur
        for (let indexPlayer = 0; indexPlayer < numberOfPlayers; indexPlayer++) {
            player1.position = Math.floor(Math.random() * (accessibleCells.length));

            // On rend inacccessible les cases qui sont proches de player x et sa case
            let inaccessibleCells = new Array();
            inaccessibleCells.push(playersArray[indexPlayer].position);

            if (playersArray[indexPlayer].position.X - 1 >= 0) {
                inaccessibleCells.push({
                    X: playersArray[indexPlayer].position.X - 1,
                    Y: playersArray[indexPlayer].position.Y
                });
            }

            if (playersArray[indexPlayer].position.X + 1 <= accessibleCells.length) {
                inaccessibleCells.push({
                    X: playersArray[indexPlayer].position.X + 1,
                    Y: playersArray[indexPlayer].position.Y
                });
            }

            if (playersArray[indexPlayer].position.Y - 1 >= 0) {
                inaccessibleCells.push({
                    X: playersArray[indexPlayer].position.X,
                    Y: playersArray[indexPlayer].position.Y - 1
                });
            }

            if (playersArray[indexPlayer].position.X + 1 <= accessibleCells.length) {
                inaccessibleCells.push({
                    X: playersArray[indexPlayer].position.X,
                    Y: playersArray[indexPlayer].position.Y + 1
                });
            }

            // on enleve les cases inaccessibles des cases accessibles
            for (let j = 0; j < accessibleCells.length; j++) {
                for (let k = 0; k < inaccessibleCells.length; k++) {
                    if (j >= 0 && accessibleCells.length > j) {
                        if (inaccessibleCells[k].X == accessibleCells[j].X && inaccessibleCells[k].Y == accessibleCells[j].Y) {
                            accessibleCells.splice(j, 1);
                        }
                    }
                }
            } 
        }
    } 

    placeWeapons() {
        /**
         * Placement des armes sur le plateau
         */
        
        // Placement de l'arme 2 (knife)
        let accessibleCells = myGame.getEmptyCells();
        let weapon2Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon2Json = accessibleCells[weapon2Position];
        myGame.board[weapon2Json.X][weapon2Json.Y] = weapon2;

        // Placement de l'arme 3 (sword)
        let weapon3Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon3Json = accessibleCells[weapon3Position];
        myGame.board[weapon3Json.X][weapon3Json.Y] = weapon3;

        // Placement de l'arme 4 (harpoon)
        let weapon4Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon4Json = accessibleCells[weapon4Position];
        myGame.board[weapon4Json.X][weapon4Json.Y] = weapon4;
        // Placement de l'arme 5 (gun)
        let weapon5Position = Math.floor(Math.random() * (accessibleCells.length));
        let weapon5Json = accessibleCells[weapon5Position];
        myGame.board[weapon5Json.X][weapon5Json.Y] = weapon5;
    }

    swapWeapon() {
        /**
         * Echange l'arme de current player contre celle qui est sur sa case
         */

        this.currentPlayer.dropWeapon();
        this.currentPlayer.getWeapon();
    }

    movePlayer() {
        /**
         * Gestion des mouvements des joueurs
         */
        //TODO Appeler swapWeapon quand arme sur le passage
        

    }

    // fonction pour retourner l'état de toutes les cases du plateau
    afficheTout() {
        for(var x=0; x<this.mapSize; x++){
            for(var y=0; y<this.mapSize; y++){
                console.log("La case X: " + x + " Y: " + y + " contient " + this.board[x][y]);
            }
        }
    };

    printHtml() {
        /**
         * Gestion de l'affichage sur la page HTML
         */
        

    }


};

const testMap = new Map(10, 8, [], false);



testMap.generate();

/* TODO
*
* Lier map.board à cell.js 
*
*/