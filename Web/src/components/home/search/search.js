import React from 'react'
import './search.scss'
import { Link } from 'react-router'
import http from '../../../utils/httpClient.js'
import Navfooter from '../nav/index_nav.js'
import $ from 'jquery'
export default class Index_search extends React.Component{
    state = {
            dataset:[]
    }
    searchStart(){
        var searchValue = this.refs.searchname.value;
        // console.log(searchValue)
        if(searchValue ==''){
            console.log(666)
            $('.kong').css({'display':'block'});
            $('.kong1').css({'display':'block'});
            $('.list-container').css({'display':'none'})
        }
        else{
            $('.kong').css({'display':'none'})
            $('.kong1').css({'display':'none'});
            $('.list-container').css({'display':'block'})
            http.get('searchgoods',{sqlname:searchValue}).then(res=>{
                var data = res.data.data;           
                this.setState({
                   dataset : data
                })         
                if(this.state.dataset.length == 0){
                    $('.kong').css({'display':'block'});
                    $('.kong1').css({'display':'block'});
                    console.log(this.state.dataset)
                }
            })
        }
       
    }
    searchLL(e){
        var searchTJ = e.target.innerText;
        $('.kong1').css({'display':'none'});
        $('.kong').css({'display':'none'})

         http.get('searchgoods',{sqlname:searchTJ}).then(res=>{
                var data = res.data.data;           
                this.setState({
                   dataset : data
                })
            })       
    }
    blacklast(){
        history.go(-1);
    }
    render(){
        return(
            <div id="searchbox">
                  <div id="search_header">
                        <header id="listHeader" className="bar bar-nav">
                        <div className="black" onClick={this.blacklast.bind(this)}></div>
                        <div className="header_c header_s">
                            <i className="icon-search"></i> 
                            <input type="text" id="listSearch" placeholder="你好" ref='searchname'/>
                        </div>
                        <div className="searchOn"><span onClick={this.searchStart.bind(this)}>搜索</span></div>
                        </header>
                  </div>
                  <div className="search_body seacrh_block">
                        <ul  className="list-container">
                            {
                                this.state.dataset.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <Link to={`/detail/${item.id}`}>
                                                <i  className="type"  ref="t_i" >
                                                    {item.type}
                                                </i>
                                                <h2  className="tit">{item.name}<i className="hot_img" ></i>
                                                </h2>
                                                <p  className="dec">{item.region}&nbsp;&nbsp;{item.worktime}</p>
                                                <div  className="bottom clearfix">
                                                    <div  className="money">{item.salary}元/{item.salaryunit}</div>
                                                    <div  className="time">{item.publishtime}</div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="kong" ref="kong">
                            <h3>没有找到你要搜索的信息</h3>
                        </div>
                        <div className="kong1">
                            <span onClick={this.searchLL.bind(this)}>实习</span>
                            <span onClick={this.searchLL.bind(this)}>其他</span>
                            <span onClick={this.searchLL.bind(this)}>派单</span>
                            <span onClick={this.searchLL.bind(this)}>校内</span>
                            <span onClick={this.searchLL.bind(this)}>客服</span>
                            <span onClick={this.searchLL.bind(this)}>服务员</span>
                            <span onClick={this.searchLL.bind(this)}>促销</span>
                        </div>
                  </div>
                  <Navfooter />
                {this.props.children}
             </div>
        ) 
    }
}