import React from 'react'
import { Link } from 'react-router'
import './classify.css'
export default class Video extends React.Component{
    render(){
        return (
            <div className="m-tab_warp">
                <div className="m-tab clearfix">
                    <div className="hot"><span>详情</span></div>
                    <div className=""><span>目录</span></div>
                    <div className=""><span>相关课程</span></div>
                </div>
            </div>
        )
    }
}
