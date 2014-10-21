"use strict";

var video=document.getElementById('video');
var button=document.getElementById('button');
var progressBar=document.getElementById('progressBar');
var autoPlayed=false;//on créé une variable d'état à false
var volume=document.querySelectorAll('.volume'); 
 
video.load();
button.classList.add('loading');

window.addEventListener('click',playPause,false);
window.addEventListener('keypress',playPause,false);
video.addEventListener('canplaythrough',autoPlay,false);
video.addEventListener('timeupdate',progress,false);
progressBar.addEventListener('click',setVideoTime,false);
for (var i=0;i<volume.length;i++){
	volume[i].addEventListener('click',setVolume,false);
}




function autoPlay(e){
	if(autoPlayed){return;}// on teste si on est déjà passé.
	this.play();
	button.classList.remove('loading');
	button.classList.add('play');
	autoPlayed=true;//on passe la variable à true si on est passé par autoplay
}

function playPause(e){
	if(e.keyIdentifier){
		if(e.keyCode!=32){return;}
	}
		e.preventDefault();
		if(video.paused){
			video.play();
			button.classList.add('play');
		}
		else{
			video.pause();
			button.classList.remove('play');
		}
}

function progress(){
	var progress=this.currentTime*100/this.duration;
	document.querySelector('.progress').style.width=progress+'%';
}

function setVideoTime (e){
	e.stopPropagation(); 
	var time=e.offsetX*video.duration/this.offsetWidth;
	video.currentTime=time;
}

function setVolume(e){
	e.stopPropagation();
	var off=document.querySelector('.volume.off'),limit=false;
	if(off)
		off.classList.remove('off');
	switch(e.currentTarget.getAttribute('data-role')){
		case '+':
			if(video.volume<1)
				video.volume+=0.1;	
			else
				limit=true;
		break;
		case '-':
			if(video.volume>0.1)
				video.volume-=0.1;
			else
				limit=true;	
	}
	if(limit)
		this.classList.add('off');
	console.log(video.volume); 
	
}













