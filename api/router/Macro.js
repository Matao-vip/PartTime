var db = require('../db');
var apiResult = require('../utils/apiResult');

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
    }
}