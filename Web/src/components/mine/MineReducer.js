import * as constants from '../datagrid/datagridconstants'

export default function MineRedux(state={},action){
    var _state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.Requesting:
            _state.show=true;
            break;
        case "getMine":
            _state.show=false;
            if(action.name){
                _state[action.name] = _state[action.name] || {}
                _state[action.name].dataset = action.result.data;
            }else if(action.result.status){
                _state.dataset=action.result.data;
            }
            break;
        case constants.RequestError:
            _state.show=false;
            _state.error=action.error;
            break;
    }
    return _state;
}

