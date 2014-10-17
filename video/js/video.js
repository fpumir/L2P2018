"use strict";

var video=document.getElementById('video');
var button=document.getElementById('button');
var progressBar=document.getElementById('progressBar');
var autoPlayed=false;//on créé une variable d'état à false
var volumePlus=document.querySelector('.plus');
var volumeMoins=document.querySelector('.moins');

video.load();
button.classList.add('loading');

window.addEventListener('click',playPause,false);
window.addEventListener('keypress',playPause,false);
video.addEventListener('canplaythrough',autoPlay,false);
video.addEventListener('timeupdate',progress,false);
progressBar.addEventListener('click',setVideoTime,false);
volumePlus.addEventListener('click',setMoreVolume,false);
volumeMoins.addEventListener('click',setLessVolume,false);


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

function setMoreVolume(e){
	e.stopPropagation();
	if(volumeMoins.classList.contains('off')){
		volumeMoins.classList.remove('off');
	}
	if(video.volume<1){
		video.volume+=0.1;
	}	
	else{
		this.classList.add('off');
	}
}

function setLessVolume(e) {
	e.stopPropagation();
	if(volumePlus.classList.contains('off')){
		volumePlus.classList.remove('off');
	}
	if(video.volume>0.1){
		video.volume-=0.1;
	}
	else{
		this.classList.add('off');
	}
	
}













