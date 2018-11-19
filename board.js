function Board(mapSize, statRocks) {
    /*
		mapSize -> la taille d'un des coté de la carte
		statRocks -> si on veut beaucoup de rochers, on aura une proportion de rochers de 1/statRocks a peu près
	*/

	this.mapSize = mapSize;
	this.statRocks = statRocks;
    this.board = new Array();
    this.active = false; // Premier dessin du plateau

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
this.contenuCase = function(x, y) {
    console.log(this.board[x][y]);
	return this.board[x][y];
};

// fonction pour retourner l'état de toutes les cases du plateau
this.afficheTout = function() {
	for(var x=0; x<this.mapSize; x++){
		for(var y=0; y<this.mapSize; y++){
			console.log("La case X: " + x + " Y: " + y + " contient " + this.board[x][y]);
		}
	}
};

// placement des joueurs sur le plateau

var playersArray = [];
var nbPlayers = 2; 
for (var i = 0; i < nbPlayers; i++) {
    var index = parseInt(i) + 1;
    var player = new Player('Joueur ' + index, 100, weapon1);
    playersArray.push(player); // TODO a passer en POO
}
var currentPlayer = 0;
var currentEnemy = 1;
var accessibleCells = this.Board.getEmptyCells();

function placePlayers() {
    // pour chaque joueur on place le joueur de maniere a ne pas etre a coté d'un autre joueur
    for (var indexPlayer = 0; indexPlayer < nbPlayers; indexPlayer++) {
        playersArray[indexPlayer].position = Math.floor(Math.random() * (accessibleCells.length));

        // On rend inacccessible les cases qui sont proches de player x et sa case
        var inaccessibleCells = new Array();
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
        for (var j = 0; j < accessibleCells.length; j++) {
            for (var k = 0; k < inaccessibleCells.length; k++) {
                if (j >= 0 && accessibleCells.length > j) {
                    if (inaccessibleCells[k].X == accessibleCells[j].X && inaccessibleCells[k].Y == accessibleCells[j].Y) {
                        accessibleCells.splice(j, 1);
                    }
                }
            }
        } 
    }
}
placePlayers();

var player1 = playersArray[0];
var player2 = playersArray[1];
var player1Json = player1.position;
var player2Json = player2.position;
this.board[player1Json.X][player1Json.Y] = player1; 
this.board[player2Json.X][player2Json.Y] = player2;

// placement des armes sur le plateau

/********************************************
*     Placement des armes sur le plateau    *
********************************************/
function placeWeapons() {
    // Placement de l'arme 2 (knife)
    var accessibleCells = this.getEmptyCells();
    var weapon2Position = Math.floor(Math.random() * (accessibleCells.length));
    var weapon2Json = accessibleCells[weapon2Position];
    this.board[weapon2Json.X][weapon2Json.Y] = weapon2;

    // Placement de l'arme 3 (sword)
    var accessibleCells = this.getEmptyCells();
    var weapon3Position = Math.floor(Math.random() * (accessibleCells.length));
    var weapon3Json = accessibleCells[weapon3Position];
    this.board[weapon3Json.X][weapon3Json.Y] = weapon3;
  
    // Placement de l'arme 4 (harpoon)
    var accessibleCells = this.board.getEmptyCells();
    var weapon4Position = Math.floor(Math.random() * (accessibleCells.length));
    var weapon4Json = accessibleCells[weapon4Position];
    this.board[weapon4Json.X][weapon4Json.Y] = weapon4;
    // Placement de l'arme 5 (gun)
    var accessibleCells = this.board.getEmptyCells();
    var weapon5Position = Math.floor(Math.random() * (accessibleCells.length));
    var weapon5Json = accessibleCells[weapon5Position];
    this.board[weapon5Json.X][weapon5Json.Y] = weapon5; 

    // Commande pour voir le plateau en textuel
    myGame.afficheTout();
}
placeWeapons();

