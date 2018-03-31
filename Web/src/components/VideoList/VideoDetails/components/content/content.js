import React from 'react'
import { Link } from 'react-router'
import './content.css'
import '../classify/classify.css'
import http from '../../../../../utils/httpClient.js'
export default class Content extends React.Component{
    
    render(){
        return (
            <div className="m-tab_cont" id="m_course_datail_warp">
                <div className="m-course_info clearfix">
                    <h3>大学生兼职与职业生涯规划</h3>
                    <p>23797人报名</p>
                    <h5>免费</h5>     
                </div>
                <div className="m-teacher clearfix">
                    <h3>讲师</h3>
                    <div className="m-teacher_cont">
                        <div className="teache_img">
                            <img src="http://img.jianzhimao.com/activity/prize/20170112/e530ca0d37334ff876d58f426797f36d.jpg?x-oss-process=image/resize,w_100" className="lazy"/>
                        </div>
                        <div className="teacher_info">
                            <h4>A猫出品</h4>
                            <p>A猫学堂，专注于大学生知识交流与职前培训，致力于打造国内最大的大学生人才培养平台。</p>
                        </div>
                    </div>
                </div>
                <div className="m-course_intro">
                    <h3>课程介绍</h3>
                    <img src="http://img.jianzhimao.com/activity/prize/20170807/e14a04bb852f96b5bf27c2bc95230c21.jpg"/>   
                </div>
            </div>
        )
    }
}