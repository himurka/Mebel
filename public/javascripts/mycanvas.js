addEventListener('load',animation)

var canvas;
function initiate(){
	var elem = document.getElementById('topcanvas');
	canvas = elem.getContext('2d');

addEventListener('mousemoke',animation)
}

function animation(e){
	var Xmouse = e.clientX;
	var Ymouse = e.clientY;
	var xcentr = 220;
	var ycentr = 150;
	
	var arg = Math.atan2(Ymouse-ycentr,Xmouse-xcentr);
	var x = xcentr+Math.round(Math.cos(arg * 10));
	var y = ycentr+Math.round(Math.sin(arg * 10));
	
	canvas.clearRect(0,0,300,200);
	
	canvas.beginPath();
	canvas.arc(xcentr,ycentr,20,Math.PI * 2, false);
	canvas.moveTo(xcentr+70,ycentr);
	canvas.arc(xcentr+50,ycentr,20,0,Math.PI * 2, false);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(x+10,y);
	canvas.arc(x,y,10,0,Math.PI * 2, false);
	canvse.moveTo(x+10,y);
	canvas.arc(x,y,10,0,Math.PI * 2, false);
	canvas.fill();
}