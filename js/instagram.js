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
