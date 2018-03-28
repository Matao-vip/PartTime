import * as constants from '../../datagrid/datagridaction.js'

export default function Reg(state={},action){
    var _state = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case constants.Requesting:
            _state.show=true;
            break;
        case 'exist':
            _state.show=false;
            if(action.name){
                _state[action.name] = _state[action.name] || {}
                _state[action.name].dataset = action.result.data;
            }else{
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