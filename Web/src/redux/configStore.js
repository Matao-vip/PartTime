import React from 'react'
import {createStore,applyMiddleware} from 'redux'

import rootReducer from './rootReducer'
import middleware from './middleware'

export default createStore(rootReducer,applyMiddleware(middleware));