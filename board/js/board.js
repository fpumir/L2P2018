"use strict";

document.getElementById('addCard').addEventListener('submit',addCard,false);


function addCard(e){
	e.preventDefault();
	var name=document.querySelector("input[name='name']").value;
	var date=document.querySelector("input[name='date']").value; 
	if(!name){return;}
	var cardDate=!date?new Date().getTime():new Date(date).getTime();
	
	var card={
		title:name,
		date:cardDate
	};
	
	//record in localStorage
	model.record(card,function(){
		// create DOM elements
		var div=document.createElement('div');
		div.classList.add('card');
		var d=new Date(card.date);
		var date=('0'+d.getDate()).slice(-2)+'/'+('0'+(d.getMonth()+1)).slice(-2)+'/'+d.getFullYear();
		var dateSpan=document.createElement('span');
		dateSpan.classList.add('date');
		var dateText=document.createTextNode(date);
		dateSpan.appendChild(dateText);
		var textSpan=document.createElement('span');
		textSpan.classList.add('text');
		var text=document.createTextNode(card.title);
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

		//add event on deleteButton in the creation context
		deleteButton.addEventListener('click',deleteCard,false);
	});
}

function deleteCard(e){
	e.preventDefault();
	var self=this;
	var key=self.getAttribute('data-key');
	if(key){
		model.delete(key,function(){
			self.parentNode.remove();
		});
	}
		
	
}













