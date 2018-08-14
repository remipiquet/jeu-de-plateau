Ceci est la mise en ligne sur GitHub de mon Projet 6, formation D�veloppeur d'Application Front-end.

----------------------------------------------------------------------------------------------------------


Ennonc� :

Vous avez jusqu'ici d�velopp� des petites applications JavaScript. 
Il faut maintenant vous lancer dans la cr�ation d'un projet plus complet, plus solide... bref plus costaud. ;)

Ce projet consistera � cr�er un jeu en ligne en JavaScript dans lequel 2 joueurs �voluent chacun leur tour pour s'affronter.  
Comme dans Highlander, il ne peut en rester qu'un !

Etape 1 : g�n�ration de la carte

Commencez par g�n�rer al�atoirement la carte du jeu. Chaque case peut �tre soit :

    Vide

    Inaccessible (gris�e)

Sur la carte, un nombre limit� d�armes (4 maximum) sera plac� al�atoirement et pourra �tre r�colt� par les joueurs qui passeraient dessus.

Vous inventerez au moins 4 types d�arme dans le jeu, avec des d�g�ts diff�rents. L�arme par d�faut qui �quipe les joueurs doit infliger 10 points de d�g�ts. 
Chaque arme a un nom et un visuel associ�.

Le placement des deux joueurs est lui aussi al�atoire sur la carte au chargement de la partie. 
Ils ne doivent pas se toucher (ils ne peuvent pas �tre c�te � c�te).

Fichiers � fournir :

    Code HTML/CSS/JS du projet

Etape 2 : les mouvements

A chaque tour, un joueur peut se d�placer d�une � trois cases (horizontalement ou verticalement) avant de terminer son tour. 
Il ne peut �videmment pas passer � travers un obstacle.

Si un joueur passe sur une case contenant une arme, il laisse son arme actuelle sur place et la remplace par la nouvelle.

Fichiers � fournir :

    Code HTML/CSS/JS du projet

Etape 3 : le combat !

Si les joueurs se croisent sur des cases adjacentes (horizontalement ou verticalement), un combat � mort s�engage.

Lors d'un combat, le fonctionnement du jeu est le suivant :

    Chacun attaque � son tour

    Les d�g�ts inflig�s d�pendent de l�arme poss�d�e par le joueur

    Le joueur peut choisir d�attaquer ou de se d�fendre contre le prochain coup

    Lorsque le joueur se d�fend, il encaisse 50% de d�g�ts en moins qu�en temps normal

    D�s que les points de vie d�un joueur (initialement � 100) tombent � 0 , celui-ci a perdu. Un message s�affiche et la partie est termin�e.

Fichiers � fournir :

    Code HTML/CSS/JS du projet

 
Comp�tences � valider

    Mettre en oeuvre la biblioth�que jQuery dans une application web
    Concevoir une architecture d'application JavaScript r�utilisable
    D�velopper une application JavaScript orient�e objet
