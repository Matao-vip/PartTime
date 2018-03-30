var db = require('../db');
var apiResult = require('../utils/apiResult');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const filter = require('../utils/filter');

var express=require('express');
var multer=require('multer');
var path=require('path');
var fs=require('fs');
// 设置上传目录
var uploadpath=path.join(path.resolve(__dirname,'../'),'temp');
var upload=multer({ dest: uploadpath});

module.exports={
    reg(app){
        // 注册账户
        app.post('/Mreg',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            let pass_secret = crypto.createHash('md5').update(password).digest('hex');
            var sql = `insert into users(username,password,headImg,nickname) values ('${username}','${pass_secret}',"temp/default.jpg",'喵${username}')`;
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
        app.get('/Mgetuser',filter,(req,res)=>{
            let id = req.query.id;
            let sql = `select * from users where id=${id};`
            db.DBHelper.handle(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 修改头像（文件上传）接口
        app.post('/Muploadhead',upload.single('head'),(req,res)=>{
            var file=req.file;
            var id=req.body.id;
            fs.rename(file.path,file.path+file.originalname);
            var headImg = "temp/"+file.filename+file.originalname;
            var sql = `update users set headImg='${headImg}' where id=${id}`
            db.DBHelper.handle(sql,result=>{
                res.send(apiResult(true,headImg))
            })
        })
        // 修改用户基本信息
        app.post('/MchangeMsg',(req,res)=>{
            let newMsg = req.body;
            var sql = `update users set username='${newMsg.username}',nickname='${newMsg.nickname}',sex='${newMsg.sex}',birth='${newMsg.birth}',height=${newMsg.height},region='${newMsg.region}',eduState='${newMsg.eduState}',email='${newMsg.email}' where id=${newMsg.id}`
            db.DBHelper.handle(sql,result=>{
                res.send(apiResult(true,result))
            })
        })
        // 获取兼职申请数据列表
        app.get('/MgetApply',filter,(req,res)=>{
            let username_id = req.query.username_id;
            var sql = `select SQL_CALC_FOUND_ROWS * from applylist`
            if(username_id){
                sql += ` WHERE username_id=${username_id}`;
                sql += "; select FOUND_ROWS() as rowsCount;";
                db.DBHelper.handle(sql,result=>{
                    if(result.data && result.data.length>0){
                        var sql2 = 'select SQL_CALC_FOUND_ROWS * from worksheet where 1=2'
                        result.data.forEach(item=>{
                            sql2 += ` or id=${item.work_id}`
                        })
                        sql2 += "; select FOUND_ROWS() as rowsCount;";
                        db.DBHelper.handle(sql2,result2=>{
                            if(result2.data){
                                result2.data.forEach((item,idx)=>{
                                    for(var i=0;i<result.data.length;i++){
                                        if(item.id == result.data[i].work_id){
                                            item['applytime'] = result.data[i].applytime;
                                            item['listId'] = result.data[i].id;
                                            break;
                                        }
                                    }
                                })
                            }
                            res.send(apiResult(true,result2));
                        })
                    }else{
                        res.send(apiResult(false));
                    }
                })
            }else{
                res.send(apiResult(false));
            }
        })
        // 删除申请数据
        app.post('/Mdelapply',filter,(req,res)=>{
            let id = req.body.id;
            if(id){
                var sql = `delete from applylist where id=${id}`
                db.DBHelper.handle(sql,result=>{
                    res.send(apiResult(true,result));
                })
            }else{
                res.send(apiResult(false));
            }
        })
        // 修改密码判定
        app.post('/vPsss',(req,res)=>{
            let id = req.body.id;
            let password = req.body.password;
            let newpass = req.body.newpass;
            password = crypto.createHash('md5').update(password).digest('hex');
            newpass = crypto.createHash('md5').update(newpass).digest('hex');
            var sql = `select * from users where id=${id} and password='${password}'`
            db.DBHelper.handle(sql,result=>{
                if(result.length>0){
                    var sql2 = `update users set password='${newpass}' where id=${id}`
                    db.DBHelper.handle(sql2,result2=>{
                        res.send(apiResult(true));
                    })
                }else{
                    res.send(apiResult(false));
                }
            })
        })


        // 获取视频商品详情
        app.get('/MgetCourse',(req,res)=>{
            let id = req.query.id;
            if(id){
                var sql = `select * from coursesheet where id=${id}`
                db.DBHelper.handle(sql,result=>{
                    if(result.length>0){
                        var teacher_id = result[0].teacher;
                        var sql2 = `select * from teachers where id=${teacher_id}`
                        db.DBHelper.handle(sql2,result2=>{
                            result = result.concat(result2);
                            res.send(apiResult(true,result));
                        })
                    }else{
                        res.send(apiResult(false));
                    }
                })
            }else{
                res.send(apiResult(false));
            }
        })
        // 获取教师详情
        app.get('/MgetTeacher',(req,res)=>{
            let id = req.query.id;
            var sql = `select * from teachers where id=${id}`
            db.DBHelper.handle(sql,result=>{
                res.send(apiResult(true,result));
            })
        })
        // 报名课程添加到课程报名表
        app.post('/MaddCourse',filter,(req,res)=>{
            let userid = req.body.userid;
            let courseid = req.body.courseid;
            if(userid,courseid){
                var sql = `insert into courseApplyList(userid,courseid) values (${userid},${courseid})`;
                db.DBHelper.handle(sql,result=>{
                    res.send(apiResult(true,result));
                })
            }else{
                res.send(apiResult(false,result));
            }
        })
        // 获取课程列表
        app.get('/MgetCourseApply',filter,(req,res)=>{
            let userid = req.query.userid;
            var sql = `select SQL_CALC_FOUND_ROWS * from courseApplyList`
            if(userid){
                sql += ` WHERE userid=${userid}`;
                sql += "; select FOUND_ROWS() as rowsCount;";
                db.DBHelper.handle(sql,result=>{
                    if(result.data && result.data.length>0){
                        var sql2 = 'select SQL_CALC_FOUND_ROWS * from coursesheet where 1=2'
                        result.data.forEach(item=>{
                            sql2 += ` or id=${item.courseid}`
                        })
                        sql2 += "; select FOUND_ROWS() as rowsCount;";
                        db.DBHelper.handle(sql2,result2=>{
                            if(result2.data){
                                result2.data.forEach((item,idx)=>{
                                    for(var i=0;i<result.data.length;i++){
                                        if(item.id == result.data[i].courseid){
                                            item['listId'] = result.data[i].id;
                                            break;
                                        }
                                    }
                                })
                            }
                            res.send(apiResult(true,result2));
                        })
                    }else{
                        res.send(apiResult(false));
                    }
                })
            }else{
                res.send(apiResult(false));
            }
        })
        // 取消报名
        app.post('/MdelCourseApply',filter,(req,res)=>{
            let id = req.body.id;
            if(id){
                var sql = `delete from courseApplyList where id=${id}`
                db.DBHelper.handle(sql,result=>{
                    res.send(apiResult(true,result));
                })
            }else{
                res.send(apiResult(false));
            }
        })
    }
}