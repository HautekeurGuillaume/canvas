var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//Cercle//
ctx.beginPath();
ctx.arc(200,200,100,0,Math.PI*2);
ctx.lineWidth = 19;
ctx.strokeStyle= '#00A5CD';
ctx.fillStyle= 'white';
ctx.fill();
ctx.stroke();
ctx.lineWidth = 9;


//1er carré

ctx.fillStyle = "rgb(12, 127, 221)";
ctx.fillRect(187,160,25,25);

//2nd carré

ctx.fillStyle = "rgb(53, 99, 186)";
ctx.fillRect(187,210,25,25);
