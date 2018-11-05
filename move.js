function Move(player){
    this.player = currentPlayer;

    console.log(currentPlayer);
    var command = prompt(playersArray[currentPlayer].name + " à toi de jouer. Où veux tu te déplacer ?");
    var state = false;
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