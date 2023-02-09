var slider = document.getElementById("myRange");
var slider2 = document.getElementById("mySlide");
var output = document.getElementById("demo");
var xval = slider.value; // Display the default slider value
var yval = slider2.value;
// Update the current slider value (each time you drag the slider handle)

function initFunc(){
    var canvas = document.getElementById("DemoCanvas");
    var ctx = canvas.getContext('2d');
    
    slider.oninput = function() {
      xval = this.value;
      draw();
    }
    
    slider2.oninput = function() {
      yval = this.value;
      draw();
    }  
    function draw(){
      ctx.clearRect(0,0,1000,1000);
      ctx.fillStyle='#fa4b2a';    // color of fill
      ctx.fillRect(10, 40, xval, yval); // create rectangle 
    }
}