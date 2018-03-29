import http from '../utils/httpclient'
import * as constants from '../components/datagrid/datagridconstants.js'

export default function(api){
    return function(dispatch){
        //dispatch
        return function(action){
            let {type, url, data, method, name} = action;
            // console.log(JSON.stringify(action));
            if(!url){
                //手动调用 reducer
               return dispatch(action)
            }
            // 请求前
            dispatch({type: constants.Requesting})
            http[method](url, data).then((res) => {
                let _action = {
                    type: constants.Requested,
                    result: res.data.data,
                    name,
                    rowscount: res.data.rowsCount
                }
                dispatch(_action)
            }).catch((error)=>{
                dispatch({type: constants.RequestError})
            })
        }
    }
}