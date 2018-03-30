import React from 'react'
import { Link } from 'react-router'
import Header from './components/nav/nav.js'
import Slideshow from './components/slideshow/slideshow.js'
import Classify from './components/classify/classify.js'
import Getdata from './components/getData/getData.js'
import FooterComponent from '../foot/FootComponent'
import $ from 'jquery'

import './Video_Componnet.scss'
export default class Video_listComponnet extends React.Component{
    componentDidMount(){
        $("#CaoVideo .footer ul li").eq(2).addClass('active');
    }
    componentDidUpdate(){
        // location.reload();
    }
    render(){
        return (
            <div className="content" id="CaoVideo">
            	<Header/>
            	<div id="main">
                    <Slideshow/>
                    <Classify/>
                    <Getdata/>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}
