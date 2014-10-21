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
		UI.create(card);
	});
}

function deleteCard(e){
	e.preventDefault();
	var self=this;
	var key=self.getAttribute('data-key');
	if(key){
		model.delete(key,function(){
			UI.remove(self);
		});
	}
}













