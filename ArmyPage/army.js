function initFunc(){
    var canvas = document.getElementById("myCanvas");

    if( canvas.getContext){
		var ctx = canvas.getContext("2d");
        
        var Kx = 100;
		var Ky = 130;

        var x=25;
        var y=25;

        //First line
        ctx.beginPath();
        ctx.moveTo(x+Kx, y+Ky);
        ctx.lineTo(x+20+Kx, y+Ky);
        ctx.lineTo(x+20+Kx, y+30+Ky);
        ctx.fill();
        //first Rectangle
        ctx.beginPath();
        ctx.rect(x+20+Kx,y+Ky,250,30);
        ctx.fill();

        //Second Line
        ctx.beginPath();
        ctx.fillStyle = '#FF0000';
        ctx.moveTo(65+Kx, 65+Ky);
        ctx.lineTo(45+Kx, 65+Ky);
        ctx.lineTo(55+Kx, 85+Ky);
        ctx.fill();
        //Second Rectangle    
        ctx.beginPath();
        ctx.rect(55+Kx,65+Ky,240,20);
        ctx.fill();

        //Third Line
        ctx.beginPath();
        ctx.fillStyle = '#FFF000';
        ctx.moveTo(85+Kx, 95+Ky);
        ctx.lineTo(55+Kx, 95+Ky);
        ctx.lineTo(65+Kx, 115+Ky);
        ctx.fill();
        //Second Rectangle
        ctx.beginPath();
        ctx.rect(65+Kx,95+Ky,230,20);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x+150+Kx, y+45+Ky, 45, 0, 2 * Math.PI, false);
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#FFF000';
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
    }
}