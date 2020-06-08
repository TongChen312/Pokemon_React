const express = require('express'),
	mysql = require('mysql'),
	bodyParser = require('body-parser'),
	user = require('./routes/user.js'),
	pokemon = require('./routes/pokemon.js'),
	upload = require('./routes/upload.js');

// const cors=require("cors");

var app = express();
app.listen(8080);

// app.use(cors({
// 	origin:"http://127.0.0.1:5500",
// 	credentials:true
// 	//不能用*
// }));

app.use(express.static('static'));
app.use(bodyParser.urlencoded({
	extended: false
}))

app.use('/user', user);
app.use('/pokemon', pokemon);
app.use('/upload', upload);
