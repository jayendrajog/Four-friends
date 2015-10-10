var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	db.close();
});

var user = "Andy Lin";
var friendsArray = ["Jayendra Jog", "Helen Lee", "Anthony Lai", "Josephine Ree", "Rex Fukuchi"];
var schedule = "test";
var freeTimeArray = ["04:00", "06:00", "16:00"];

var insertDocument = function(db, callback) {
	db.collection('users').insertOne( {
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

var usertoFind = "Andy Lin";
var timeToFind = "06:00";

var findUser = function(db, callback)
	var cursor = db.collection('users').find( {})

MongoClient.connect(url, function(err, db) {
	assert.equal(err, null);
	insertDocument(db, function() {
		db.close();
	});
});