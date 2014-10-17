"use strict";

var video=document.getElementById('video');
var button=document.getElementById('button');
var progressBar=document.getElementById('progressBar');
var autoPlayed=false;//on créé une variable d'état à false

video.load();
button.classList.add('loading');

window.addEventListener('click',playPause,false);
video.addEventListener('canplaythrough',autoPlay,false);
video.addEventListener('timeupdate',progress,false);
progressBar.addEventListener('click',setVideoTime,false);


function autoPlay(e){
	if(autoPlayed){return;}// on teste si on est déjà passé.
	this.play();
	button.classList.remove('loading');
	button.classList.add('play');
	autoPlayed=true;//on passe la variable à true si on est passé par autoplay
}

function playPause(e){
	console.log(e); 
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














