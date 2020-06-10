const express = require('express')
const pool = require('../pool.js')
var router = express.Router();

//用户注册页面                              
router.post("/reg", (req, res) => {
	var $uname = req.body.uname;
	var $upwd = req.body.upwd;
	var $phone = req.body.phone;
	var $email = req.body.email;
	pool.query("insert into users(uname,upwd,phone,email) value(?,?,?,?)", [$uname, $upwd, $phone, $email], (err, result) => {
		if (err) throw err;
		if (result.affectedRows > 0) {
			res.send({ code: 1, msg: '注册成功' })
		}
	});
});

//用户列表
router.get("/list", (req, res) => {
	var sql = "select * from users";
	pool.query(sql, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});

//登录页面
router.get("/login", (req, res) => {
	var $uname = req.query.uname;
	var $upwd = req.query.upwd;
	pool.query("select * from users where uname=? and upwd=?", [$uname, $upwd], (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			res.send({ code: 1, msg: '登录成功' })
		} else {
			res.send({ code: -1, msg: '用户名错误或者密码错误' })
		}
	});
});


router.get("/banner/banner_list", (req, res) => {
	pool.query("select * from banner", (err, result) => {
		if (err) throw err;
		res.send(result)
	});
})


module.exports = router;