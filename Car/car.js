function InitFunc(){
    var draw= document.getElementById("myCanvas");

    if(draw.getContext){
        var ctx= draw.getContext("2d");

        ctx.fillStyle = "#FF0000"
		ctx.fillRect(200, 200, 400, 200);
		ctx.fillStyle = "#FFFF00"
		ctx.fillRect(600, 230, 150, 150);
        ctx.fillStyle = "#000000"
		ctx.fillRect(250, 170, 80, 30);
        ctx.fillStyle = "#000000"
		ctx.fillRect(250, 400, 80, 30);
        ctx.fillStyle = "#000000"
		ctx.fillRect(450, 170, 80, 30);
        ctx.fillStyle = "#000000"
		ctx.fillRect(450, 400, 80, 30);
		ctx.strokeRect(220, 220, 360, 160);
    }
}