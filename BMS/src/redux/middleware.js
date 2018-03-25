import http from '../utils/httpclient'

export default function(api){
    return function(dispatch){
        //dispatch
        return function(action){
            let {type, url, data, method = 'get'} = action;
            // console.log(JSON.stringify(action));
            if(!url){
                //手动调用 reducer
               return dispatch(action)
            }

            dispatch({type: 'requesting'})
            
            http[method](url, data).then((res) => {
                let _action = {
                    type: 'requested',
                    result: res.data
                }
                dispatch(_action)
            })
        }
    }
}