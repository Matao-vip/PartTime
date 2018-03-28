import React,{Component} from 'react'
import $ from 'jquery'

import './baseMsg.scss'
import http from '../../../utils/httpClient'
import Spinner from '../../spinner/SpinnerComponent'
import ChangeImgComponent from '../changeImg/ChangeImgComponent'

export default class BasemsgComponnet extends Component{
    state={
        dataset:{},
        baseUrl:http.baseUrl,
        showImg:false,
        headImg:null
    }
    componentWillMount(){
        let id = this.props.params.id;
        if(id){
            let msg = JSON.parse(window.sessionStorage.getItem('MarcoMsg'))[0];
            this.setState({dataset:msg});
            this.setState({headImg:msg.headImg})
        }
    }
    componentDidMount(){
        $(`input[value="${this.state.dataset.sex}"]`).prop('checked',true)
        $(`input[value="${this.state.dataset.eduState}"]`).prop('checked',true)
    }
    goToBack(){
        window.sessionStorage.removeItem('MarcoMsg');
        history.go(-1);
    }
    changeMsg(){
        var $mainMsg=$('#baseMsg .mainMsg');
        var sex,eduState;
        // 性别单选框取值
        $mainMsg.find('.sex input[name="sex"]').each((idx,item)=>{
            if(item.checked){
                sex=item.value;
            }
        })
        // 教育状态单选框取值
        $mainMsg.find('.eduState input[name="eduState"]').each((idx,item)=>{
            if(item.checked){
                eduState=item.value;
            }
        })
        var newMsg={
            id:this.props.params.id,
            username:$mainMsg.find('.tel input').val(),
            nickname:$mainMsg.find('.nickname input').val(),
            sex,
            birth:$mainMsg.find('.birth input').val(),
            height:$mainMsg.find('.height input').val()*1,
            region:$mainMsg.find('.region input').val(),
            eduState,
            email:$mainMsg.find('.email input').val()
        }
        http.post('MchangeMsg',newMsg).then(res=>{
            if(res.status){
                window.sessionStorage.removeItem('MarcoMsg');
                this.props.router.push(`/mine/${this.props.params.id}`)
            }
        })
    }
    showImgComponent(){
        this.setState({showImg:true});
    }
    hideImgComponent(e,data){
        this.setState({showImg:false});
        if(data){
            this.setState({headImg:data})
        }
    }
    render(){
        return(
            <div id="baseMsg">
                <div className="header">
                    <i className="fa fa-angle-left h0" onClick={this.goToBack}></i>
                    <h4 className="h0">基本信息</h4>
                    <span className="save h0" onClick={this.changeMsg.bind(this)}>保存</span>
                </div>
                <div className="mainMsg">
                    <ul>
                        <li className="head">
                            <span className="fl">头像</span>
                            <span className="fr" onClick={this.showImgComponent.bind(this)}>
                                <i className="Ihead"><img src={this.state.baseUrl + this.state.headImg} width="110" height="110" /></i>
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
                        <li className="birth">
                            <span className="fl">生日</span>
                            <span className="fr">
                                <input type="date" defaultValue={this.state.dataset.birth}/> 
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
                <ChangeImgComponent showImg={this.state.showImg} hideImg={this.hideImgComponent.bind(this)} userid={this.props.params.id}/>
            </div>
        )
    }
}
