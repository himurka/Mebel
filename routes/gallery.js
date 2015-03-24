exports.index = function(req,res){
	styles[2]='css/gallery.css'; //определяем стиль
	//scripts[3]='javascripts/main.js'; //определяем скрипт
	res.render('gallery');
}