import * as constants from './datagridconstants.js'

// 设置默认
export default function datagrid(state = {}, action){
	let _state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case constants.Requesting:
			_state.show = true;
			break;
		case constants.Requested:
			_state.show = false;
			if(action.name){
				_state[action.name] = _state[action.name] || {};
				_state[action.name].dataset = action.result;
				_state.rowscount = action.rowscount;
			}else{
				_state.dataset = action.result;
				_state.rowscount = action.rowscount;
			}
			break;
		case constants.RequestError:
			_state.show =false;
            _state.error = action.error;
            break;
	}
	return _state;
}