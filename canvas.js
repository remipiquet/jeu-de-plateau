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
        barrel.src = 'img/knife.png';
        barrel.addEventListener('load', function(){
            context.drawImage(barrel, myGame.board[weapon2Json.X]*50, myGame.board[weapon2Json.Y]*50);
        });


}
