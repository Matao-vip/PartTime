import React,{Component} from 'react'
import {Link} from 'react-router'
import './mineMore.scss'
import $ from 'jquery'

export default class MineMoreComponent extends Component{
    exit(){
        window.sessionStorage.removeItem('xxtoken');
        window.sessionStorage.removeItem('userID');
    }
    goToBack(){
        history.go(-1);
    }
    toUpdatePass(e){
        var id = this.props.params.id;
        if(id && id != "undefined" && window.sessionStorage.getItem('xxtoken')){
            return;
        }else{
            this.props.router.push('/login');
            e.preventDefault();
        }
    }
    componentDidMount(){
        var id = this.props.params.id
        if(id && id != "undefined"){
            $(".more_footer a").text('退出当前帐号');
        }else{
            $(".more_footer a").text('登录帐号');
        }
    }
    render(){
        return(
            <div id="mineMore">
                <div className="more_header">
                    <i className="fa fa-mail-reply" onClick={this.goToBack}></i>
                    <h4>更多</h4>
                    <i></i>
                </div>
                <div className="more_body">
                    <ul>
                        <li><i className="fa fa-calendar-minus-o fl"></i><span className="fl">实时获取投递动态</span><i className="right fr">&gt;</i></li>
                        <li><Link to={"/mine/mineMore/updatePass/"+this.props.params.id} className="clfix" onClick={this.toUpdatePass.bind(this)}><i className="fa fa-key fl"></i><span className="fl">设置密码</span><i className="right fr">&gt;</i></Link></li>
                        <li><i className="fa fa-file-video-o fl"></i><span className="fl">操作指引</span><i className="right fr">&gt;</i></li>
                        <li><i className="fa fa-code-fork fl"></i><span className="fl">新版本检测</span><i className="right fr">&gt;</i></li>
                        <li><i className="fa fa-info-circle fl"></i><span className="fl">关于我们</span><i className="right fr">&gt;</i></li>
                        <li><i className="fa fa-trash-o fl"></i><span className="fl">清理缓存</span><i className="right fr">&gt;</i></li>
                        <li><i className="fa fa-building-o fl"></i><span className="fl">企业入口</span><i className="right fr">&gt;</i></li>
                        <li><i className="fa fa-sliders fl"></i><span className="fl">设置</span><i className="right fr">&gt;</i></li>
                    </ul>
                </div>
                <div className="more_footer">
                    <Link to="/login" onClick={this.exit.bind(this)}></Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}