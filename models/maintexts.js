var mongoose = require('../config/mongoose');
var Schema = mongoose.Schema; // мангусоваская Schema
var schema = new Schema ({//создаем уже нашу schema
name:{
type:String,
unique:true,
required:true
},
body:{
type:String
},
url:{
type:String,
unique:true,
required:true
}
});
exports.maintexts=mongoose.model('maintexts',schema);