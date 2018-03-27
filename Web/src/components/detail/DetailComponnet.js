import React from 'react'
import './detailComponnet.css'

export default class DetailComponnet extends React.Component{
    render(){
        return (
            <div id="qDetailBox">
                <header className="qheader">
                    <div className="qheader_l">
                        <i></i>
                    </div>
                    <p>兼职详情</p>
                    <div className="qheader_r">
                        <i></i>
                    </div>
                </header>
                <div className="qmain">
                    <div className="qjz-lit">
                        <p>纯线上兼职-调查问卷</p>
                        <div className="qjz-lit-bot">
                            <span><i></i>天河</span>
                            <span>刚刚</span>
                            <span>999次浏览</span>
                        </div>
                    </div>
                    <div className="qjz-data">
                        <div>
                            <span>结算方式：</span>
                            <p>按工资结算</p>
                        </div>
                        <div>
                            <span>基本工资：</span>
                            <p>200元/天</p>
                        </div>
                    </div>
                    <div className="qjz-data qjz-data-2">
                        <div>
                            <span>兼职类型：</span>
                            <p>其他</p>
                        </div>
                        <div>
                            <span>招聘人数：</span>
                            <p>999人</p>
                        </div>
                        <div>
                            <span>性别要求：</span>
                            <p>不限</p>
                        </div>
                    </div>
                    <div className="qjz-nr">
                        <h6>工作内容</h6>
                        <p>
                        特效提醒：本兼职纯网上兼职，兼职猫已认证，不需要缴纳任何的费用，只需要点击下方链接、注册成功后，就可以进行问卷调查，完成问卷后即可得到佣金，做越多，得到的佣金越多。也可以复制链接到浏览器上做哦！

                        工作内容：

                        集思网是一个在线问卷调研平台，需要您通过完成在线商业问卷来赚取奖励。奖励包括支付宝现金和手机充值卡等。完成的问卷越多，可以赚取的奖励越多！

                        完成在线问卷，没有时间和地点的限制，您可以在任何地方通过电脑、iPad或者手机登陆集思网账户参与问卷。只要是18以上的用户，均可以通过以下方式参与集思网的问卷兼职。
                        </p>
                    </div>
                    <div className="qjz-data qjz-data-3">
                        <div>
                            <span>工作种类：</span>
                            <p>其他</p>
                        </div>
                        <div>
                            <span>工作时间：</span>
                            <p>999人</p>
                        </div>
                        <div>
                            <span>上班时段：</span>
                            <p>不限</p>
                        </div>
                    </div>
                    <div className="qjz-data qjz-data-4">
                        <div>
                            <span>发布机构：</span>
                            <p>艾斯艾国际市场调查咨询（北京）有限公司</p>
                        </div>
                        <div>
                            <span>详细地址：</span>
                            <p>广东广州天河全国都可以</p>
                        </div>
                        <div>
                            <span>联系人：</span>
                            <p>卢本伟</p>
                        </div>
                    </div>
                    <div className="qjz-like"></div>
                </div>
                <footer className="qfooter">
                    <ul>
                        <li className="qcollect">
                            <i></i>
                            收藏
                        </li>
                        <li className="qshare">
                            <i></i>
                            分享
                        </li>
                        <li className="qapply">
                            立即报名
                        </li>
                    </ul> 
                </footer>
            </div>
        )
    }
}