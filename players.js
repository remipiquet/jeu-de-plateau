    // Fichier js des joueurs 

// /!\IL RESTE TOUT A FAIRE/!\
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