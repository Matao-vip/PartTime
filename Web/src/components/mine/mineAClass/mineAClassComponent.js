import React,{Component} from 'react'
import {Link} from 'react-router'
import './mineAClass.scss'
import $ from 'jquery'

export default class MineAClassComponent extends Component{
    goToBack(){
        history.go(-1);
    }
    componentDidMount(){
        var id = this.props.params.id
    }
    render(){
        return(
            <div id="mineAClass">
                <div className="class_header">
                    <i className="fa fa-mail-reply" onClick={this.goToBack}></i>
                    <h4>A猫学堂</h4>
                    <i></i>
                </div>
                <div className="class_body">
                    <ul>
                        <li><i className="fa fa-pencil-square-o fl"></i><span className="fl">课程定制</span><i className="right fr">&gt;</i></li>
                        <li><i className="fa fa-download fl"></i><span className="fl">离线缓存</span><i className="right fr">&gt;</i></li>
                        <li><Link to={"/mine/mineAclass/courseApply/"+this.props.params.id} className="clfix"><i className="fa fa-stack-overflow fl"></i><span className="fl">报名收藏</span><i className="right fr">&gt;</i></Link></li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}