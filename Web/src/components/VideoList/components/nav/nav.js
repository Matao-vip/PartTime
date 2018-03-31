import React from 'react'
import { Link } from 'react-router'
import './nav.css'
export default class Nav1 extends React.Component{
    render(){
        return (
            <div className="m-searchs m-idx_search w_right">
                <Link to="/Video"><h3>A猫课堂</h3></Link>
                <div>
                	<span>搜索视频直播</span>
                </div>
                <a href="" className="right_entry_icon external"></a>
            </div>
        )
    }
}
