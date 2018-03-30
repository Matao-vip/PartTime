import React,{Component} from 'react'
import $ from 'jquery'
import {Link} from 'react-router'

import './applyList.scss'
import http from '../../../utils/httpClient'
import Spinner from '../../spinner/SpinnerComponent'

export default class ApplyListComponnet extends Component{
    state={
        dataset:[],
        rowsCount:0,
        show:false
    }
    componentWillMount(){
        this.applyRefresh();
    }
    applyRefresh(){
        if(this.props.params.id && window.sessionStorage.getItem('xxtoken')){
            this.setState({show:true});
            http.get('MgetApply',{username_id:this.props.params.id}).then(res=>{
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
    delApply(id){
        http.post('Mdelapply',{id}).then(res=>{
            if(res.status) this.applyRefresh();
        })
    }
    render(){
        return(
            <div id="applyList">
                <div className="header">
                    <i className="fa fa-angle-left" onClick={this.goToBack.bind(this)}></i>
                    <h4>我的申请</h4>
                    <i></i>
                </div>
                <h3 className="total">总记录：{this.state.rowsCount} 条</h3>
                <div className="main">
                    <ul>
                        {
                            this.state.dataset.map((item,idx)=>{
                                return <li key={item.listId} id={item.listId}>
                                    <div className="type"><i className="type">{item.type}</i></div>
                                    <div className="content">
                                        <Link to={'/detail/'+item.id}>
                                            <div className="title"><p>{item.name}</p></div>
                                            <div className="other">
                                                <div className="Region">
                                                    <i className="fa fa-map-marker"></i>
                                                    <span className="region">{item.region}</span>
                                                </div>
                                                <div className="Applytime">
                                                    <i className="fa fa-clock-o"></i>
                                                    <span className="applytime">{item.applytime.split(' ')[0]}</span>
                                                </div>
                                                <div className="Salary">
                                                    <i className="fa">￥</i>
                                                    <span className="salary">{item.salary}元/{item.salaryunit}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="opra" onClick={this.delApply.bind(this,item.listId)}>
                                        <i className="fa fa-trash-o"></i>
                                        <span>删除</span>
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