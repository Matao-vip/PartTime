import React from 'react'
import {Route,ReactDome,hashHistory}from 'react-dom'
import './Login.scss'
import http from '../../utils/httpclient.js'

export default class LoginComponnet extends React.Component{
    state={
        _yzm:''
    }
    componentWillMount(){
       this.vCode() 
    }
    vCode(){
      var arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
      var vcode='';
      for(var i=0;i<4;i++){
          vcode += arr[parseInt(Math.random()*arr.length)]
      }
      this.setState({
        _yzm:vcode.toLowerCase()
      })
    }
    login() {
        var _errortd = this.refs.user;
        var _user = this.refs.user.value;
        var _pwd = this.refs.pwd.value;
        var _yzm1 = this.refs.yzm.value.toLowerCase();

        http.get('adminlogin',{username:_user,password:_pwd}).then(res=>{
          if(res.status==true && _yzm1==this.state._yzm){
            window.sessionStorage.setItem('username',_user);
            this.props.router.push('/');
          }else{
            alert('登录信息有误')
          }
        }) 

      }
    login_reset(){
        this.refs.user.value="";
        this.refs.pwd.value="";
        this.refs.yzm.value="";
        this.refs.user.focus();  
    }

    render(){
        return (
            <div id="logining">
               <div id="adminlogin">
                   <div className="superlogin"></div>
                   <div className="loginBox locate">
                       <div className="logo"><img src=""/></div>
                       <h1>兼职喵后台管理系统</h1>
                       <div className="loginMain">
                           <table  cellSpacing="0" cellPadding="0">
                           <tbody>
                               <tr>
                                   <td className="title">用户名：</td>
                                   <td><input type="text" className="form-control txt" ref="user"/></td>
                               </tr>
                               <tr>
                                   <td className="title">密   码：</td>
                                   <td><input type="password" className="form-control txt" ref="pwd"/></td>
                               </tr>
                               <tr>
                                   <td className="title">验证码：</td>
                                   <td><input type="text" className="form-control txt txt2" ref="yzm"/><span className="yzm" onClick={this.vCode.bind(this)}>{this.state._yzm}</span></td>
                               </tr>
                               <tr className="errortd" ref="errortd">
                                   <td>&nbsp;</td>
                                   <td><i className="ico-error"></i><span className="errorword"></span></td>
                               </tr>        
                               <tr className="opt">
                                   <td>&nbsp;</td>
                                   <td><button id="btnlogin"  onClick={this.login.bind(this)}>登录</button><button id="btnreset" onClick={this.login_reset.bind(this)}>重置</button></td>
                               </tr>        
                               <tr className="forget">
                                   <td>&nbsp;</td><td className="forgetpsw"><a className="fr">忘记密码？</a></td>
                               </tr> 
                               </tbody>  
                           </table>

                           <div className="footer">Copyright &copy; 2018-2019 part-time job  All Rights Reserved</div>
                       </div>
                   </div>
               </div>

            </div>
        )
    }
}