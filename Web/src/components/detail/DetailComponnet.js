import React from 'react'
import './detailComponnet.css'
import {Link} from 'react-router'
import http from '../../utils/httpClient.js'
import jwt from 'jsonwebtoken'
import animate from 'animate.css'
import filter from '../../../../api/utils/filter.js'
import spinner from '../spinner/SpinnerComponent.js'

export default class DetailComponnet extends React.Component{
    state = {
        data: [],
        like: {},
        spinner: false
    }
    componentWillMount(){
        // this.state.spinner = true;
        http.get('qDetail',{id:this.props.router.params.id}).then(res => {
            this.setState({data: res.data[0]})
            // this.state.spinner = false;
        })
        http.get('qDetail_like',{}).then(res => {
            this.setState({like: res.data[0]})
        })
    }
    applyNow(){
        var userid = window.sessionStorage.getItem('userID')
        // console.log(userid)
        http.get('qApply',{workid:this.props.router.params.id,userid: userid}).then(res => {
            var spinner = document.getElementsByClassName('qspinner')[0];
            spinner.style.display = 'block'
            spinner.className = 'qspinner animated fadeOut'
        })
    }
    scNow(){
        var spinner = document.getElementsByClassName('qsc')[0];
            spinner.style.display = 'block'
            spinner.className = 'qsc animated fadeOut'
    }
    render(){
        return (
            <div id="qDetailBox">
                <spinner></spinner>
                <div className="qspinner">
                    <p>报名成功</p>
                </div>
                <div className="qsc">
                    <p>收藏成功</p>
                </div>
                <header className="qheader">
                    <div className="qheader_l">
                        <Link to="/list" className="qback-detail" ></Link>
                    </div>
                    <p>兼职详情</p>
                </header>
                <div className="qmain">
                    <div className="qjz-lit">
                        <p>{this.state.data.name}</p>
                        <div className="qjz-lit-bot">
                            <span><i></i>{this.state.data.region}</span>
                            <span>{this.state.data.publishtime}</span>
                            <span>999次浏览</span>
                        </div>
                    </div>
                    <div className="qjz-data">
                        <div>
                            <span>结算方式：</span>
                            <p>{this.state.data.payway}</p>
                        </div>
                        <div>
                            <span>基本工资：</span>
                            <p>{this.state.data.salary}元/{this.state.data.salaryunit}</p>
                        </div>
                    </div>
                    <div className="qjz-data qjz-data-2">
                        <div>
                            <span>兼职类型：</span>
                            <p>{this.state.data.type}</p>
                        </div>
                        <div>
                            <span>招聘人数：</span>
                            <p>{this.state.data.wantNum}</p>
                        </div>
                        <div>
                            <span>性别要求：</span>
                            <p>{this.state.data.sex}</p>
                        </div>
                    </div>
                    <div className="qjz-nr">
                        <h6>工作内容</h6>
                        <p className="qjz-nrp">
                            {this.state.data.workContent}
                        </p>
                    </div>
                    <div className="qjz-data qjz-data-3">
                        <div>
                            <span>工作种类：</span>
                            <p>{this.state.data.kind}</p>
                        </div>
                        <div>
                            <span>工作时间：</span>
                            <p>{this.state.data.worktime}</p>
                        </div>
                        <div>
                            <span>上班时段：</span>
                            <p>不限</p>
                        </div>
                    </div>
                    <div className="qjz-data qjz-data-4">
                        <div>
                            <span>发布机构：</span>
                            <p>{this.state.data.organization}</p>
                        </div>
                        <div>
                            <span>详细地址：</span>
                            <p>{this.state.data.locate}</p>
                        </div>
                        <div>
                            <span>联系人：</span>
                            <p>{this.state.data.linkman}</p>
                        </div>
                    </div>
                    <div className="qjz-like">
                        <h6 className="qjz-likeh6">猜你喜欢</h6>
                        <ul>
                            <Link to={{pathname:`/detail/${this.state.like.id}`}}>
                                <li id={this.state.like.id} >
                                    <div className="qlist">
                                        <i>{this.state.like.type}</i>
                                        <p className="qlist_name">{this.state.like.name}</p>
                                        <p className="qlist_time">{this.state.like.region} {this.state.like.worktime}</p>
                                        <div className="qmain_li_bot">{this.state.like.salary}元/{this.state.like.salaryunit}</div>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="qjz-bot">喵，已经拉到底部啦</div>
                </div>
                <footer className="qfooter">
                    <ul>
                        <li className="qcollect" onClick={this.scNow.bind(this)}>
                            <i></i>
                            收藏
                        </li>
                        <li className="qshare">
                            <i></i>
                            分享
                        </li>
                        <li className="qapply" onClick={this.applyNow.bind(this)} >
                            立即报名
                        </li>
                    </ul> 
                </footer>
            </div>
        )
    }
}