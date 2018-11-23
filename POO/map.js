function Map() {
    /**
     * 
     */
    this.mapSize = mapSize;
	this.statBarrels = statBarrels;
    this.board = new Array();
    this.reDraw = false; // Premier dessin du plateau
    this.currentPlayer //TODO


    function generate() {
        /**
         * Génération du plateau de jeu en 10x10
         */
        for (var x=0; x<this.mapSize; x++){
            this.board[x] = new Array();
                for(var y=0; y<this.mapSize; y++){
                    //pour chaque colonne de chaque ligne on mets ou non un rocher
                    if(Math.floor((Math.random() * this.statBarrels)) == 0){ // on genere un nombre entre 0 et statBarrels compris et si on a 0 on met un rocher (1/10 de rochers quoi)
                        this.board[x][y] = "barrel";
                    }else{    // dans ce cas la case est vide
                        this.board[x][y] = 0;
                    }
                }
        }
    }

    function placePlayers() {
        /**
         * Placement des joueurs sur le plateau
         */
        

    }

    function placeWeapons() {
        /**
         * Placement des armes sur le plateau
         */
        

    }

    function swapWeapon() {
        /**
         * Echange l'arme de current player contre celle qui est sur sa case
         */

        this.currentPlayer.dropWeapon();
        this.currentPlayer.getWeapon();
    }

    function movePlayer() {
        /**
         * Gestion des mouvements des joueurs
         */
        //TODO Appeler swapWeapon quand arme sur le passage
        switch (command) {
            case "droite1":
                this.MoveRight(1);
                break;
            case "gauche1":
                MoveLeft(currentPlayer, 1);
                break;
            case "haut1":
                MoveUp(currentPlayer, 1);
                break;
            case "bas1":
                MoveDown(currentPlayer, 1);
                break;
    
            case "droite2":
                MoveRight(currentPlayer, 2);
                break;
            case "gauche2":
                MoveLeft(currentPlayer, 2);
                break;
            case "haut2":
                MoveUp(currentPlayer, 2);
                break;
            case "bas2":
                MoveDown(currentPlayer, 2);
                break;
    
            case "droite3":
                MoveRight(currentPlayer, 3);
                break;
            case "gauche3":
                MoveLeft(currentPlayer, 3);
                break;
            case "haut3":
                MoveUp(currentPlayer, 3);
                break;
            case "bas3":
                MoveDown(currentPlayer, 3);
                break;
    
            case "stop":
                state=true;
                break;
            
            default:
                alert("Je n'ai pas compris!");
        
            return state;  
        }

    }

    function fight() {
        /**
         * Gestion du combat des joueurs
         */

    }

    function gameOver() {
        /**
         * Fin de la partie lorsque les PV d'un joueurs <= 0
         */
        

    }

    function turnByTurn() {
        /**
         * Gestion du tour par tour
         */
        

    }

    function printHtml() {
        /**
         * Gestion de l'affichage sur la page HTML
         */
        

    }

}