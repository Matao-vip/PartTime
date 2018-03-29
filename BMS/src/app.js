import React from 'react'
import ReactDOM from 'react-dom'
import {Router,hashHistory} from  'react-router'
import {Provider} from 'react-redux'
import routes from './router/router.js'

// import store from './redux/configStore.js'
import store from './redux/configStore.js'
import './common/bootstrap.css'
import './common/common.css'

ReactDOM.render(
  	<Provider store={store}>
    	<Router history = {hashHistory} routes={routes}/>
  	</Provider>,
    document.getElementById('app')
    )