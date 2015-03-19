exports.userpage = function (req,res,next){
	res.render('userpage',{
		userid: req.session.user, //передаем сессионуую переменную req.session.user в шаблон
	});
}