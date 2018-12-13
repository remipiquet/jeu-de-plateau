class Map {
    /**
     * 
     */
    constructor (mapSize, statBarrels){
        this.mapSize = mapSize;
        this.statBarrels = statBarrels;
        this.board = new Array(); // A lier avec cell.js
        this.reDraw = false; // Premier dessin du plateau
    }    
}

function generate() {
    /**
     * Génération du plateau de jeu en 10x10 avec à peu près 1/10ème de tonneaux
     */
    for (let x=0; x<this.mapSize; x++){
        this.board[x] = new Array();
            for(let y=0; y<this.mapSize; y++){
                if(Math.floor((Math.random() * this.statBarrels)) == 0){ 
                    this.board[x][y] = "barrel";
                }else{
                    this.board[x][y] = 0;
                }
            }
    }
}
generate();

function getEmptyCells() { 
    /**
     * Récupération des cases vides
     */
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


function placePlayers() {
    /**
     * Placement des joueurs sur le plateau
     */
    
    // Création du tableau de joueurs et génération en fonction du nombre de joueurs choisis 
    var playersArray = [];
    var numberOfPlayers = 2;
    for (var i = 0; i < numberOfPlayers; i++) {
        var index = parseInt(i) + 1;
        var player = new Player('Joueur ' + index, 100, "hook");
        playersArray.push(player);
    }
    var accessibleCells = getEmptyCells();
    /* A VIRER
    let currentPlayer = 0;
    let currentEnemy = 1;
    let accessibleCells = this.Board.getEmptyCells();
    */

// pour chaque joueur on place le joueur de maniere a ne pas etre a coté d'un autre joueur
    for (let indexPlayer = 0; indexPlayer < numberOfPlayers; indexPlayer++) {
        playersArray[indexPlayer].position = Math.floor(Math.random() * (accessibleCells.length));

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
        return playersArray;

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
placePlayers();


let player1 = playersArray[0];
let player2 = playersArray[1];
let player1Json = player1.position;
let player2Json = player2.position;
this.board[player1Json.X][player1Json.Y] = player1; 
this.board[player2Json.X][player2Json.Y] = player2;



function placeWeapons() {
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
placeWeapons();

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

// fonction pour retourner l'état de toutes les cases du plateau
function afficheTout() {
    for(var x=0; x<this.mapSize; x++){
        for(var y=0; y<this.mapSize; y++){
            console.log("La case X: " + x + " Y: " + y + " contient " + this.board[x][y]);
        }
    }
};
afficheTout();

function printHtml() {
    /**
     * Gestion de l'affichage sur la page HTML
     */
    

}





/* TODO
*
* Lier map.board à cell.js 
*
*/