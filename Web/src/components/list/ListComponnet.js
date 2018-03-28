import React from 'react'
import './ListComponnet.css'
import http from '../../utils/httpClient.js'
import { Link } from 'react-router';
import spinner from '../spinner/SpinnerComponent.js'

export default class ListComponnet extends React.Component{
    state = {
        data: [],
        total: 1,
        spinner: false,
        shade: false,
        showarea: false,
        showtype: false,
        showsort: false,
        selepx: true,
        area: ['天河','黄埔','番禺','白云','荔湾','增城','越秀','花都','海珠','从化','南沙','萝岗'],
        type: ['调研','送餐员','促销','礼仪','安保','销售','服务员','临时工','校内','设计','文员','派单','模特','实习','家教','演出','客服','翻译','其他']
    }
    componentWillMount(){
        this.state.spinner = true;
        http.get('qList',{}).then(res=>{
            this.setState({data: res.data.data})
            this.setState({total: res.data.rowsCount})
            this.state.spinner = false;
        })
    }
    showItem(event){
        var arrItem = document.getElementsByClassName('qnav_item')
        for(var i=0;i<arrItem.length;i++){
            arrItem[i].className = 'qnav_item'
        }
        event.target.parentNode.className = 'qnav_item active'
    }
    showArea(){
        this.setState({showarea:!this.state.showarea});
        this.setState({showtype:false});
        this.setState({showsort:false}); 
        this.setState({shade: !this.state.showarea})
    }
    showType(){
        this.setState({showarea:false});
        this.setState({showtype:!this.state.showtype});
        this.setState({showsort:false}); 
        this.setState({shade: !this.state.showtype})
    }
    showSort(){
        this.setState({showarea:false});
        this.setState({showtype:false});
        this.setState({showsort:!this.state.showsort});
        this.setState({shade: !this.state.showsort}) 
    }
    seleArea(name){
        http.get('qSeleArea',{region:`"${name}"`}).then(res=>{
            this.setState({data: res.data.data})
            this.setState({total: res.data.rowsCount})
            this.setState({showarea:!this.state.showarea});
            this.setState({shade: false})
        })
    }
    seleType(name){
        http.get('qSeleType',{type:`"${name}"`}).then(res=>{
            this.setState({data: res.data.data})
            this.setState({total: res.data.rowsCount})
            this.setState({showtype:!this.state.showtype});
            this.setState({shade: false});
        })
    }
    seleAll(){
        http.get('qList',{}).then(res=>{
            this.setState({data: res.data.data})
            this.setState({total: res.data.rowsCount})
            this.setState({showarea:false});
            this.setState({showtype:false});
            this.setState({showsort:false});
            this.setState({shade: false})
        })
    }
    seleAsc(){
        http.get('qSalaryAsc',{}).then(res => {
            this.setState({data: res.data.data})
            this.setState({total: res.data.rowsCount})
            this.setState({showarea:false});
            this.setState({showtype:false});
            this.setState({showsort:false});
            this.setState({shade: false})
        })
    }
    seleDesc(){
        http.get('qSalaryDesc',{}).then(res => {
            this.setState({data: res.data.data})
            this.setState({total: res.data.rowsCount})
            this.setState({showarea:false});
            this.setState({showtype:false});
            this.setState({showsort:false});
            this.setState({shade: false})
        })
    }
    seleNew(){
        http.get('qSeleNew',{}).then(res => {
            this.setState({data: res.data.data})
            this.setState({total: res.data.rowsCount})
            this.setState({showarea:false});
            this.setState({showtype:false});
            this.setState({showsort:false});
            this.setState({shade: false})
        })
    }
    selePx(){
        this.setState({selepx: !this.state.selepx})
        console.log(this.state.selepx)
    }

    render(){    

        var area =  <ul className="qarea-list">
                        <p>
                            <a onClick={this.seleAll.bind(this)}>全部</a>
                        </p>
                        {
                            this.state.area.map(item => {
                                return  <li key={Math.random()}>
                                            <a onClick={this.seleArea.bind(this,item)}>{item}</a>
                                        </li>
                            })
                        }
                    </ul>
        var type =  <ul className="qarea-list">
                        <p>
                            <a onClick={this.seleAll.bind(this)}>全部</a>
                        </p>
                        {
                            this.state.type.map(item => {
                                return  <li key={Math.random()}>
                                            <a onClick={this.seleType.bind(this,item)}>{item}</a>
                                        </li>
                            })
                        }
                    </ul>
        var sort =  <ul className="qarea-list">
                        <li>
                            <a onClick={this.seleAll.bind(this)}>综合排序</a>
                        </li>
                        <li onClick={this.selePx.bind(this)}>
                            <a onClick={this.state.selepx ? this.seleAsc.bind(this):this.seleDesc.bind(this)}>薪资排序</a>
                        </li>
                        <li>
                            <a onClick={this.seleNew.bind(this)}>最新发布</a>
                        </li>
                    </ul>
        var shade = <div className="spinner"></div>
        return (
            <div id="qListBox">
                <spinner></spinner>
                <header className="qheader">
                    <a className="qheader_l">
                        广州<i></i>
                    </a>
                    <div className="qsearch">
                        全部兼职
                    </div>
                </header>
                <div className="qnav">
                    <div className="qnav_item" id="qarea" onClick={this.showItem.bind(this)}>
                        <span onClick={this.showArea.bind(this)} >区域</span>
                    </div>
                    <div className="qnav_item" id="qtype" onClick={this.showItem.bind(this)}>
                        <span onClick={this.showType.bind(this)}>类型</span>
                    </div>
                    <div className="qnav_item" id="qsort" onClick={this.showItem.bind(this)}>
                        <span onClick={this.showSort.bind(this)}>排序</span>
                    </div>
                    {this.state.showarea ? area : null}
                    {this.state.showtype ? type : null}
                    {this.state.showsort ? sort : null}                  
                </div>
                <div className="qmain">
                    <div className="qmain_list">
                        <ul>
                            {
                                this.state.data.map(item => {
                                    return  <Link to={{pathname:`/detail/${item.id}`}} key={Math.random()}  >
                                                <li id={item.id} >
                                                    <div className="qlist">
                                                        <i>{item.type}</i>
                                                        <p className="qlist_name">{item.name}</p>
                                                        <p className="qlist_time">{item.region} {item.worktime}</p>
                                                        <div className="qmain_li_bot">{item.salary}元/{item.salaryunit}</div>
                                                    </div>
                                                </li>
                                            </Link>
                                })
                            }
                        </ul>
                        {this.state.shade ? shade :null}
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