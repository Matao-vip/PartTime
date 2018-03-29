import React from 'react'
import ReactDOM from 'react-dom'
import './HomeComponent.scss'
import Index_header from './header/index_header.js'
import Index_body from './body/index_body.js'
// import Index_footer from './footer/index_footer.js'
import Index_nav from './nav/index_nav.js'
export default class HomeComponnet extends React.Component{
    render(){
        return(
            <div id="index_home">
                <Index_header />
                <Index_body>            
                </Index_body>
                <Index_nav />
                {this.props.children}
            </div>
        ) 
    }
}