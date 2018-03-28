import React,{Component} from 'react'
import "./Reg.scss"
import {connect} from 'react-redux'
import * as actions from './RegActions.js'
import http from '../../../utils/httpClient'
import $ from 'jquery'

import Spinner from '../../spinner/SpinnerComponent'

class RegComponent extends Component{
    state={
        telSuccess:false,
        passSuccess:false,
        repassSuccess:false,
        show:false
    }
    goToBack(){
        history.go(-1);
    }
    disapperHint(){
        var count = 2;
        var timer=setInterval(function(){
            count--;
            if(count<=0){
                $('#hint').hide();
                clearInterval(timer);
            }
        },1000)
    }
    createCode(){
        var arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
        var vcode='';
        for(var i=0;i<4;i++){
            vcode += arr[parseInt(Math.random()*arr.length)]
        }
        return vcode;
    }
    // 用户名验证
    userExist(e){
        if(!/^1[358][\d]{9}$/.test(e.target.value)){
            $(this.refs.hint).show().text('手机格式错误!')
            this.disapperHint();
        }else{
            http.post("Mlogin",{username:e.target.value}).then(result=>{
                if(result.status){
                    $(this.refs.hint).show().text('该账户已注册!')
                    this.disapperHint();
                }else{
                    this.setState({telSuccess:true})
                }
            })
        }
    }
    // 获取验证码
    receiveCode(e){
        $(e.target).html(this.createCode);
    }
    // 密码验证
    passV(e){
        if(!/^[\w]{6,20}$/.test(e.target.value)){
            $(this.refs.hint).show().text('密码格式错误！')
            this.disapperHint();
        }else{
            this.setState({passSuccess:true})
        }
    }
    // 确认密码验证
    repassV(e){
        if(e.target.value !== $('#pass').val()){
            $(this.refs.hint).show().text('两次密码输入不一致！')
            this.disapperHint();
        }else{
            this.setState({repassSuccess:true})
        }
    }
    // 提交验证
    submit(){
        if(!this.state.telSuccess){
            $(this.refs.hint).show().text('手机格式错误')
            this.disapperHint();
        }else if($("#vCode").val().toLowerCase() != $('.receiveCode').text().toLowerCase()){
            $(this.refs.hint).show().text('验证码输入错误！')
            this.disapperHint();
        }else if(!this.state.passSuccess){
            $(this.refs.hint).show().text('密码格式错误！')
            this.disapperHint();
        }else if(!this.state.repassSuccess){
            $(this.refs.hint).show().text('两次密码输入不一致！')
            this.disapperHint();
        }else if(!$('#agree')[0].checked){
            $(this.refs.hint).show().text('请勾选同意用户协议！')
            this.disapperHint();
        }else{
            this.setState({show:true});
            http.post('Mreg',{username:$('#tel').val(),password:$('#pass').val()}).then(result=>{
                this.setState({show:false});
                if(result.status){
                    $(this.refs.hint).show().text('注册成功！')
                    var count = 2;
                    var timer=setInterval(()=>{
                        count--;
                        if(count<=0){
                            $('#hint').hide();
                            clearInterval(timer);
                            this.props.router.push('/login');
                        }
                    },1000)
                }
            })
        }
    }
    render(){
        return(
            <div id="Mreg">
                <div className="header">
                    <i className="fa fa-mail-reply" onClick={this.goToBack}></i>
                    <h4>注册</h4>
                </div>
                <div className="body">
                    <ul className="list-block">              
                        <li>
                            <label htmlFor="tel">手机</label>
                            <input type="text" id="tel" placeholder="请输入手机号" onBlur={this.userExist.bind(this)}/><span className="receiveCode" onClick={this.receiveCode.bind(this)}>获取验证码</span>
                        </li>
                        <li><label htmlFor="vCode">验证码</label><input type="text" id="vCode" placeholder="请输入验证码"/></li>
                        <li><label htmlFor="pass">密码</label><input type="password" id="pass" placeholder="6-20位数字或字母" onBlur={this.passV.bind(this)}/></li>
                        <li><label htmlFor="repass">确认密码</label><input type="password" id="repass" placeholder="请再次输入密码" onBlur={this.repassV.bind(this)}/></li>
                    </ul>
                    <div className="inviteCode">
                        <label htmlFor="inviteCode">邀请码</label><input type="text" id="inviteCode" placeholder="请输入邀请码（可不填）"/>
                    </div>
                    <div className="agree">
                        <label><input type="checkbox" id="agree"/>我已阅读并同意 <a href="javascript:">兼职喵用户协议</a></label>
                    </div>
                    <button className="submit" onClick={this.submit.bind(this)}>注册</button>
                </div>
                <span className="hint locate" ref="hint" id="hint"></span>
                <Spinner show={this.state.show}/>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        dataset:state.Reg.dataset,
        show:state.Reg.show
    }
}

export default connect(mapStateToProps,actions)(RegComponent)