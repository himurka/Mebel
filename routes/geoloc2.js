exports.geoloc2 = function(req,res){
	//styles[5]='css/geoloc.css';
	scripts[6]='"https://maps.googleapis.com/maps/api/js?key=AIzaSyCB6pRU24z_zpinrzX0G2q2kSwLPy2Q14Q&sensor=false';
	scripts[7]='javascripts/geoloc2.js';
	res.render('geoloc2');
}