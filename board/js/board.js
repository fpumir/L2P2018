"use strict";

document.getElementById('addCard').addEventListener('submit',addCard,false);

function addCard(e){
	e.preventDefault();
	var name=document.querySelector("input[name='name']").value;
	var date=document.querySelector("input[name='date']").value;
	console.log(name);
	console.log(date);  
	if(!name){return;}
	var cardDate=!date?new Date().getTime():new Date(date).getTime();
	
	var card={
		title:name,
		date:cardDate
	};
	
	//record in localStorage
	localStorage.setItem(cardDate,JSON.stringify(card));
	
	// create DOM elements
	var div=document.createElement('div');
	div.classList.add('card');
	var d=new Date(card.date);
	var date=d.getFullYear()+'/'+('0'+(d.getMonth()+1)).slice(-2)+'/'+('0'+d.getDate()).slice(-2);
	var dateSpan=document.createElement('span');
	dateSpan.classList.add('date');
	var dateText=document.createTextNode(date);
	dateSpan.appendChild(dateText);
	var textSpan=document.createElement('span');
	textSpan.classList.add('text');
	var text=document.createTextNode(card.name);
	textSpan.appendChild(text);
	var deleteButton=document.createElement('a');
	deleteButton.classList.add('deleteButton');
	deleteButton.setAttribute('href','');
	deleteButton.setAttribute('data-key',card.date);
	var deleteText=document.createTextNode('[delete]');
	deleteButton.appendChild(deleteText);
	div.appendChild(dateSpan);
	div.appendChild(textSpan);
	div.appendChild(deleteButton);
	var board=document.getElementById('board');
	board.appendChild(div);
	
		
}










