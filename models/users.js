var crypto = require('crypto');
var async = require('async');

var mongoose = require('../config/mongoose'),
Schema = mongoose.Schema;
	
var schema = new Schema ({
	username:{
		type:String,
		unique:true,
		required:true
	},
	hashedPassword:{
		type:String,
		required:true
	},
	salt:{
		type:String,
		required:true
	},
	created:{
		type:Date,
		default:Date.now
	}
});

schema.methods.encryptPassword = function(password) {
		return crypto.createHmac ('sha1', this.salt).update(password).digest('hex');
}; //добавляем для обработки свою схему	

schema.virtual('password') //создали виртуальную переменную
	.set(function(password) {
		this._plainPassword = password;
		this.salt = Math.random()+' ';
		this.hashedPassword = this.encryptPassword(password);
	})
	.get(function(){return this._plainPassword;});

schema.methods.checkPassword = function(password){
	return this.encryptPassword(password) === this.hashedPassword;
};

schema.statics.autorize = function(username,password,callback){
	var User = this;
	
	async.waterfall([
		function(callback){
			User.findOne({username:username},callback);
		},
		function(user,callback){
			if (user){
				if(user.checkPassword(password)){
					callback(null,user);
				} else{
					console.log('Купите руки');
					callback('mistake',null);//тут можно писпользовать обработчик ошибок
				}
			} else{
				var user = new User({username:username,password:password});
				user.save(function(err){
					if (err) return callback(err);
						callback(null,user);
				});
			}
		}
	],callback);
};

exports.users = mongoose.model('users',schema);