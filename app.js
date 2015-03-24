var express = require('express'); //подключается модуль express
var path = require('path'); //подключаются зависимости
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//----- подключение socket.io
var io = require('./socket/index');
/*server.listen(config.get('port'),function(){
	console.log('Server listening on port ' + config.get('port'));
});*/

//----- подключаем конфиг
var config = require ('./config');
var gallery = require ('./routes/gallery');// подключились к файлу gallery 
var routes = require('./routes/index'); //подключаем файл index(. или ... означает подключаем файл)
var users = require('./routes/users');
var reg = require('./routes/reg'); //создаем переменную reg
var session = require('cookie-session');
var checkAuth = require('./utils/checkAuth'); //подключыаем утилиты проверки авторизации
var auth = require('./routes/auth');
var chat = require('./routes/chat');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //подключается папака с шаблонами (в папку views) __dirname означает текущую деррикторию
app.set('view engine', 'jade'); // //какой шаблонизатор используем (шаблон jade)
//через app.set подключаем настройки
//поключаем поддержку сессии
app.use(session({
	secret:config.get('session:secret')
}));

//подключаем сиссионую переменную шаблон layout
app.use(function(req,res,next){
	res.locals = {
		userid: req.session.user
	};
	next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //все ваши статичные файлы () картинки,

app.get('/',routes.index); //добавляются прослушиватели (слушаем routes)
app.use('/users', users);
app.get('/gallery',gallery.index);
app.get('/reg',reg.index);
app.get('/index/add',routes.add); //можно без /index
app.get('/userpage',checkAuth,auth.userpage);
app.get('/logout',checkAuth,reg.logout);
app.get('/chat',checkAuth,chat.index); //прослушиватель chat
app.get('/:id',routes.index);
app.post('/reg',reg.send);

// catch 404 and forward to error handler (если страница не найдена)
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {      //можно удалить, если выкладиваеш проект
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
};

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
     
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

styles = config.get('styles'); //подключаем стили глобально
scripts = config.get('scripts');
app.listen(config.get('port'));
//app.locals.styles = config.get('styles'); //подключаем локальную переменную config.get('styles') которая видна локально и в шаблонах
module.exports = app; //все попадает в модуль exports (важная штука)