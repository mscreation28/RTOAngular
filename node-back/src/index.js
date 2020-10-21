var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
const cors = require('cors');

var app = express();
app.set('port', 3000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var server = http.createServer(app);

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// var jsondata=[];
// var jsondataGuj=[];
// var jsonRoadSign=[];
// var randomque=[];

// MongoClient.connect(url, function(err, db) {
// 	if (err) throw err;
// 	var dbo = db.db("RTOExam");  
// 	dbo.collection("Question").find({}).toArray(function(err, result) {
// 		if (err) throw err;
// 		console.log(result);
// 		jsondata=result;
// 		db.close();
// 	});
// 	dbo.collection("RoadSign").find({}).toArray(function(err, result) {
// 		if (err) throw err;
// 		console.log(result);
// 		jsonRoadSign=result;
// 		db.close();
// 	});	
// 	dbo.collection("QuestionGuj").find({}).toArray(function(err, result) {
// 		if (err) throw err;
// 		console.log(result);
// 		jsondataGuj=result;
// 		db.close();
// 	});
// 	dbo.collection("Question").aggregate([{$sample: {size: 15}}]).toArray(function(err, result) {
// 		if (err) throw err;
// 		console.log(result);
// 		randomque=result;
// 		db.close();
// 	});
// });

// app.get('/viewdata', (req, res) => {
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
// 	res.send(jsondata);
// });
// app.get('/viewdataGuj', (req, res) => {
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
// 	res.send(jsondataGuj);
// });
// app.get('/viewroadsign', (req, res) => {
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
// 	res.send(jsonRoadSign);
// });
// app.get('/viewrandom', (req, res) => {
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
// 	res.send(randomque);
// });
// server.listen(3000, () => {
//     console.log("Listineng on port 3000")
// });


var mongoose = require("mongoose");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/RTOExam");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.addListener('open', mongoConnected);

function mongoConnected(){
	var questionSchema = new mongoose.Schema({
		qid: Number,
		que: String,
		op1: String,
		op2: String,
		op3: String,
		ans: Number,
		hasImg: Boolean,
		imgurl: String
	},{ collection: 'Question' });

	var ques = mongoose.model("ques", questionSchema);

	app.get("/getquestion",(req ,response) => {
		ques.find( function(err, questions) {
			if(err) {
				response.send(err);
			}
			else {
				console.log("All question returned");
				response.status(200);
				response.send(questions);
			}
		})
	})


	var questionGujSchema = new mongoose.Schema({
		qid: Number,
		que: String,
		op1: String,
		op2: String,
		op3: String,
		ans: Number,
		hasImg: Boolean,
		imgurl: String
	},{ collection: 'QuestionGuj' });

	var quesGuj = mongoose.model("quesGuj", questionGujSchema);

	app.get("/getquestionGuj",(req ,response) => {
		quesGuj.find( function(err, questions) {
			if(err) {
				response.send(err);
			}
			else {
				console.log("All Gujarati question returned");
				response.status(200);
				response.send(questions);
			}
		})
	})

	var roadsignSchema = new mongoose.Schema({
		imgtxt: String,
		imgur: String
	},{ collection: 'RoadSign' });

	var roadSign = mongoose.model("roadSign", roadsignSchema);

	app.get("/getroadsign",(req ,response) => {
		roadSign.find( function(err, rsign) {
			if(err) {
				response.send(err);
			}
			else {
				console.log("All Road Sign returned");
				response.status(200);
				response.send(rsign);
			}
		})
	})

	var ques = mongoose.model("ques", questionSchema);

	app.get("/getrandomquestion",(req ,response) => {
		ques.aggregate([{$sample: {size: 15}}], function(err, questions) {
			if(err) {
				response.send(err);
			}
			else {
				console.log("All Random returned");
				response.status(200);
				response.send(questions);
			}
		})
	})

	app.get("/getrandomNquestion",(req ,response) => {
		ques.aggregate([{$sample: {size: parseInt(req.query.qcnt)}}], function(err, questions) {
			console.log(req.query.qcnt);
			if(err) {
				response.send(err);
			}
			else {
				console.log("All Random " + req.query.qcnt + "returned");
				response.status(200);
				response.send(questions);
			}
		})
	})

	var userSchema = new mongoose.Schema({
        name: String,        
        email: String,
        password: String,        
	}, { collection: 'User' });
	var user = mongoose.model("user", userSchema);

	app.get("/loginusers", (req, res) => {
		user.find( function(err, users) {
			if (err) {				
				res.send(err);
			}
			else {
				console.log("All users returned");
				res.status(200);
				res.send(users);
			}
		});
	});
	
	app.post("/register", (req, res) => {
		var newUser = new user(req.body);		
		newUser.save( function(err) {
			if (err) {
				res.status(400);
				res.send({ "msg": "Insert Fail"});
			}
			else {	
				console.log("User added...Hurrey!");

			}
        });        
    });

}


server.listen(3000, () => {
	console.log("Listineng on port 3000")
});