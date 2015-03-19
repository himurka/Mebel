exports.index = function(req,res){
	styles[2]='css/gallery.css'; //определяем стиль
	scripts[2]='скрипт';
	res.render('gallery');
}