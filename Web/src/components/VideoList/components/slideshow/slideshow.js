import React from 'react'
import { Link } from 'react-router'
import './slideshow.css'

export default class Nav1 extends React.Component{
    componentDidMount(){
        location.replace;
    }
    render(){
        return (
        <div>
            <div className="m-idx_banner swiper-container-horizontal">
            	<ul className="box_c">
            		<li><a href="#"><img src={require('../img/lunbo1.png')} /></a></li>
            		<li><a href="#"><img src={require('../img/lunbo2.png')} /></a></li>
            		<li><a href="#"><img src={require('../img/lunbo3.png')} /></a></li>
            		<li><a href="#"><img src={require('../img/lunbo4.png')} /></a></li>
            		<li><a href="#"><img src={require('../img/lunbo2.png')} /></a></li>
				</ul>
				<nav id="navc">
			    	<span className="active"></span>
			        <span></span>
			        <span></span>
			        <span></span>
			        <span></span>
			    </nav>
			    
            </div>
            <script src={require('./style.js')}></script>
        </div>    
        )
    }
}