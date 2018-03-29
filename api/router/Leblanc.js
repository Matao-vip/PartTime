var db = require('../db')
var apiResult = require('../utils/apiResult.js')
var filter = require('../utils/filter.js')

module.exports = {
	reg(app){
        // 支持分页 {page:1,qty:6}
		app.get('/keCousrelist',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from coursesheet `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })

        app.get('/keTeacherslist',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from teachers `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })

        app.get('/keusers',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from users `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })

        })

        app.get('/keworksheet',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from worksheet `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })

        app.get('/keapplylist',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from applylist `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })

        app.get('/keadministrator',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from administrator `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })

        // 删除指定数据库数据
        // 删：DELETE FROM administrator WHERE id=4;
        app.get('/kedel',(req,res)=>{
            let sqlname = req.query.sql;
            let id = req.query.id;
            var sql = `DELETE FROM ${sqlname} WHERE id=${id}`;          
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })

        // 数据更新接口
        // UPDATE administrator SET admin='dk', WHERE admin='xiaohong';
        // UPDATE users SET sex='男',age=22 WHERE id=2
        app.get('/keupdate',(req,res)=>{
            let sqlname = req.query.sql;
            let id = req.query.id*1;
            // 对传进去对象的处理 
            let word = req.query.word;
            let str = '';
            for(var key in word){
                str +=`${key}='${word[key]}',`
            }
            str = str.slice(0,-1)
            function update(_sqlname){
                let sql =  `UPDATE ${sqlname} SET ${str} WHERE id=${id}`;
                return sql
            }
            db.DBHelper.handle(update(sqlname),function(result){
                res.send(apiResult(true,result));
            })
        })

        // 增：INSERT into administrator(admin,pass) VALUES ('xiaoming','123456'),('xiaohong','123456'); 多条插入

        app.post('/keinsert',(req,res)=>{
            let sqlname = req.body.sql;
            let word = JSON.parse(req.body.word);
            let arr1 = Object.keys(word)
            let str1 = arr1.toString();
            let arr2 = [];
            for(var i in arr1){
                arr2[i]=`'${word[arr1[i]]}'`;
            }  
            let str2 = arr2.toString();
            function insert(_sqlname){
                let sql = `INSERT INTO ${sqlname} (${str1}) VALUES (${str2})`;
                console.log(sql)
                     
                return sql;
            }  
            db.DBHelper.handle(insert(sqlname),function(result){
                res.send(apiResult(true,result));
            })              
        })

        app.get('/kesearch',(req,res)=>{
            let sqlname = req.query.sql;
            let word = req.query.word;
            let qty = req.query.qty;
            let page = req.query.page;
            let startNo = (page-1)*qty;
            // let sql = `SELECT * FROM ${sqlname} WHERE like '%$keyword%'`
            // select * from users where concat(username, password,sex) like '%1%'
            let concatword = '';
            switch(sqlname){
                case 'teachers':
                    concatword = `(id,teacher,teacherIntroduce,headImg)`;
                    break;
                // case 'administrator':
                //     concatword = `(id,admin,pass)`;
                //     break;
                case 'applylist':
                    concatword = `(id,work_id,username_id,status)`;
                    break;
                case 'coursesheet': 
                    concatword = `(id,videoImg,videotitle,courseIntroduce,couserType,price)`;
                    break;
                case 'worksheet':
                    concatword = `(name,region,payway,salary,workContent,locate,kind)`;
                    break;
            }
            let sql = `SELECT * FROM ${sqlname} WHERE concat${concatword} like '%${word}%'`;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";                 
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            }) 
                 
        })

	}
}