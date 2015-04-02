exports.geoloc = function(req,res){
	//styles[4]='css/geoloc.css';
	scripts[4]='https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true';
	scripts[5]='javascripts/geolocgoogle.js';
	res.render('geoloc');
}