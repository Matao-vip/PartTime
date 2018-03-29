import React,{Component} from 'react'
import {Link} from 'react-router'
import './UpdatePass.scss'
import $ from 'jquery'
import http from '../../../../utils/httpClient'

export default class UpdatePassComponent extends Component{
    disapperHint(cb){
        var count = 2;
        var timer=setInterval(function(){
            count--;
            if(count<=0){
                $('#hint').hide();
                clearInterval(timer);
                if(cb) cb();
            }
        },1000)
    }
    submit(){
        var oldpass = $('#oldpass').val();
        var newpass = $('#newpass').val();
        var repass = $('#repass').val();
        var regexp = new RegExp('^[\\w]{6,20}$')
        if(!regexp.test(oldpass)){
            $('#hint').show().text('旧密码格式错误!');
            this.disapperHint();
        }else if(!regexp.test(newpass)){
            $('#hint').show().text('新密码格式错误!');
            this.disapperHint();
        }else if(newpass == oldpass){
            $('#hint').show().text('新密码与旧密码一致!');
            this.disapperHint();
        }else if(repass != newpass){
            $('#hint').show().text('两次密码输入不一致!');
            this.disapperHint();
        }else{
            http.post('vPsss',{id:this.props.params.id,password:oldpass,newpass}).then(res=>{
                if(res.status){
                    $('#hint').show().text('修改成功,请重新登录');
                    window.sessionStorage.removeItem('xxtoken');
                    window.sessionStorage.removeItem('userID');
                    this.disapperHint(()=>{
                        this.props.router.push('/login');
                    });
                }else{
                    $('#hint').show().text('旧密码不正确!');
                    this.disapperHint();
                }
            })
        }
    }
    goToBack(){
        history.go(-1);
    }
    render(){
        return(
            <div id="updatePass">
                <div className="update_header">
                    <i className="fa fa-mail-reply" onClick={this.goToBack}></i>
                    <h4>修改密码</h4>
                    <i></i>
                </div>
                <div className="update_body">
                    <ul>
                        <li><label htmlFor="oldpass">旧密码</label><input type="password" id="oldpass" placeholder="请输入旧密码" /></li>
                        <li><label htmlFor="newpass">新密码</label><input type="password" id="newpass" placeholder="6-20位数字或字母" /></li>
                        <li><label htmlFor="repass">确认密码</label><input type="password" id="repass" placeholder="请再次输入新密码"/></li>
                    </ul>
                </div>
                <button onClick={this.submit.bind(this)} className="submit">提交</button>
                <span className="hint locate" id="hint"></span>
            </div>
        )
    }
}