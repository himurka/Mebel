function initiate(){
	var get = document.getElementById('getlocation');
	get.addEventListener('click',getlocation);
}
function getlocation(){
	var geoconfig = {
		enableHighAccuracy: true,
		timeout: 10000,
		maximumAge: 60000
	};
	navigator.geolocation.getCurrentPosition(showinfo,showerror,geoconfig);
}
function showinfo(position){
	var location = document.getElementById('location');
	var link = 'http://maps.googleopis.com/maps/opi/geocode/jsone?lating=' + position.coords.latitude + ',' + position.coords.longitude + '&sensor=false&language=ru';
	var mapurl = 'http://maps.google.com/maps/api/staticmap?center=' + position.coords.latitude + ',' + position.coords.longitude + '&zoom=12&size=400x400&sensor=false&markers=' + position.coords.latitude + ',' + position.coords.longitude;
	var data = '<img src = "' + mapurl +'">';
	data += 'Latitude: '+ position.coords.latitude +'<br>';
	data += 'Longitude: '+ position.coords.longitude +'<br>';
	data += 'Accuracy: '+ position.coords.accuracy +'<br>';
	location.innerHTML = data;
}
function showerror(error){
	alert('Error: '+ error.code +' '+ error.message);
}
addEventListener('load',initiate);