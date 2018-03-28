var db = require('../db');
var apiResult = require('../utils/apiResult');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const filter = require('../utils/filter');

module.exports={
    reg(app){
        app.get('/Mcategory',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from categorys `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        // 注册账户
        app.post('/Mreg',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            let pass_secret = crypto.createHash('md5').update(password).digest('hex');
            var sql = `insert into users(username,password,headImg) values ('${username}','${pass_secret}',"temp/default.jpg")`;
            db.DBHelper.handle(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        })
        // 登录和用户名是否存在验证
        app.post('/Mlogin',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            var sql = `select * from users where username='${username}'`
            if(username && !password){ // 用户名是否存在验证
                db.DBHelper.handle(sql,result=>{
                    res.send(apiResult(result && result.length>0))
                })
            }else if(username && password){
                password = crypto.createHash('md5').update(password).digest('hex');
                sql += ` and password='${password}';`
                db.DBHelper.handle(sql,result=>{
                    let token = '';
                    let user = {username};
                    if(result.length>0){
                        token=jwt.sign(user,'secret',{expiresIn: "3d"});
                        res.send(apiResult(true,{token,id:result[0]['id']}));
                    }else{
                        res.send(apiResult(false));
                    }
                })
            }
        })
        // 获取用户信息
        app.get('/Mgetuser',(req,res)=>{
            let id = req.query.id;
            let sql = `select * from users where id=${id};`
            db.DBHelper.handle(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
    }
}