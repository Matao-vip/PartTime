import React from 'react'
import './ListComponnet.css'

export default class ListComponnet extends React.Component{
    render(){
        return (
            <div id="qListBox">
                <header className="qheader">
                    <a className="qheader_l">
                        广州<i></i>
                    </a>
                    <div className="qsearch">
                        全部兼职
                    </div>
                </header>
                <div className="qnav">
                    <div className="qnav_item">
                        <span>区域</span>
                        <i></i>
                    </div>
                    <div className="qnav_item">
                        <span>类型</span>
                        <i></i>
                    </div>
                    <div className="qnav_item">
                        <span>排序</span>
                        <i></i>
                    </div>
                </div>
                <div className="qmain">
                    <div className="qmain_list">
                        <ul>
                            <li>                               
                                <a>
                                    <i>其他</i>
                                    <p className="qlist_name">在家可做-手机+WIFI兼职</p>
                                    <p className="qlist_time">天河  02月27日起工作（共28天）</p>
                                    <div className="qmain_li_bot">280元/天</div>
                                </a>
                            </li>
                            <li>                               
                                <a>
                                    <i>其他</i>
                                    <p className="qlist_name">在家可做-手机+WIFI兼职</p>
                                    <p className="qlist_time">天河  02月27日起工作（共28天）</p>
                                    <div className="qmain_li_bot">280元/天</div>
                                </a>
                            </li>
                            <li>                               
                                <a>
                                    <i>其他</i>
                                    <p className="qlist_name">在家可做-手机+WIFI兼职</p>
                                    <p className="qlist_time">天河  02月27日起工作（共28天）</p>
                                    <div className="qmain_li_bot">280元/天</div>
                                </a>
                            </li>
                            <li>                               
                                <a>
                                    <i>其他</i>
                                    <p className="qlist_name">在家可做-手机+WIFI兼职</p>
                                    <p className="qlist_time">天河  02月27日起工作（共28天）</p>
                                    <div className="qmain_li_bot">280元/天</div>
                                </a>
                            </li>
                            <li>                               
                                <a>
                                    <i>其他</i>
                                    <p className="qlist_name">在家可做-手机+WIFI兼职</p>
                                    <p className="qlist_time">天河  02月27日起工作（共28天）</p>
                                    <div className="qmain_li_bot">280元/天</div>
                                </a>
                            </li>
                            <li>                               
                                <a>
                                    <i>其他</i>
                                    <p className="qlist_name">在家可做-手机+WIFI兼职</p>
                                    <p className="qlist_time">天河  02月27日起工作（共28天）</p>
                                    <div className="qmain_li_bot">280元/天</div>
                                </a>
                            </li>
                            <li>                               
                                <a>
                                    <i>其他</i>
                                    <p className="qlist_name">在家可做-手机+WIFI兼职</p>
                                    <p className="qlist_time">天河  02月27日起工作（共28天）</p>
                                    <div className="qmain_li_bot">280元/天</div>
                                </a>
                            </li>
                            <li>                               
                                <a>
                                    <i>其他</i>
                                    <p className="qlist_name">在家可做-手机+WIFI兼职</p>
                                    <p className="qlist_time">天河  02月27日起工作（共28天）</p>
                                    <div className="qmain_li_bot">280元/天</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <footer className="qfooter">
                    <ul>
                        <li><i></i>兼职猫</li>
                        <li><i></i>全部兼职</li>
                        <li><i></i>A猫学堂</li>
                        <li><i></i>喵</li>
                        <li><i></i>个人中心</li>
                    </ul>
                </footer>
            </div>
        )
    }
}