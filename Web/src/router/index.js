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
import MineMoreComponent from '../components/mine/mineMore/mineMoreComponent'
import UpdatePassComponent from '../components/mine/mineMore/updatePass/UpdatePassComponent'

// qjy修改
import MessageComponnet from '../components/message/MessageComponnet.js'

// ken修改
import SearchComponnet from '../components/home/search/search.js'
import Video_Componnet from '../components/VideoList/Video_Componnet.js'
import Video_datailComponnet from '../components/VideoList/VideoDetail/Video_detailComponnet.js'



export default (
    <Route history = {hashHistory}>
        <Route path="/" component = {HomeComponnet}/>
        <Route path="/_search" component = {SearchComponnet}/>
        <Route path="/list" component = {ListComponnet} />
        <Route path="/mine(/:id)" component = {MineComponnet}>
            <Route path="/mine/applyList(/:id)" component = {ApplyListComponnet} />
            <Route path="/mine/mineMore(/:id)" component = {MineMoreComponent} >
                <Route path="/mine/mineMore/updatePass(/:id)" component = {UpdatePassComponent} />
            </Route>
        </Route>
        <Route path="/baseMsg(/:id)" component = {BasemsgComponnet} />
        <Route path="/reg" component = {RegComponnet} />
        <Route path="/login" component = {LoginComponent} />
        <Route path="/detail(/:id)" component = {DetailComponnet} />
        <Route path="/message" component = {MessageComponnet} />
        <Route path="/Video" component = {Video_Componnet} />
        <Route path="/Video_detail/:id" component = {Video_datailComponnet} />
    </Route>
)