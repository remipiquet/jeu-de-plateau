var ts = new Tileset("grass-tiles.png");

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


        ts.dessinerTile(1, context, 10, 10);
        ts.dessinerTile(5, context, 50, 10);
        ts.dessinerTile(6, context, 90, 10);
        ts.dessinerTile(7, context, 130, 10);
        
}