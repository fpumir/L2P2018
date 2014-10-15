"use strict";

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

load('js/instagram.json',function(xhr){
	var datas=xhr.response.data;
	for(var i=0;i<datas.length;i++){
	//for (var i in datas){
		console.log(datas[i]);
		//construction de la div
		var div=document.createElement('div');
		div.classList.add('insta');
		//construction de l'image
		var img=document.createElement('img');
		img.setAttribute('src',datas[i].images.low_resolution.url);
		//construction de la span
		var span=document.createElement('span');
		span.textContent=datas[i].likes.count+' likes';
		//imbrication des éléments
		div.appendChild(img);
		div.appendChild(span);
		//on met les éléments dans le body
		document.body.appendChild(div);	
	}
	
});





















