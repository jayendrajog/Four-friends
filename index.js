var express = require('express');
var app = express();


//	set
app.set('port', process.env.PORT || 8080);
app.set('views', './views');
app.set('view engine', 'ejs');


//	use
//	when path is not specified (css, img, etc.)
app.use(express.static(__dirname + '/public'));


//	get
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/friendSelect', function(req, res) {
	res.render('friendSelect');
});

app.get('/tset', function(req, res) {
	res.send('Hello world!');
});

//	launch
app.listen(app.get('port'));
