const express = require('express')
const pool = require('../Ppool.js')
var router = express.Router();

// 宝可梦列表
router.get("/Plist", (req, res) => {
	pool.query("select * from Pokemons", (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});


// 更多宝可梦列表
router.post("/Plistmore", (req, res) => {
	var pno = req.body.pno;
	console.log(pno)
	var ps = req.body.pageSize;
	if (!pno) { pno = 2 }
	if (!ps) { ps = 31 }
	var offset = (pno - 1) * ps;//起始记录数
	ps = parseInt(ps)//行数
	pool.query("select * from Pokemons limit ?,?", [offset, ps], (err, result) => {
		pno++;
		if (err) throw err;
		res.send(result);
	});
});

// 单个宝可梦详细信息
router.get("/Pquerry/:pid", (req, res) => {
	var $pid = req.params.pid;
	var sql = "select * from Pokemons where pid=?"
	pool.query(sql, [$pid], (err, result) => {
		if (err) throw err;
		console.log(result)
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send({ code: -1, msg: '查询失败' });
		}
	});
});


// 创建/修改我的队伍
router.post("/myteam", (req, res) => {
	var first = req.body.$first;
	var second = req.body.$second;
	var third = req.body.$third;
	var tid = req.body.$tid;
	// 先查询用户是否在之前有过队伍
	pool.query("select * from Myteam where tid=?", tid, (err, result) => {
		if (err) throw err;
		if (result.length === 0) {
			//如果之前没有创建任何队伍,就添加新队伍
			var sql = `insert into Myteam values (${tid},"${first}","${second}","${third}")`
		} else {
			// 如果之前有创建过队伍,就修改队伍信息
			sql = `update Myteam set team1="${first}",team2="${second}",team3="${third}" where tid="${tid}"`
		}
		pool.query(sql, (err, result) => {
			if (err) throw err;
			if (result.affectedRows > 0) {
				res.send({ code: 1, msg: '修改成功' })
			} else {
				res.send({ code: -1, msg: '修改失败' })
			}
		})
	})
})

// 查询我的队伍
router.get("/team/:tid", (req, res) => {
	var $tid = req.params.tid;
	pool.query("select * from Myteam where tid=?", $tid, (err, result) => {
		if (err) throw err;
		// console.log(result)
		if (result.length === 0) {
			res.send("新用户")
		} else {
			res.send(result);
		}
	});
})

// 宝可梦能力值
router.get("/Ability/:pid", (req, res) => {
	var $pid = req.params.pid;
	pool.query("select HP,WG,WF,TG,TF,SD,SUM from race_value where pid=?", $pid, (err, result) => {
		if (err) throw err;
		// console.log(result)
		if (result.length !== 0) {
			res.send({ code: 1, result })
		} else {
			res.send({ code: -1, msg: '查询信息失败' })
		}
	})
})

// 查询上下宝可梦的名字
router.get("/prevnext/:pid", (req, res) => {
	var $pid = req.params.pid;
	pool.query("select pname from Pokemons where pid in(?,?)", [parseInt($pid) + 1, parseInt($pid) - 1], (err, result) => {
		if (err) throw err;
		if (result.length !== 0) {
			res.send(result)
		} else {
			res.send({ code: -1, msg: '失败' })
		}
	})
})



module.exports = router;