import React,{Component} from "react"
import {Link} from 'react-router'
import './Login.scss'

import $ from 'jquery'
import http from '../../../utils/httpClient'
import Spinner from '../../spinner/SpinnerComponent'


class LoginComponent extends Component{
    state={
        showSpinner:false
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
    login(){
        if($('#tel').val() == '' || $('#pass').val() == ''){
            $('#hint').show().html('帐号或密码不能为空')
            this.disapperHint();
        }else{
            this.setState({showSpinner:true});
            http.post('Mlogin',{username:$('#tel').val(),password:$('#pass').val()}).then(res=>{
                this.setState({showSpinner:false});
                if(res.status){
                    window.sessionStorage.setItem('xxtoken',res.data.token);
                    window.sessionStorage.setItem('userID',res.data.id);
                    $('#hint').show().html('登录成功！')
                    var count = 2;
                    var timer=setInterval(()=>{
                        count--;
                        if(count<=0){
                            $('#hint').hide();
                            clearInterval(timer);
                            this.props.router.push(`/mine/${res.data.id}`);
                        }
                    },600)
                }else{
                    $('#hint').show().html('帐号或密码错误!')
                    this.disapperHint();
                }
            })
        }
    }
    render(){
        return(
            <div id="Mlogin">
                <Spinner show={this.state.showSpinner}/>
                <div className="header">
                    <div><i className="fa fa-mail-reply" onClick={this.goToBack}></i></div>
                    <div className="title"><h4>帐号登录</h4></div>
                    <div><Link to="/reg">注册</Link></div>
                </div>
                <ul className="list-block">
                    <li>
                        <label htmlFor="tel">帐号</label><input type="text" placeholder="请输入手机号码" id="tel"/>
                    </li>
                    <li>
                        <label htmlFor="pass">密码</label><input type="password" placeholder="请输入密码" id="pass"/><span>忘记密码？</span>
                    </li>
                </ul>
                <button className="submit" onClick={this.login.bind(this)}>登录</button>
                <p className="vCodeLogin">验证码登录</p>
                <span className="hint locate" id="hint"></span>
            </div>
        )
    }
}

export default LoginComponent