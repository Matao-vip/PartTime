import React from 'react'
import {createStore, applyMiddleware} from 'redux'

import DatagridReducer from '../components/datagrid/datagridreducer'

import middleware from './middleware'

const store = createStore(DatagridReducer, applyMiddleware(middleware));

export default store;