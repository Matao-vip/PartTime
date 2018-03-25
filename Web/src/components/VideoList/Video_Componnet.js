import React from 'react'
import { Link } from 'react-router'
export default class Video_listComponnet extends React.Component{
    render(){
        return (
            <div>
                <h1>视频列表（A猫学堂）</h1>
                {this.props.children}
                <Link to="/Video_detail/:id">点击跳转</Link> 
            </div>
        )
    }
}