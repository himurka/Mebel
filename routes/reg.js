var User = require('../models/users').users;
var AuthError = require('../models/users').AuthError;
var async = require('async');
var session = require('cookie-session');

exports.index = function(req,res) {
	res.render('reg');
}

exports.send = function(req,res,next) {
	var username = req.body.username;
	var password = req.body.password;
	//console.log (username +'-'+ password);
	/*var users = new User({
		username:username,
		password:password,
		//salt:'123'
	});
	users.save (function(){
	console.log ('OK');
	});*/
	User.autorize(username,password,function(err,user){
		if (err){
			res.redirect('/reg');
				return;
			}
		req.session.user = user._id;
		//console.log ('Use id: '+req.session.user);
		res.redirect('/userpage');
	});
}

exports.logout = function(reg,res){
	reg.session = null;
	res.redirect('main');
}