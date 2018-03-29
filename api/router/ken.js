var db = require('../db');
var apiResult = require('../utils/apiResult');

module.exports={
    reg(app){
        app.get('/adminlogin',(req,res)=>{
            let username = req.query.username;
            let password = req.query.password;
            var sql = `select * from administrator where admin = '${username}' and pass = '${password}'`;
            db.DBHelper.handle(sql,result=>{
                // console.log(result.length);
                if(result.length>0){
                     res.send(apiResult(true,username,'登录成功'));
                }else{
                    res.send(apiResult(false,null,'登录信息错误'));
                }
            })
        });
        app.get('/index_word',(req,res)=>{
            let region = req.query.region;
            let type = req.query.type;
            let kind = req.query.kind;
            var sql = "select SQL_CALC_FOUND_ROWS * from worksheet where 1=1";
            if(region){
                sql +=` and region ='${region}'`
            }
            if(type){
                sql +=` and type ='${type}'`
            }
            if(kind){
                sql +=` and kind ='${kind}'`
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        });
        app.get('/searchgoods',(req,res)=>{
            let region = req.query.region;
            let type = req.query.type;
            let name = req.query.name;
            var sql = "select * from worksheet  where"
            if(region){
                sql +=` region like '%${region}%'`
            }
            if(type){
                sql +=` type like '%${type}%'`
            }
            if(name){
                sql +=` name kind ='%${name}%'`
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        });
    }    
}