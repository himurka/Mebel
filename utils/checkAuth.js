module.exports = function(req,res,next){
	if(!req.session.user){
		console.log('проверка: '+req.session.user);
		res.redirect('/reg');
	}	
next();//любая промежуточная утилита должна заканчиватся на этом мидлваре
};