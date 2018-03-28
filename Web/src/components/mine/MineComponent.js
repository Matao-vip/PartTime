import React,{Component} from 'react'
import './Mine.scss'
import * as actions from './MineActions.js'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import http from '../../utils/httpClient.js'
import $ from 'jquery'

import Spinner from '../spinner/SpinnerComponent'
import FootComponent from '../foot/FootComponent'

class MineComponnet extends Component{
    state={
        baseUrl:http.baseUrl,
        headImg:'temp/unlogin.jpg',
        nickname:'亲，你还没登录哦'
    }
    componentWillMount(){
        if(this.props.params.id){
            let config = {
                type:'getMine',
                url:'Mgetuser',
                method:'get',
                data:{id:this.props.params.id}
            }
            this.props.MineRefresh(config);
        }
    }
    componentDidMount(){
        $("#Mine .footer ul li").last().addClass('active');
    }
    toBaseMsg(e){
        if(!this.props.params.id){
            this.props.router.push('/login');
            e.preventDefault();
        }else{
            var msg=JSON.stringify(this.props.dataset.dataset);
            window.sessionStorage.setItem('msg',msg);
        }
    }
    render(){
        let ds = this.props.dataset;
        let name = this.props.config ? (this.props.config.name || null) : null
        if(name){
            ds = ds[name] ? ds[name].dataset : [{headImg:this.state.headImg,nickname:this.state.nickname}]
        }else{
            ds = ds.dataset || [{headImg:this.state.headImg,nickname:this.state.nickname}];
        }
        return (
            <div id="Mine">
                <Spinner show={this.props.show}></Spinner>
                <div className="header">
                    <div className="shade"></div>
                    <h3>个人中心</h3>
                </div>
                <div className="body">
                    <div className="body1">
                        <div className="body1_head">
                            <Link to={'/mine/baseMsg/'+this.props.params.id} className="clfix" onClick={this.toBaseMsg.bind(this)}>
                                <i className="Myhead fl"><img src={this.state.baseUrl + (ds[0].headImg || this.state.headImg)} width="110" height="110"/></i>
                                <span className="Myname fl">{ds[0].nickname || this.state.nickname}</span>
                                <i className="fa fa-arrow-circle-right fr"></i>
                            </Link>
                        </div>
                        <div className="body1_wal">
                            <div className="left">
                                <i className="fa fa-credit-card"></i>
                                <span>我的钱包</span>
                            </div>
                            <div className="right">
                                <i className="fa fa-university"></i>
                                <span>我的兼职保险</span>
                            </div>
                        </div>
                    </div>
                    <div className="body2">
                        <div className="title">
                            <h4>我的申请</h4>
                        </div>
                        <div className="applyList">
                            <ul>
                                <li><i className="fa fa-file-text-o"></i><span>已报名</span></li>
                                <li><i className="fa fa-calendar-check-o"></i><span>已录用</span></li>
                                <li><i className="fa fa-check-circle-o"></i><span>已到岗</span></li>
                                <li><i className="fa fa-handshake-o"></i><span>已结算</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="body3">
                        <ul>
                            <li><i className="fa fa-graduation-cap fl"></i><span className="fl">A猫学堂</span><i className="right fr">&gt;</i></li>
                            <li><i className="fa fa-address-book fl"></i><span className="fl">我的简历</span><i className="right fr">&gt;</i></li>
                            <li><i className="fa fa-get-pocket fl"></i><span className="fl">我的社保</span><i className="right fr">&gt;</i></li>
                            <li><i className="fa fa-star-o fl"></i><span className="fl">兼职收藏</span><i className="right fr">&gt;</i></li>
                            <li><i className="fa fa-commenting-o fl"></i><span className="fl">意见反馈</span><i className="right fr">&gt;</i></li>
                            <li><i className="fa fa-ellipsis-h fl"></i><span className="fl">更多</span><i className="right fr">&gt;</i></li>
                        </ul>
                    </div>
                </div>
                <FootComponent/>
                {this.props.children}
            </div>
        )
    }
}

var mapStateToProps = state=>{
    return{
        dataset:state.mine,
        show:state.mine.show,
        error:state.datagrid.error
    }
}

export default connect(mapStateToProps,actions)(MineComponnet)