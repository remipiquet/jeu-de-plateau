function Board(mapSize, statRocks) {
    /*
		mapSize -> la taille d'un des coté de la carte
		statRocks -> si on veut beaucoup de rochers, on aura une proportion de rochers de 1/statRocks a peu près
	*/

	this.mapSize = mapSize;
	this.statRocks = statRocks;
	this.board = new Array();

    //Génération du plateau et des cases "rocher" (Barrel)
    for (var x=0; x<this.mapSize; x++){
        this.board[x] = new Array();
            for(var y=0; y<this.mapSize; y++){
                //pour chaque colonne de chaque ligne on mets ou non un rocher
                if(Math.floor((Math.random() * this.statRocks)) == 0){ // on genere un nombre entre 0 et statRocks compris et si on a 0 on met un rocher (1/10 de rochers quoi)
				    this.board[x][y] = "barrel";
                }else{    // dans ce cas la case est vide
				    this.board[x][y] = 0;
                }
            }
    }

    //Méthodes
    this.initParameters = function () {
        this.initMap();
        this.initPlayers();
        this.initRocks();
    };

}

//fonction pour récupérer les cases vides
Board.prototype.getEmptyCells = function() {
	var emptyCells = new Array(); // on crée un tableau
	for(var x=0; x<this.mapSize; x++){ // on parcours l'axe X
		for(var y=0; y<this.mapSize; y++){ // on parcours l'axe Y
            if (this.board[x][y] == 0){ // si les cellules parcourues du tableau sont vides...
                	emptyCells.push({X : x, Y : y}); // ...stockage en JSON des cellules vides
            }
        }
    }
		return emptyCells;
};

// fonction pour retourner l'état d'une case du plateau
Board.prototype.contenuCase = function(x, y) {
    console.log(this.board[x][y]);
	return this.board[x][y];
};

// fonction pour retourner l'état de toutes les cases du plateau
Board.prototype.afficheTout = function() {
	for(var x=0; x<this.mapSize; x++){
		for(var y=0; y<this.mapSize; y++){
			console.log("La case X: " + x + " Y: " + y + " contient " + this.board[x][y]);
		}
	}
};

// placement des joueurs sur le plateau

// placement des armes sur le plateau


