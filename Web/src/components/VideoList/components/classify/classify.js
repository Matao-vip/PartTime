import React from 'react'
import { Link } from 'react-router'
import {Route,Router,hashHistory, IndexRoute, } from 'react-router'
import './classify.css'
export default class Nav1 extends React.Component{
    render(){
        return (
            <div className="m-nav">
                <div className="m-nav_list">
                	<ul className="clearfix" id="m_nav_list_warp">
                		<li>
                			<Link to="/Video_detail/:id=1"><img src={require('../img/list1.png')} /></Link>
                			<span>全部</span>
                		</li>
                		<li>
                			<Link to="/Video_detail/:id=1"><img src={require('../img/list2.png')} /></Link>
                			<span>职场就业</span>
                		</li>
                		<li>
                			<Link to="/Video_detail/:id=1"><img src={require('../img/list3.png')} /></Link>
                			<span>兼职干货</span>
                		</li>
                		<li>
                			<Link to="/Video_detail/:id=1"><img src={require('../img/list4.png')} /></Link>
                			<span>技能提升</span>
                		</li>
                		<li>
                			<Link to="/Video_detail/:id=1"><img src={require('../img/list5.png')} /></Link>
                			<span>兴趣爱好</span>
                		</li>
                		<li>
                			<Link to="/Video_detail/:id=1"><img src={require('../img/list6.png')} /></Link>
                			<span>校园生活</span>
                		</li>
                		<li>
                			<Link to="/Video_detail/:id=1"><img src={require('../img/list7.png')} /></Link>
                			<span>热门</span>
                		</li>
                	</ul>
                </div> 
            </div>
        )
    }

}