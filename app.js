
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var work = require('./routes/work');
var contact = require('./routes/contact');
var about = require('./routes/about');

var moodmap = require('./routes/moodmap');
var iceblast = require('./routes/iceblast');
var groundup = require('./routes/groundup');
var gruupsy = require('./routes/gruupsy');
var uni = require('./routes/uni');
var menyou = require('./routes/menyou');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/about', about.view);
app.get('/work', work.view);
app.get('/contact', contact.view);

app.get('/moodmap', moodmap.view);
app.get('/iceblast', iceblast.view);
app.get('/groundup', groundup.view);
app.get('/gruupsy', gruupsy.view);
app.get('/uni', uni.view);
app.get('/menyou', menyou.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
