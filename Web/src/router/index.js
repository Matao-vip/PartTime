import React from 'react'
import {Route,Router,hashHistory, IndexRoute, } from 'react-router'

import HomeComponnet from '../components/home/HomeComponent.js'
import ListComponnet from '../components/list/ListComponnet.js'
import DetailComponnet from '../components/detail/DetailComponnet.js'
import LoginComponnet from '../components/login/LoginComponent.js'
import MessageComponnet from '../components/message/MessageComponnet.js'


import Video_Componnet from '../components/VideoList/Video_Componnet.js'
import Video_datailComponnet from '../components/VideoList/VideoDetail/Video_detailComponnet.js'



export default (
    <Route history = {hashHistory}>
        <Route path="/" component = {HomeComponnet}/>
        <Route path="/list" component = {ListComponnet} />
        <Route path="/detail/:id" component = {DetailComponnet} />
        <Route path="/login" component = {LoginComponnet} />
        <Route path="/message" component = {MessageComponnet} />
        <Route path="/Video" component = {Video_Componnet} />
        <Route path="/Video_detail/:id" component = {Video_datailComponnet} />
    </Route>
)