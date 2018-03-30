import React from 'react'
import { Link } from 'react-router'
import Nav from '../components/nav/nav.js'
import Video from '../VideoDetails/components/video/video.js'
import Classify from '../VideoDetails/components/classify/classify.js'
import Content from '../VideoDetails/components/content/content.js'
import http from '../../../utils/httpClient.js'
import './components/classify/classify.css'
import './VideoDetails.css'
import $ from 'jquery'
export default class videoDetails extends React.Component{
    componentWillMount(){
        this.setState({
            spinnerShow: true    
        })
        http.get('video1').then((res) => {
            const aa = res.data.data;
            const da1=[];
            const cs = this.props.params.id;
            for(var i = 0; i < aa.length; i++){
                if(aa[i].id==cs){
                    da1.push({
                        id: aa[i].id,
                        teacher: aa[i].teacher,
                        headImg: aa[i].headImg,
                        teacherIntroduce: aa[i].teacherIntroduce
                    }); 
                }
               
            }
            
            this.setState({ 
                spinnerShow: false,
                dataset: da1,
            }) 
        })
       http.get('video').then((res) => {
            const aa = res.data.data;
            const da2=[];
            const css = this.props.params.id;
            for(var i = 0; i < aa.length; i++){
                if(aa[i].id==css){
                    da2.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                    }); 
                }
               
            }
            this.setState({ 
                spinnerShow: false,
                dataset1: da2,
            }) 
        })
    }
    state = {
        dataset:[],
        dataset1:[],
        spinnerShow: false,
    }
    addCourseApply(){
        var userid = window.sessionStorage.getItem('userID')
        if(!userid){
            this.props.router.push('/login')
        }else{
            http.post('CaddCourse',{userid,courseid:this.props.params.id}).then(res=>{
                if(res.status){
                    alert('报名成功！')
                }
            })
        }
    }
    display(){
        $("#m_course_datail_warp").css('display','block');  
        $("#m_course_lessons_warp").css('display','none');
        $(".m-single_list").css('display','none');
    }
    display2(){  
          $("#m_course_lessons_warp").css('display','block');
          $("#m_course_datail_warp").css('display','none');
          $(".m-single_list").css('display','none');
    }
    display3(){  
        $("#m_course_datail_warp").css('display','none');  
        $("#m_course_lessons_warp").css('display','none');
        $(".m-single_list").css('display','block');
    }
    video(){
        http.get('video').then((res) => {
            const aa = res.data.data;
            this.setState({
                spinnerShow: false,
                dataset: aa
            })     
        })
    }
    render(){
        return (

            <div className="page">
                <div className="content">
                    <Nav/>
                    <div id="main">
                        <div className="m-course">
                            <Video/>
                        </div>
                        <div className="m-tab_warp">
                            <div className="m-tab clearfix">
                                <div className="" onClick={this.display.bind(this)}><span>详情</span></div>
                                <div className="" onClick={this.display2.bind(this)}><span>目录</span></div>
                                <div className="" onClick={this.display3.bind(this)}><span>相关课程</span></div>
                            </div>
                        </div>
                        <div className="m-tab_cont" id="m_course_datail_warp" style={{display:'display'}}>



                        {
                            this.state.dataset1.map(function(item){
                                return(
                                    <div className="m-course_info clearfix" key={item.id}>
                                        <h3>{item.videotitle}</h3>
                                        <p>{item.number}人报名</p>
                                        <h5>￥{item.price}</h5>     
                                    </div>
                                    )
                            })
                        }




                            {
                                this.state.dataset.map(function(item){
                                    return(
                                        <div className="m-teacher clearfix" key={item.id}>
                                            <h3>讲师</h3>
                                            <div className="m-teacher_cont">
                                                <div className="teache_img">
                                                    <img src={item.headImg} className="lazy"/>
                                                </div>
                                                <div className="teacher_info">
                                                    <h4>{item.teacher}</h4>
                                                    <p>{item.teacherIntroduce}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="m-course_intro">
                                <h3>课程介绍</h3>
                                <img src="http://img.jianzhimao.com/activity/prize/20170807/e14a04bb852f96b5bf27c2bc95230c21.jpg"/>   
                            </div>
                        </div>
                        <div className="m-tab_cont" id="m_course_lessons_warp" style={{display:'none'}}>
                            <ul className="m-course_lessons">
                                <li data-lesson-id="enhsOGI2YUdQdUE9" data-status="3" className="">
                                    <h3><span>1</span>[视频]猫叔-教你选择适合自己的职业</h3>
                                    <p><span className="duration">07:44</span></p>
                                </li> 
                            </ul>
                        </div>
                        <div className="m-tab_cont m-single_list" style={{display:'none'}}>
                            <ul id="m_related_course_warp">
                            {
                                this.state.dataset1.map(function(item){
                                    return(
                                        <li key={item.id}>
                                            <div className="list_pic">
                                                <img src={item.videoImg} className="lazy" />   
                                            </div>
                                            <div className="list_info">
                                                <h6>{item.videotitle}</h6>
                                                <p><span className="price free">免费</span></p>
                                                <p className="clearfix">
                                                    <span className="teacher">{item.number}人报名</span>
                                                    <span className="org">绪作</span>
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="m-bot" id="m_bot_wamp">
                        <a href="" className="u-qq_btn"></a>
                        <span className="u-buy_btn" onClick={this.addCourseApply.bind(this)}>立即报名</span>
                    </div>
                </div>
            </div>
        )
    }
}