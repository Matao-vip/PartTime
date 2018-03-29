import React from 'react'
import ReactDOM from 'react-dom'
import './index_footer.scss'


export default class Index_footer extends React.Component{
    render(){
        return(
            <div id="index_footer">
                <footer><p className="link"><a href="" id="public">发布兼职</a> | <a href="" className="external">下载兼职猫</a> | <a href="/">回到首页</a></p> <p>广州九尾信息科技有限公司所有</p> <p>粤ICP备13061591号</p></footer>
                {this.props.children}
            </div>
        ) 
    }
}