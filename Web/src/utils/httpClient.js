import request from "superagent"
import Router from 'react-router'

let baseUrl = "http://localhost:1010/";

function filterUrl(url){
    return url.startsWith('http') ? url : baseUrl+url;
}

export default{
    baseUrl,
    get(url,params){
        return new Promise((resolve,reject)=>{
            request
            .get(filterUrl(url))
            .query(params || {})
            .set('Authorization',window.sessionStorage.getItem('xxtoken'))
            .end((err,res)=>{
                if(err){
                    reject(err);
<<<<<<< HEAD
                }else if(!res.body.status && res.body.message == "unauthorized"){
                    reject(err);
=======
                }else if(!res.body.status && res.body.error == "unauthorized"){
                    this.props.router.push('/login');
                    return false;
>>>>>>> 2ae63e821e12b7d05fbacf8805874af445ba6105
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
            .set('Content-Type','application/x-www-form-urlencoded')
            .set('Authorization',window.sessionStorage.getItem('xxtoken'))
            .end((err, res) => {
                if(err){
                    reject(err);
<<<<<<< HEAD
                }else if(!res.body.status && res.body.message == "unauthorized"){
=======
                }else if(!res.body.status && res.body.error == "unauthorized"){
>>>>>>> 2ae63e821e12b7d05fbacf8805874af445ba6105
                    this.props.router.push('/login');
                    return false;
                }else{
                    resolve(res.body);
                }
            })
        })
    }
}