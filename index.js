var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//	set
app.set('port', process.env.PORT || 8080);
app.set('views', './views');
app.set('view engine', 'ejs');


//	use
//	when path is not specified (css, img, etc.)
app.use(express.static(__dirname + '/public'));
//	http://stackoverflow.com/questions/5710358/how-to-get-post-a-query-in-express-js-node-js
//app.use(bodyParser.json());	// to support JSON-encoded bodies
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());	// to support JSON-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//	get
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/test', function(req, res) {
  res.send('hello world');
});

app.get('/form', function(req, res) {
	res.render('form');
});

//	post
app.post('/submit', function(req, res) {
	//res.send("works?");
	var name = req.body.name,
		someField = req.body.someField;
	console.log("Name is " + name + ", and someField is " + someField);
	
	if (JSON.stringify(files.upload.name) == null) {
      console.log("Error no file submitted");
    } else {
    	var myObject = [{"name": " ", "someField": " "}];
    	myObject[0].name = name;
    	myObject[0].someField = someField;
    	console.log(myObject);
    }
    

});

//	launch
app.listen(app.get('port'));
