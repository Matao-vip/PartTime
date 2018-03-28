import React from "react"
import {combineReducers} from 'redux'

import datagrid from "../components/datagrid/datagridreducer.js"
import Reg from "../components/mine/register/RegReducer.js"
import mine from "../components/mine/MineReducer.js"

export default combineReducers({
    datagrid,
    Reg,
    mine
})