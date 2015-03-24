function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value='Play';
		clearInterval(loop)
	}else{
		mmdedia.play();
		play.value='Pause';
		loop=setInterval(status,1000);
	}
}