import React,{Component} from 'react'
import './foot.scss'
import {Link} from 'react-router'

export default class FootComponent extends Component{
    render(){
        return(
            <div className="footer">
                <ul>
                    <li><Link to="/"><i className="fa fa-reddit-alien"></i><span>兼职喵</span></Link></li>
                    <li><Link to="/list"><i className="fa fa-file-text-o"></i><span>全部兼职</span></Link></li>
                    <li><Link to="/Video"><i className="fa fa-graduation-cap"></i><span>A猫学堂</span></Link></li>
                    <li><Link to="/message"><i className="fa fa-commenting-o "></i><span>喵</span></Link></li>
                    <li><Link to="/mine"><i className="fa fa-user"></i><span>我的</span></Link></li>
                </ul>
            </div>
        )
    }
}