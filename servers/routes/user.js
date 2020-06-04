const express=require('express')
const pool=require('../pool.js')
var router=express.Router();							

//用户注册页面                              
router.post("/reg",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $email=req.body.email;
	pool.query("insert into xz_user(uname,upwd,phone,email) value(?,?,?,?)",[$uname,$upwd,$phone,$email],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send("1")
		}
	});
});

//用户列表
router.get("/list",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	});
});

//登录页面
router.get("/login/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	pool.query("select * from xz_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send("1")
		}else{
			res.send("0")	
		}
	});
});


module.exports=router;