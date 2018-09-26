window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
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

    var diametreBalle = 15;
    var posX = 1+diametreBalle/2;
    var posY = 1+diametreBalle/2;
    var vitesseX = 3;
    var vitesseY = 3;

    var myInterval = setInterval(animate, 1000/30);

    function animate()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        //tracé de la balle
        context.beginPath();
        context.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
        context.fill();

        //On vérifie si la balle touche l'un des bords du canvas
        if(posX+diametreBalle/2 >= canvas.width || posX <= 0+diametreBalle/2) //si on touche le bord droit ou gauche
        {
            vitesseX *= -1; //on inverse la vitesse de déplacement sur l'axe horizontal
        }

        if(posY+diametreBalle/2 >= canvas.height || posY <= 0+diametreBalle/2) //si on touche le bord haut ou bas
        {
            vitesseY *= -1 //on inverse la vitesse de déplacement sur l'axe vertical
        }

        //on additionne les vitesses de déplacement avec les positions
        posX += vitesseX;
        posY += vitesseY;

    } 
}