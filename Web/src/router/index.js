import React from 'react'
import {Route,Router,hashHistory, IndexRoute} from 'react-router'

import HomeComponnet from '../components/home/HomeComponent.js'
import ListComponnet from '../components/list/ListComponnet.js'
import DetailComponnet from '../components/detail/DetailComponnet.js'
// Marco修改
import MineComponnet from '../components/mine/MineComponent.js'
import RegComponnet from '../components/mine/register/RegComponent'
import LoginComponent from '../components/mine/login/LoginComponent'
import BasemsgComponnet from '../components/mine/baseMsg/BasemsgComponent'
import ApplyListComponnet from '../components/mine/applyList/applyListComponent'


import Video_Componnet from '../components/VideoList/Video_Componnet.js'
import Video_datailComponnet from '../components/VideoList/VideoDetail/Video_detailComponnet.js'



export default (
    <Route history = {hashHistory}>
        <Route path="/" component = {HomeComponnet}/>
        <Route path="/list" component = {ListComponnet} />
        <Route path="/detail" component = {DetailComponnet} />
        <Route path="/mine(/:id)" component = {MineComponnet}>
            <Route path="/mine/applyList(/:id)" component = {ApplyListComponnet} />
        </Route>
        <Route path="/baseMsg(/:id)" component = {BasemsgComponnet} />
        <Route path="/reg" component = {RegComponnet} />
        <Route path="/login" component = {LoginComponent} />
        <Route path="/Video" component = {Video_Componnet} />
        <Route path="/Video_detail/:id" component = {Video_datailComponnet} />
    </Route>
)