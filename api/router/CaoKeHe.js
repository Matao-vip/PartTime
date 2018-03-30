var db = require('../db');
var apiResult = require('../utils/apiResult');
var filter = require('../utils/filter')

module.exports={
    reg(app){
        app.get('/video',(req,res)=>{
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
        app.get('/video1',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from  teachers`;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/getCourseByOrder',(req,res)=>{
            let couseType_id = req.query.type;
            let order = req.query.order;
            var sql = `select SQL_CALC_FOUND_ROWS * from coursesheet where 1=1`;
            if(couseType_id) sql += ` and couseType_id='${couseType_id}'`
            if(order){
                if(order == 0){
                    order = 'desc';
                }else if(order == 1){
                    order = 'asc';
                }
                sql += ` order by price ${order}`
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,result=>{
                res.send(result)
            })
        })
        // 获取视频商品详情
        app.get('/CgetCourse',(req,res)=>{
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
        app.get('/CgetTeacher',(req,res)=>{
            let id = req.query.id;
            var sql = `select * from teachers where id=${id}`
            db.DBHelper.handle(sql,result=>{
                res.send(apiResult(true,result));
            })
        })
        // 报名课程添加到课程报名表
        app.post('/CaddCourse',(req,res)=>{
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
    }
}