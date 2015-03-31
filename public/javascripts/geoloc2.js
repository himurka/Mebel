var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize(){
	directionsDisplay = new google.maps.DirectionsRenderer();
	var city = new google.maps.LatLng(53.88,22.58)
	var mapOptions = {
		zoom:7,
		mapTypeId:google.maps.MapTypeId.READMAP,
		Center:city
	}
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);
	go = document.getElementById('go');
	go.addEventListener('click',calcRoute);
}
function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}