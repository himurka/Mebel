var maxim,mmedia,play,bar,progress,mute,volume,loop;
function initiate(){
		maxim = 400;
		mmedia = document.getElementById('media');
		play = document.getElementById('play');
		bar = document.getElementById('bar');
		progress = document.getElementById('progress');
		mute = document.getElementById('mute');
		volume = document.getElementById('volume');
		
		play.addEventListener('click',push);
		mute.addEventListener('click',sound);
		bar.addEventListener('click',move);
		volume.addEventListener('change',level);
}

addEventListener('load',initiate);

function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value = 'Play';
		clearInterval(loop);
	}else{
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval(status,1000);
	}
	//console.log('push');
}

function sound(){
	if(mute.value == 'Mute'){
		mmedia.muted = true;
		mute.value = 'Sound';
	}else{
		mmedia.muted = false;
		mute.valuse = 'Mute';
	}
	//console.log('sound');
}

function level(){
	mmedia.volume = volume.value;
}

function status(){
	if(!mmedia.ended){
		var size = parseInt(mmedia.currentTime * maxim/mmedia.duration);
		progress.style.width = size + 'px';
	}else{
		progress.style.width = '0px';
		play.innerHTML = 'Play';
		clearInterval(loop);
	}
	//console.log('status');
}

function move (e){
	if(!mmedia.paused && !mmedia.ended){
		var mouseX = e.pageX - bar.offsetLeft - $('.col-md-7').offset().left;
		var newtime = mouseX * mmedia.duration / maxim;
		mmedia.currentTime = newtime;
		progress.style.width = mouseX + 'px';
	}
	//console.log('move')
}
var canvas,img;
function initiate(){
	var elem = document.getElementById('canvas');
	canvas = elem.getContext('2d');
	
	/*var grad = canvas.createLinear.Gradient(0,0,10,100);
	grad.addColorStop(0.5,'#00AAFF');
	grad.addColorStop(1,'#000000');
	canvas.fillStyle = grad;
	
	canvas.fillRect(10,10,100,100);
	canvas.fillRect(150,10,200,100);
	
	canvas.fillStyle = "#000099";
	canvas.strokeStyle = "#9900000"
	
	canvas.strokeRect(100,100,120,120);
	canvas.fillRect(110,110,100,100);
	canvas.clearRect(120,120,80,80);*/
	
	/*canvas.beginPath();
	canvas.moveTo(100,100);
	canvas.lineTo(200,200);
	canvas.lineTo(100,200);
	canvas.closePath();
	canvas.fill();
	
	canvas.beginPath();
	for(var f = 0; f < 300; f = f + 10){
		canvas.moveTo(0,f);
		canvas.lineTo(500,f);
	}
	canvas.stroke();*/
	
	/*canvas.beginPath();
	canvas.arc(100,100,50,0,Math.PI * 2, false);
	canvas.stroke();*/
	
	
	/*canvas.beginPath();
	var radians = Math.PI / 180 * 45;
	canvas.arc(100,100,50,0,radians, false);
	canvas.stroke();*/
	
	/*canvas.beginPath();
	canvas.arc(200,150,50,0,Math.PI * 2,false);
	canvas.stroke();
	
	canvas.lineWidth = 10;
	canvas.lineCap = 'round';
	canvas.beginPath();
	canvas.moveTo(230,150);
	canvas.arc(200,150,30,0,Math.PI, false);
	canvas.stroke();
	
	canvas.lineWidth = 5;
	canvas.lineJoin = 'miter';
    canvas.beginPath();
	canvas.moveTo(195,135);
	canvas.lineTo(195,155);
	canvas.stroke();*/
	
	/*canvas.font = 'bold 24px verdana, sans-serif';
	canvas.textAlign = 'start';
	canvas.textBaseline = 'bottom';
	canvas.fillText('My message',100,124);
	var size = canvas.neasureText('My message');
	canvas.strokeRect(100,100,size.width,24);*/
	
	/*canvas.shadowColor = 'rgba(0,0,0,0.5)';
	canvas.shadowOffsetx = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 5;
	canvas.save();
	
	canvas.font = 'bold 50px verdana, sans-serif';
	canvas.fillText('My message',100,100);
	canvas.restore();
	canvas.fillText('My message',100,100);*/
	
	/*var img = document.createElement('img');
	img.setAttribute('src','http://obmenka.by/media/img/we.jpg');
	img.addEventListener('load',function(){
		canvas.drawImage(img,20,20);
		//canvas.drawImage(img,20,20,elem.width, elem.height);
		//canvas.drawImage(img,135,30,50,50,0,0,200,200);
	});*/
	
	img = document.createElement('img');
	img.setAttribute('src','http://www.minkbooks.com/content/bricks.jpg');
	img.addEventListener('load',modimage);
}
	
function modimage(){
	var pattern = canvas.createPattern(img,'repeat');
	canvas.fillStyle = pattern;
	canvas.fillRect(0,0,500,300);
}
addEventListener('load',initiate);