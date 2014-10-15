"use strict";
var nbLike;
var likeButton=document.getElementById('like');
load('js/likes.json', function(xhr) {
	nbLike=xhr.response.likes;
	console.log(nbLike); 
});

likeButton.addEventListener('click',function(e){
	e.preventDefault();
	//nbLike=nbLike+1;
	//nbLike+=1;
	nbLike++;
	var liked=document.querySelector('.liked span').textContent=nbLike;
},false);


function load(url,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = ensureReadiness;
	function ensureReadiness() {
		if(xhr.readyState === 4) {
			callback(xhr);
		}			
	}
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.send('');
}