function Game(mapSize, statRocks, joueurs){
	/*
		mapSize -> la taille d'un des coté de la carte
		statRocks -> si on veut beaucoup de rochers, on aura une proportion de rochers de 1/statRocks a peu près
		plateau -> la map du jeu dans un tableau
		joueurs -> un tableau contenant les joueurs
	*/
	
	this.mapSize = mapSize;
	this.statRocks = statRocks;
	this.joueurs = joueurs;
	this.plateau = new Array();
	
	var caseVide = new Array();

	// mise en place des rochers sur le plateau
	for(var x=0; x<mapSize; x++){
		console.log('x = '+ x); //histoire de comprendre ce que ca fait en console
		
		this.plateau[x] = new Array(); // on crée notre tableau de colonne pour chaque ligne
		
		// pour chaque x on parcours tout les y possibles
		for(var y=0; y<mapSize; y++){
			console.log('    y = '+ y); //histoire de comprendre ce que ca fait en console
			
			//pour chaque colonne de chaque ligne on mets ou non un rocher
			if(Math.floor((Math.random() * statRocks)) == 0){ // on genere un nombre entre 0 et statRocks compris et si on a 0 on met un rocher (1/10 de rochers quoi)
				this.plateau[x][y] = 1;
			}else{ // dans ce cas la case est vide
				this.plateau[x][y] = 0; // TODO: vérifier que l'initialisation a 0 est utile dans bien des langages de prog les tableaux sont par défaut a 0
                //TODO Ajouter les coordonées X et Y dans caseVide
			}
		}
	}
	
	// TODO mise en place des joueurs sur le plateau 
        //pour chaque "joueurs" du tableau, on lui trouve une position -> random sur la position caseVide 
	// TODO mise en place des armes sur le plateau

}



Game.prototype.contenuCase = function(x, y) {
	// retourne l'état d'une case (0 si c'est vide 1 si c'est un rocher)
	console.log("La case a la valeur: "+this.plateau[x][y]);
	
	return this.plateau[x][y];
};


Game.prototype.afficheTout = function() {
	for(var x=0; x<this.mapSize; x++){
		for(var y=0; y<this.mapSize; y++){
			console.log("La case X: "+x+" Y: "+y+" contient: "+this.plateau[x][y]);
		}
	}
};

Game.prototype.move = function(joueur, destX, destY){
		// destX: les coordonnées x de la destination
		// destY: devines !
		/*
		Si le joueur ne peut pas faire ce deplacement, retourne faux
		sinon fait le deplacement, echange les armes au besoin puis retourne vrai.
		*/
		
};

Game.prototype.attaque = function(attaquant, attaquer){
		// Les deux parametres sont des objets joueurs
		/*
		Si attaquer est a portee de l'arme d'attaquant et qu'il n'y a pas d'obstacle sur la route
		*/
		
		// TODO verifier les conditions avant l'attaque
		// attaquer.recoitAttaque(attaquant.getWeapon().getForce());
}


Game.prototype.start = function() {
	/**
	Lance le jeu.
	*/
	
	while(){
		// A chaque tour de boucle, un joueur se déplace puis il attaque si il veut/peut. 
          //    /!\    QUEL JOUEUR  ? IL FAUT GERER LE TOUR PAR TOUR   /!\
		// Lorsqu'il ne reste plus qu'un joueur vivant, la partie est finie et il a gagné.
		// TODO ce qui est marqué au dessus.
	}
};

function Weapon(nom, force, portee){
	// nom: le nom de l'arme
	// force: le nombre de points sante que l'arme enlève par attaque
	// portee: la distance jusqu'a laquelle l'arme peut toucher l'adversaire
	
}

Weapon.prototype.getForce = function(){
	return this.force;
}

function Player(nom, sante){
	// nom: le nom du joueur
	// sante: le nombre de points de vie du joueur
	// weapon: son arme
	
}


Player.prototype.recoitAttaque = function(force){
	// force: la force de l'attaque
	/*******************************************
	Inflige les degats au joueur, retourne son état de
	sante apres l'attaque.
	********************************************/
	
	
}


Player.prototype.getWeapon = function(){
	// renvoie l'arme du joueur
	
}

Player.prototype.setWeapon = function(weapon){
	// assigne une arme a la place de l'arme précédente
	
}

//var monGame = new Game(3, 5);

// monGame.contenuCase(1,2);
// monGame.afficheTout();






