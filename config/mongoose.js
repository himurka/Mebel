var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect("mongodb://localhost/himdb");	//mongoose.connect (config.get('mongoose:uri'), config.get ('mongoose:options')); //подключаемся к базе данных, первый параметр - , второй параметр - 
module.exports = mongoose;