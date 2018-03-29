var db = require('../db');
var apiResult = require('../utils/apiResult'); // 输出统一化
var filter = require('../utils/filter'); // 权限判断，按需引入

module.exports={
    reg(app){
        // 注意：每个接口的名字必须是唯一的，不能重复，为防止各组员之间命名了同样接口名字，建议在每个接口前面加上自己的标识
        app.get('/qList',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select * from worksheet `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        }),
        app.get('/qDetail',(req,res)=>{
            var sql = `select * from worksheet where id=${req.query.id} `;
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/qDetail_like',(req,res)=>{
            var id = parseInt(Math.random()*10)+1;
            var sql = `select * from worksheet where id=${id} `;
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/qSeleArea',(req,res)=>{
            var sql = `select * from worksheet where region=${req.query.region} `;
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/qSeleType',(req,res)=>{
            var sql = `select * from worksheet where type=${req.query.type} `;
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/qSalaryAsc',(req,res)=>{
            var sql = `select * from worksheet order by salary asc `;
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/qSalaryDesc',(req,res)=>{
            var sql = `select * from worksheet order by salary desc `;
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/qSeleNew',(req,res)=>{
            var sql = `select * from worksheet order by publishtime desc `;
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/qApply',(req,res)=>{
            console.log(req.query)
            var wid = req.query.workid;
            var uid = req.query.userid;
            var sql = `INSERT INTO applylist (work_id,username_id,status) VALUES (${wid},${uid},0)`;
            sql += "; select FOUND_ROWS() as rowsCount;";
            console.log(sql)
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
    }
}

/*
    简单介绍一下mysql增删查改的语句:
    增：INSERT into administrator(admin,pass) VALUES ('xiaoming','123456'),('xiaohong','123456'); // 多条插入
    删：DELETE FROM administrator WHERE id=4;
    查：SELECT * FROM administrator WHERE admin="Marco";
    改：UPDATE administrator SET admin='dk' WHERE admin='xiaohong';
 */