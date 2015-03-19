exports.index = function(req,res){
	config = require('../config');
	//scripts[0] = '/vendor/bower_components/jquery/jquery.js';
	//scripts[1] = '/vendor/bower_components/socket.io-client/dist/socket.io.js';
	res.render('chat');
};