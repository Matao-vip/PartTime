import request from "superagent"

let baseUrl = "http://10.3.136.57:1010/";

function filterUrl(url){
    return url.startsWith('http') ? url : baseUrl+url;
}

export default{
    get(url,params){
        return new Promise((resolve,reject)=>{
            request
            .get(filterUrl(url))
            .query(params || {})
            .end((err,res)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(res.body);
                }
            })
        })
    },
    post(url,params){
        return new Promise((resolve,reject)=>{
            request
            .post(filterUrl(url))
            .send(params || {})
            .type('form')
            .end((err, res) => {
                if(err){
                    reject(err);
                }else{
                    resolve(res.body);
                }
            })
        })
    }
}