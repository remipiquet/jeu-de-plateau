window.onload = function()
{
    var canvas = document.getElementById('Pirates!');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }
    
        var tileset = new Image();
        tileset.src = 'img/tileset.png';
        tileset.addEventListener('load', function() {
            var pattern = context.createPattern(tileset, 'repeat');
            context.fillStyle = pattern;
            context.fillRect(0, 0, 500, 500);
        });

        
        var barrel = new Image();
        if(Board.board[x][y] == "barrel"){
            barrel.src = 'img/barrel.png';
            barrel.addEventListener('load', function(){
                context.drawImage(barrel, Board.board[x]*50, Board.board[y]*50, 50, 50);
            });
        }

}

