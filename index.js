var express = require('express');
var bodyParser = require('body-parser');
//var jsonfile = require('jsonfile');
var app = express();
//var file = 'data.json';

//	mongodb
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	db.close();
});


//	testing mongodb
/*
var user = "Andy Lin";
var friendsArray = ["Jayendra Jog", "Helen Lee", "Anthony Lai", "Josephine Ree", "Rex Fukuchi"];
var scheduleArray = "test";
var freeTimeArray = ["04:00", "06:00", "16:00"];

var insertDocument = function(db, callback) {
	db.collection('testUsers').insertOne( {
		user : {
			"friends" : friendsArray,
			"schedule" : scheduleArray,
			"freeTime" : freeTimeArray
		}
	}, function(err, result) {
	assert.equal(err, null);
	console.log("Inserted a document into the users collection.");
	callback(result);
	});
};

MongoClient.connect(url, function(err, db) {
	assert.equal(err, null);
	insertDocument(db, function() {
		db.close();
	});
});

var findTestUsers = function(db, callback) {
   var cursor =db.collection('testUsers').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findTestUsers(db, function() {
      db.close();
  });
});
*/


//	set
app.set('port', process.env.PORT || 8080);
app.set('views', './views');
app.set('view engine', 'ejs');


//	use
//	when path is not specified (css, img, etc.)
app.use(express.static(__dirname + '/public'));
//	http://stackoverflow.com/questions/5710358/how-to-get-post-a-query-in-express-js-node-js
//app.use(bodyParser.json());	// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());	// to support JSON-encoded bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());


//	get
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/friendSelect', function(req, res) {
	res.render('friendSelect');
});

app.get('/test', function(req, res) {
  res.send('hello world');
});

app.get('/form', function(req, res) {
	res.render('form');
});

app.get('/retrieve', function(req, res) {
	console.log("In retrieve");

	var findUsers = function(db, callback) {
   		var cursor =db.collection('users').find( );
   		cursor.each(function(err, doc) {
	      	assert.equal(err, null);
	      	if (doc != null) {
	         	console.dir(doc);
	      	} else {
	         	callback();
	      	}
   		});
	};

	MongoClient.connect(url, function(err, db) {
  		assert.equal(null, err);
  		findUsers(db, function() {
      		db.close();
  		});
	});
});

//	post
app.post('/submit', function(req, res) {
	console.log("In submit");
	//res.send("works?");
	var name = req.body.name,
		schedule = req.body.schedule;
	console.log("Name is " + name + ", and scheduleArray is " + schedule);
	

	var insertDocument = function(db, callback) {
		db.collection('users').insertOne( {
			user : {
				"Name" : name,
				"schedule" : schedule
			}
		}, function(err, result) {
			assert.equal(err, null);
			console.log("Inserted a document into the users collection.");
			callback(result);
		});
	};

	MongoClient.connect(url, function(err, db) {
		assert.equal(err, null);
		insertDocument(db, function() {
			db.close();
		});
	});

	// var findUsers = function(db, callback) {
 //   		var cursor =db.collection('testUsers').find( );
 //   		cursor.each(function(err, doc) {
	//       	assert.equal(err, null);
	//       	if (doc != null) {
	//          	console.dir(doc);
	//       	} else {
	//          	callback();
	//       	}
 //   		});
	// };

	// MongoClient.connect(url, function(err, db) {
 //  		assert.equal(null, err);
 //  		findUsers(db, function() {
 //      		db.close();
 //  		});
	// });
	// if (JSON.stringify(files.upload.name) == null) {
 //      console.log("Error no file submitted");
 //    } else {
 //    	var myObject = [{"name": " ", "someField": " "}];
 //    	myObject[0].name = name;
 //    	myObject[0].someField = someField;
 //    	console.log(myObject);
 //    }

 	// var myObject = [{"name": " ", "someField": " "}];
  //    	myObject[0].name = name;
  //    	myObject[0].someField = someField;
  	// var myObject = [{name: 'JP'}];

   //  jsonfile.readFile(file, function(err, myObject) {
   //  	//console.dir(obj);
   //  	console.log("Is this working");
   //  	jsonfile.writeFileSync(file, myObject);
   //  });

});

//	launch
app.listen(app.get('port'));
