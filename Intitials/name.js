function initFunc(){

    var canvas = document.getElementById("myCanvas");

    if( canvas.getContext){
		var ctx = canvas.getContext("2d");

		//First B
		var Kx = 100;
		var Ky = 130;
		ctx.beginPath();
		ctx.fillStyle = '#FF0000';
		ctx.arc(75+Kx, 75+Ky,40, 0, Math.PI*2, true);		
		ctx.moveTo(110+Kx, 75+Ky);
		ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = '#FF0000';
        ctx.arc(75+Kx, 10+Ky,40, 0, Math.PI*2, true);		
		ctx.moveTo(110+Kx, 75+Ky);
		ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(40 + Kx, 100+Ky);
        ctx.lineTo(140, 110);
        ctx.stroke();

		//Second B
		ctx.beginPath();
		ctx.fillStyle = '#FF0000';
		ctx.arc(200+Kx, 75+Ky,40, 0, Math.PI*2, true);		
		ctx.moveTo(110+Kx, 75+Ky);
		ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = '#FF0000';
        ctx.arc(200+Kx, 10+Ky,40, 0, Math.PI*2, true);		
		ctx.moveTo(110+Kx, 75+Ky);
		ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(170 + Kx, 100+Ky);
        ctx.lineTo(270, 110);
        ctx.stroke();

	}
	else
		alert("your browser don't support HTML5 canvas features");
}