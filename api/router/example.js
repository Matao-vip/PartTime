// 每个人只需一个接口文件，所有接口都写在专属自己的文件里
var db = require('../db');
var apiResult = require('../utils/apiResult'); // 输出统一化
var filter = require('../utils/filter'); // 权限判断，按需引入

module.exports={
    reg(app){
        // 注意：每个接口的名字必须是唯一的，不能重复，为防止各组员之间命名了同样接口名字，建议在每个接口前面加上自己的标识
        app.get('/Elogin',(req,res)=>{
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
    }
}

/*
    简单介绍一下mysql增删查改的语句:
    增：INSERT into administrator(admin,pass) VALUES ('xiaoming','123456'),('xiaohong','123456'); // 多条插入
    删：DELETE FROM administrator WHERE id=4;
    查：SELECT * FROM administrator WHERE admin="Marco";
    改：UPDATE administrator SET admin='dk' WHERE admin='xiaohong';
 */