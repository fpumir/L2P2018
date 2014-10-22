"use strict";

document.getElementById('addCard').addEventListener('submit',addCard,false);
document.getElementById('addLocation').addEventListener('click',addLocation,false);



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
	toggleLoader();
	var userPosition={};
	navigator.geolocation.getCurrentPosition(
		function(position){
			userPosition.lat=position.coords.latitude;
			userPosition.lng=position.coords.longitude;
			drawMap(userPosition);
		},
		function(){ 
			userPosition.lat=48.857713;
			userPosition.lng=2.347271;
			drawMap(userPosition);
		},
		{enableHighAccuracy:true}
	); 
}

function drawMap(userPosition){
	var centered=new google.maps.LatLng(userPosition.lat,userPosition.lng);
	var settings={
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: centered
	};
	new google.maps.Map(document.querySelector('#map > div'),settings);
	document.getElementById('map').classList.add('on');
	toggleLoader();
}

function toggleLoader(){
	document.querySelector('.loader').classList.toggle('on');
	
}















