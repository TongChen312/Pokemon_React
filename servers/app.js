const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const user=require('./routes/user.js');
const pokemon=require('./routes/pokemon.js');
// const cors=require("cors");

var app=express();
app.listen(8080);

// app.use(cors({
// 	origin:"http://127.0.0.1:5500",
// 	credentials:true
// 	//不能用*
// }));

app.use(express.static('static'));
app.use(bodyParser.urlencoded({
	extended:false
}))

app.use('/user',user);
app.use('/pokemon',pokemon);
