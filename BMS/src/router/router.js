import React from 'react'
import {Route,hashHistory } from 'react-router'

import HomeComponnet from '../components/home/HomeComponent.js'
import LoginComponnet from '../components/login/LoginComponent.js'

export default (

    <Route history = {hashHistory}>
        <Route path="/login" component = {LoginComponnet} />,
        <Route path="/" component = {HomeComponnet}>
        </Route>
    </Route>
)