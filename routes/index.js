exports.index = function(req,res){
if(req.params.id){
var index = req.params.id;
}
else{
var index = 'index';
}

var config = require ('../config');
scripts = config.get ('scripts');
scripts[0] ='';
//styles[2] = 'style2.css';//определяем стиль

var Maintexts = require('../models/maintexts').maintexts;
Maintexts.findOne({
'url':index
},
function(err,text){
if(!text){
		text = {
		name:'Добро пожаловать на сайт',
		body:'Извините страница не найдена'
			}
		}
	res.render ('index',{text:text});
});
}

exports.add = function (req,res){
var Maintexts = require ('../models/maintexts').maintexts //.maintexts переменная из maintexts.js
var maintexts = new Maintexts ({
	'name':'Связь с нами',
	'body':'Связь с нами',// экшен для добавления информации в базу данных монго
	'url':'contact'
});
maintexts.save(function(){
console.log('Ok');
});

res.redirect('/'); //перенаправление, любая обработка форм заканчиватся перенаправлением
}