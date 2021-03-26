var sound = document.getElementById("sound");
var icon = document.getElementById("icon");

icon.onclick = function() {
	if(sound.paused){
		sound.play();
		icon.src = "img/pause.png";
	}else{
		sound.pause();
		icon.src = "img/play.png";
	}
}
	


