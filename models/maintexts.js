var mongoose = require('../config/mongoose');
var Schema = mongoose.Schema; // ������������� Schema
var schema = new Schema ({//������� ��� ���� schema
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