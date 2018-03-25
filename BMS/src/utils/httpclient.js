import http from 'superagent'

const apiBasrUrl ='http://localhost:1010/';

function filterUrl(url){
    if(url.startsWith('http')){
        return url;
    }else{
        return apiBasrUrl + url;
    }
}
export default{
    get(url,params){
        return new Promise((resolve,reject)=>{
            http.get(filterUrl(url)).query(params ||{}).end((error,res)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(res.body)
                }
            })
        })
    }
}