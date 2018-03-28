import React,{Component} from 'react'
import $ from 'jquery'

import './baseMsg.scss'
import http from '../../../utils/httpClient'
import Spinner from '../../spinner/SpinnerComponent'

export default class BasemsgComponnet extends Component{
    state={
        dataset:{},
        baseUrl:http.baseUrl
    }
    componentWillMount(){
        let id = this.props.params.id;
        if(id){
            let msg = JSON.parse(window.sessionStorage.getItem('msg'))[0];
            this.setState({dataset:msg});
        }
    }
    goToBack(){
        history.go(-1);
    }
    render(){
        return(
            <div id="baseMsg">
                <div className="header">
                    <i className="fa fa-angle-left h0" onClick={this.goToBack}></i>
                    <h4 className="h0">基本信息</h4>
                    <span className="save h0">保存</span>
                </div>
                <div className="mainMsg">
                    <ul>
                        <li className="head">
                            <span className="fl">头像</span>
                            <span className="fr">
                                <i className="Ihead"><img src={this.state.baseUrl + this.state.dataset.headImg} width="110" height="110" /></i>
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="nickname">
                            <span className="fl">姓名</span>
                            <span className="fr"><input type="text" defaultValue={this.state.dataset.nickname} /></span>
                        </li>
                        <li className="sex">
                            <span className="fl">性别</span>
                            <span className="fr">
                            <label><input type="radio" name="sex" defaultValue="男"/> 男 </label>
                            <label><input type="radio" name="sex" defaultValue="女"/> 女 </label>
                            </span>
                        </li>
                        <li className="region">
                            <span className="fl">所在城市</span>
                            <span className="fr">
                                <input type="text" defaultValue={this.state.dataset.region}/>
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="age">
                            <span className="fl">年龄</span>
                            <span className="fr">
                                <input type="number" defaultValue={this.state.dataset.age}/> 岁
                            </span>
                        </li>
                        <li className="height">
                            <span className="fl">身高</span>
                            <span className="fr">
                                <input type="text" defaultValue={this.state.dataset.height}/> cm
                            </span>
                        </li>
                        <li className="eduState">
                            <span className="fl">教育状态</span>
                            <span className="fr">
                            <label><input type="radio" name="eduState" defaultValue="在读"/> 在读 </label>
                            <label><input type="radio" name="eduState" defaultValue="已毕业"/> 已毕业 </label>
                            </span>
                        </li>
                        <li className="tel">
                            <span className="fl">手机号</span>
                            <span className="fr">
                                <input type="tel" defaultValue={this.state.dataset.username}/>
                            </span>
                        </li>
                        <li className="email">
                            <span className="fl">邮箱</span>
                            <span className="fr">
                                <input type="email" defaultValue={this.state.dataset.email}/>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
