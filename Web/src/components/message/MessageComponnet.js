import React from 'react'
import './MessageComponnet.css'

export default class MessageComponnet extends React.Component{
    shownav(event){
        if(event.target.className == 'qnews'){
            event.target.className = 'qnews active';
            document.getElementsByClassName('qaddress-list')[0].className = 'qaddress-list'
            document.getElementsByClassName('qnav_news')[0].style.display = 'block'
            document.getElementsByClassName('qnav_addlist')[0].style.display = 'none'
        }else{
            event.target.className = 'qaddress-list active';
            document.getElementsByClassName('qnews')[0].className = 'qnews'
            document.getElementsByClassName('qnav_news')[0].style.display = 'none'
            document.getElementsByClassName('qnav_addlist')[0].style.display = 'block'
        }
    }
    render(){
        return(
            <div id="qMessageBox">
                <header className="qheader">
                    <p>喵</p>
                    <i></i>
                </header>
                <div className="qnav">
                    <p className="qnews" onClick={this.shownav.bind(this)}>消息</p>
                    <p className="qaddress-list" onClick={this.shownav.bind(this)}>通讯录</p>
                </div>
                <div className="qmain">
                    <div className="qnav_news">
                        <div className="qsearch">
                            <input type="text" placeholder="搜索" />
                            <i></i>
                        </div>
                        <div className="qkf">
                            <i></i>
                            <div className="qkf-r">
                                <p className="qkf-name">客服姐姐</p>
                                <p className="qkf-nr">你好，我是客服姐姐。</p>
                            </div>
                        </div>
                    </div>
                    <div className="qnav_addlist">
                        <div className="qsearch">
                            <input type="text" placeholder="搜索" />
                            <i></i>
                        </div>
                        <div className="qfir">
                            <i></i>
                            <div className="qfir-r">
                                <p className="qfir-new">新的朋友</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="qfooter">

                </footer>
            </div>
        ) 
    }
}