import http from '../utils/httpClient'
import * as constants from '../components/datagrid/datagridconstants.js'

export default function(api){
    return function(dispatch){
        return function(action){
            let {type,types,url,data,method='get',name}=action;
            if(!url){
                return dispatch(action);
            }
            dispatch({type:constants.Requesting})

            http[method](url,data).then(res=>{
                let _action={
                    type,
                    name,
                    result:res
                }
                dispatch(_action)
            }).catch(err=>{
                dispatch({type:constants.RequestError})
            })
        }
    }
}