"use strict";

document.getElementById('addCard').addEventListener('submit',addCard,false);
document.getElementById('addLocation').addEventListener('click',addLocation,false);
document.getElementById('geocoder').addEventListener('submit',geoCoder,false);

var mapObject;

model.init(function(card){
	UI.create(card,addDeleteEvent);
});

function addDeleteEvent(deleteButton){
	deleteButton.addEventListener('click',deleteCard,false);
}

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
		UI.create(card,addDeleteEvent);
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

function addLocation(e){
	e.preventDefault();
	UI.toggleLoader();
	model.getUserLocation(function(userPosition){
		 UI.drawMap(userPosition,function(){
				UI.toggleMap().toggleLoader();
		});
	});
}


function geoCoder(e){
	e.preventDefault();
	var address=document.querySelector("input[name='address']").value;
	if(!address){return;}
	model.getGeocode(address,function(latLng){
		UI.setMarker(latLng).center(latLng);
	});
	
			
			

	
	
	
}














