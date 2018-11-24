function Map(size) {
    /**
     * 
     */
    this.mapSize = size;
	this.statBarrels = statBarrels;
    this.board = new Array();
    this.reDraw = false; // Premier dessin du plateau


    function generate() {
        /**
         * Génération du plateau de jeu en 10x10
         */
        for (var x=0; x<this.mapSize; x++){
            this.board[x] = new Array();
                for(var y=0; y<this.mapSize; y++){
                    //pour chaque colonne de chaque ligne on mets ou non un rocher
                    if(Math.floor((Math.random() * this.statBarrels)) == 0){ // on genere un nombre entre 0 et statBarrels compris et si on a 0 on met un rocher (1/10 de rochers quoi)
                        Cell.barrel = true;
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