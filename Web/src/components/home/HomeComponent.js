import React from 'react'
import ReactDOM from 'react-dom'
import './HomeComponent.scss'
import Index_header from './header/index_header.js'
import Index_body from './body/index_body.js'
import $ from 'jquery'
import FootComponent from '../foot/FootComponent'

export default class HomeComponnet extends React.Component{
    componentDidMount(){
        $("#index_home .footer ul li").first().addClass('active');
    }
    render(){
        return(
            <div id="index_home">
                <Index_header />
                <Index_body>            
                </Index_body>
                <FootComponent />
                {this.props.children}
            </div>
        ) 
    }
}