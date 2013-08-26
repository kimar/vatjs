
/**
 * Module dependencies.
 */

var express = require('express'),
routes = require('./routes'),
http = require('http'),
path = require('path'),
api = require('./routes/api'),
documentation = require('./routes/documentation'),
about = require('./routes/about'),
connectError = require('connect-error');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(connectError());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// api
app.use('/api/', function(err, req, res, next){
	var errObj;

	console.log(err.stack);
	try {
		errObj = JSON.parse(err.message);
	} catch (e) {
		return res.status(500).json({
			error: 'Internal server error'
		});
	}

	res.status(errObj.code).json({
		error: errObj.msg
	});
});
app.get('/api/check/*', api.check);

// 404 error handler
app.all('/api', function(req, res) {
	res.error({code: 404, msg: 'Not found'});
});
app.all('/api/*', function(req, res) {
	res.error({code: 404, msg: 'Not found'});
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/documentation', documentation.index);
app.get('/about', about.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
