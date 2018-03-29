const express = require('express');
const app = express();
const http = require('http').Server(app);
var io = require('socket.io')(http);
const bp = require('body-parser');
const path = require('path');

// 在这里引入自己接口的文件
let example = require('./example')
let Marco = require('./Macro.js')
<<<<<<< HEAD
let ken = require('./ken.js')

=======
let qjy = require('./qjy.js')
>>>>>>> 2ae63e821e12b7d05fbacf8805874af445ba6105

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

app.use(bp.urlencoded({extended:false}));
app.use(express.static(path.join(path.resolve(__dirname,'../'),'/')));
module.exports={
    start(_port){
        // 在这里引用接口文件中的方法
        example.reg(app);
        Marco.reg(app);
<<<<<<< HEAD
        ken.reg(app)
=======
        qjy.reg(app);

>>>>>>> 2ae63e821e12b7d05fbacf8805874af445ba6105
        http.listen(_port || 1010);
    }
}