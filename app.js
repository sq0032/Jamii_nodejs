var express     = require('express');
//var http        = require('http');
var path        = require('path');
var favicon     = require('static-favicon');
var logger      = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser  = require('body-parser');
//var socket      = require('socket.io');
var httpProxy   = require('http-proxy');

var routes  = require('./routes');
var users   = require('./routes/user');

var app = express();

var proxy = httpProxy.createProxyServer({
    target:'http://127.0.0.1:8000'
});

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get(/^(.*)/, function(req, res){
    proxy.web(req, res, {target:'http://127.0.0.1:8000'});
});
app.post(/^(.*)/, function(req, res){
    proxy.web(req, res, {target:'http://127.0.0.1:8000'});
});
app.put(/^(.*)/, function(req, res){
    proxy.web(req, res, {target:'http://127.0.0.1:8000'});
}); 

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('a user left');
    });
});

http.listen(3000, function(){
    console.log('listening on : 3000');
});
/*


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(app.router);

//app.get(/^(.*)/, routes.index);
//app.post(/^(.*)/, routes.index);
app.get(/^(.*)/, function(req, res){
    proxy.web(req, res, {target:'http://127.0.0.1:8000'});
});
app.post(/^(.*)/, function(req, res){
    proxy.web(req, res, {target:'http://127.0.0.1:8000'});
});

app.get('/users', users.list);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'));
var io     = socket.listen(server);
*/

/*
io.sockets.on('connection', function(socket){
    var options = {
        host    : 'localhost',
        port    : 8000,
        path    : '/',
        method  : 'GET',
    };
    
    var req = http.get(options, function(res){
        res.setEncoding('utf8');
        
        res.on('data', function(message){
            console.log(message);
        });
    });
    
    req
});
*/















