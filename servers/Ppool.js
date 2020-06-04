const mysql=require('mysql');
const Ppool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'Pokemon',
	connectionLimit:20
});
module.exports=Ppool;