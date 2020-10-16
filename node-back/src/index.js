var http = require('http');
var fs = require('fs');
var express = require('express');
const cors = require('cors');

var app = express();
app.set('port', 3000);
app.use(cors());
var server = http.createServer(app);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var jsondata=[];
var jsondataGuj=[];
var jsonRoadSign=[];

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("RTOExam");  
	dbo.collection("Question").find({}).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		jsondata=result;
		db.close();
	});
	dbo.collection("RoadSign").find({}).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		jsonRoadSign=result;
		db.close();
	});	
	dbo.collection("QuestionGuj").find({}).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		jsondataGuj=result;
		db.close();
	});	
});

app.get('/viewdata', (req, res) => {
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.send(jsondata);
});
app.get('/viewdataGuj', (req, res) => {
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.send(jsondataGuj);
});
app.get('/viewroadsign', (req, res) => {
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.send(jsonRoadSign);
});

server.listen(3000, () => {
    console.log("Listineng on port 3000")
});