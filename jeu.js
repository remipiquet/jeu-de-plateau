//Test de maj Git

// allo allo ?

function Game(mapSize, statRocks) {
    /*
		mapSize -> la taille d'un des coté de la carte
		statRocks -> si on veut beaucoup de rochers, on aura une proportion de rochers de 1/statRocks a peu près
		plateau -> la map du jeu dans un tableau
		players -> un tableau contenant les joueurs
        weaponsNumber -> nombre d'armes générées sur le plateau
	*/

    //Propriétés
	this.mapSize = mapSize; // taille d'un des côtés de la carte
	this.statRocks = statRocks; // proportion des rocher 
	this.plateau = new Array(); //création des lignes du tableau
    
    //   /!\ A partir de là, à virer pour passer en méthodes /!\
    for (var x=0; x<this.mapSize; x++){ // on génère le coté X du plateau par rapport à la mapSize 
		//console.log('x = '+ x); //histoire de comprendre ce que ca fait en console
        
            this.plateau[x] = new Array(); // on crée notre tableau de colonne pour chaque ligne
		
            // pour chaque x on parcours tout les y possibles
            for(var y=0; y<this.mapSize; y++){ 
                //pour chaque colonne de chaque ligne on mets ou non un rocher
                if(Math.floor((Math.random() * this.statRocks)) == 0){ // on genere un nombre entre 0 et statRocks compris et si on a 0 on met un rocher (1/10 de rochers quoi)
				this.plateau[x][y] = 4;
                }else{    // dans ce cas la case est vide
				this.plateau[x][y] = 3; // TODO: vérifier que l'initialisation a 0 est utile dans bien des langages de prog les tableaux sont par défaut a 0
                // j'ai mis 4 quand y'a un rocher et 3 quand c'est vide comme ça on réserve 1 et 2 pour les joueurs 
                }

        }
    }

    
    //Méthodes
    this.initParameters = function () {
        this.initMap();
        this.initPlayers();
        this.initRocks();
    };

    this.initMap = function () {
        for (var x=0; x<this.mapSize; x++){ // on génère le coté X du plateau par rapport à la mapSize 
		//console.log('x = '+ x); //histoire de comprendre ce que ca fait en console
        
            this.plateau[x] = new Array(); // on crée notre tableau de colonne pour chaque ligne
		
            // pour chaque x on parcours tout les y possibles
            for(var y=0; y<this.mapSize; y++){ 
                //pour chaque colonne de chaque ligne on mets ou non un rocher
                if(Math.floor((Math.random() * this.statRocks)) == 0){ // on genere un nombre entre 0 et statRocks compris et si on a 0 on met un rocher (1/10 de rochers quoi)
				this.plateau[x][y] = 4;
                }else{    // dans ce cas la case est vide
				this.plateau[x][y] = 3; // TODO: vérifier que l'initialisation a 0 est utile dans bien des langages de prog les tableaux sont par défaut a 0
                // j'ai mis 4 quand y'a un rocher et 3 quand c'est vide comme ça on réserve 1 et 2 pour les joueurs 
                }
            }
        }
    }
}

    
    this.initPlayers = function () {
        for(var x=0; x<this.mapSize; x++) {
           this.plateau[x] = new Array(); 
        }
    }
    
    this.initRocks = function () { // on génère le coté Y du plateau par rapport à la mapSize
			//console.log('    y = '+ y); //histoire de comprendre ce que ca fait en console
			
			//pour chaque colonne de chaque ligne on mets ou non un rocher
			if(Math.floor((Math.random() * this.statRocks)) == 0){ // on genere un nombre entre 0 et statRocks compris et si on a 0 on met un rocher (1/10 de rochers quoi)
				this.plateau[x][y] = 4;
            }else{    // dans ce cas la case est vide
				this.plateau[x][y] = 3; // TODO: vérifier que l'initialisation a 0 est utile dans bien des langages de prog les tableaux sont par défaut a 0
                // j'ai mis 4 quand y'a un rocher et 3 quand c'est vide comme ça on réserve 1 et 2 pour les joueurs 
            }

    }  
    


function players (){
    this.life = 100;
    this.weapon = weapon;
    this.positionX = x;
    this.positionY = y;
}

//fonction pour récupérer les cases vides
Game.prototype.getCasesVides = function() {
	for(var x=0; x<this.mapSize; x++){
		for(var y=0; y<this.mapSize; y++){
            if (this.plateau[x][y] == 3){
                console.log("x: "+ x +" y: " + y + " est vide ")
            }
        }
    }              
};


// mettre 4 armes aléatoirement dans les cases vides


Game.prototype.contenuCase = function(x, y) {	// retourne l'état d'une case du plateau
    console.log(this.plateau[x][y]);
	return this.plateau[x][y];
};

Game.prototype.afficheTout = function() { // retourne l'état de toutes les cases du plateau
	for(var x=0; x<this.mapSize; x++){
		for(var y=0; y<this.mapSize; y++){
			console.log("La case X: "+x+" Y: "+y+" contient "+this.plateau[x][y]);
		}
	}
};





var myGame = new Game(5, 4);

//myGame.contenuCase(1, 2);
//myGame.afficheTout();    
//myGame.getCasesVides();    
