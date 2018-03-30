import React,{Component} from 'react'
import $ from 'jquery'
import {Link} from 'react-router'

import './courseApplyList.scss'
import http from '../../../../utils/httpClient'
import Spinner from '../../../spinner/SpinnerComponent'

export default class ApplyListComponnet extends Component{
    state={
        dataset:[],
        rowsCount:0,
        show:false
    }
    componentWillMount(){
        this.courseApplyRefresh();
    }
    courseApplyRefresh(){
        if(this.props.params.id && window.sessionStorage.getItem('xxtoken')){
            this.setState({show:true});
            http.get('MgetCourseApply',{userid:this.props.params.id}).then(res=>{
                this.setState({show:false});
                if(res.status){
                    this.setState({dataset:res.data.data,rowsCount:res.data.rowsCount})
                }
            })
        }
    }
    goToBack(){
        history.go(-1);
    }
    delCourseApply(id){
        http.post('MdelCourseApply',{id}).then(res=>{
            if(res.status) this.courseApplyRefresh();
        })
    }
    render(){
        return(
            <div id="courseApplyList">
                <div className="header">
                    <i className="fa fa-angle-left" onClick={this.goToBack.bind(this)}></i>
                    <h4>报名收藏</h4>
                    <i></i>
                </div>
                <h3 className="total">总记录：{this.state.rowsCount} 条</h3>
                <div className="main">
                    <ul>
                        {
                            this.state.dataset.map((item,idx)=>{
                                return <li key={item.listId} id={item.listId}>
                                    <Link to={'/Video_detail/'+item.id}>
                                        <div className="videoImg">
                                            <img src={item.videoImg} width="280" height="160"/>
                                        </div>
                                        <div className="content">
                                                <div className="title">
                                                    <p>{item.videotitle}</p>
                                                </div>
                                                <div className="price">
                                                    <span>{item.price==0 ? '免费' : item.price+'元'}</span>
                                                </div>
                                                <div className="other">
                                                    <div className="applyNum fl">
                                                        <i className="fa fa-user-o"></i>
                                                        <span>{item.number}人报名</span>
                                                    </div>
                                                    <div className="teacher fr">
                                                        <span>{item.teacher}</span>
                                                    </div>
                                                </div>
                                        </div>
                                    </Link>
                                    <div className="opra" onClick={this.delCourseApply.bind(this,item.listId)}>
                                        <span className="fr">取消报名</span>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <Spinner show={this.state.show}></Spinner>
            </div>
        )
    }
}