import React from 'react'
import './Home.scss'

import DatagridComponent from '../datagrid/datagridcomponent.js'
import ModalComponent from '../modal/modalcomponent.js'
import * as actions from '../datagrid/datagridaction.js'
import {connect} from 'react-redux'

class HomeComponent extends React.Component{
    // model的状态
    state = {
        show: false,
        config: {
            url: 'keCousrelist',
            data: {page: 1, qty: 6},
            name: 'datagrid',
            cb: this.setcomfigmodal.bind(this)
        },
        configmodal: {
            type: 'datagridmodal',
            data: []   
        },
        sql: 'coursesheet',
        build: false
    }
    // 触发该事件显示modal
    showup(){
        this.setState({
            show: true
        })
    }
    showdown(){
        this.setState({
            show: false
        })
    }
    setcomfigmodal(item){

        this.setState({
            configmodal: {
                type: 'datagridmodal',
                data: item
            }
        })
    }
    teacher(){
        this.setState({
            sql: 'teachers',
            config: {
                url: 'keTeacherslist',
                name: 'datagrid',
                data: {page: 1, qty: 6},
                cb: this.setcomfigmodal.bind(this)
            }
        },()=>{
            this.props.refresh(this.state.config)
        })
    }
    course(){
        this.setState({
            sql: 'coursesheet',
            config: {
                url: 'keCousrelist',
                name: 'datagrid',
                data: {page: 1, qty: 6},
                cb: this.setcomfigmodal.bind(this)
            }
        },()=>{
            this.props.refresh(this.state.config)
        })
    }
    users(){
        this.setState({
            sql: 'users',
            config: {
                url: 'keusers',
                name: 'datagrid',
                data: {page: 1, qty: 6},
                cb: this.setcomfigmodal.bind(this)
            }
        },()=>{
            this.props.refresh(this.state.config)
        })
    }
    worksheet(){
        this.setState({
            sql: 'worksheet',
            config: {
                url: 'keworksheet',
                name: 'datagrid',
                data: {page: 1, qty: 6},
                cb: this.setcomfigmodal.bind(this) 
            }
        },()=>{
            this.props.refresh(this.state.config)
        })
    }
    applylist(){
        this.setState({
            sql: 'applylist',
            config: {
               url: 'keapplylist',
               name: 'datagrid',
               data: {page: 1, qty: 6},
               cb: this.setcomfigmodal.bind(this) 
            }
        },()=>{
            this.props.refresh(this.state.config)
        })
    }
    administrator(){
        this.setState({
            sql: 'administrator',
            config: {
                url: 'keadministrator',
                name: 'datagrid',
                data: {page: 1, qty: 6},
                cb: this.setcomfigmodal.bind(this) 
            }
        },()=>{
            this.props.refresh(this.state.config)
        })
    }
    editrefresh(_config){
        this.props.refresh(_config)
    }
    add(){
        this.showup()
        // let arr = Object.keys(this.props.dataset.dataset[0]);
        // let obj = {};
        // for(var i in arr){
        //     obj[arr[i]] = ''
        // }
        this.setState({
            build: true
        })
        let obj = this.props.dataset.dataset[0];
        // obj.id = 'id自动生成 禁止输入!'
        this.setcomfigmodal(obj)
    }
    setbuildstatus(){
        this.setState({
            build: false
        })
    }
    setpage(){
        console.log(this.refs.setpage)
    }
    search(){
        this.setState({
            config: {
                url: 'kesearch',
                name: 'datagrid',
                data: {page: 1,qty: 6,sql: this.refs.sels.value,word: this.refs.serword.value},
                cb: this.setcomfigmodal.bind(this)
            }
        },()=>{
            this.props.refresh(this.state.config)
        })
    }
    componentWillMount(){
        if(window.sessionStorage.getItem('username')){
            
        }else{
            this.props.router.push('/login')
        }
    }
    quit(){
        window.sessionStorage.removeItem('username');
        let msg="你确定要退出吗？"
        if(confirm(msg)==true){
            window.location.reload() 
        }
    }
    render(){
        let html = 
        <div>
            <div className="lcheader">
                <h3>兼职喵后台管理</h3>
                <div className="user">
                    <span>当前用户&nbsp;&nbsp;</span>
                    <h6>{window.sessionStorage.getItem('username')}</h6>
                    <a onClick={this.quit}>&nbsp;&nbsp;退出</a>
                </div>

            </div>
            <div className="lcbody">
                <div className="lcnav">
                    <ul>
                        <li onClick={this.course.bind(this)}>课程管理(Coursesheet)</li>
                        <li onClick={this.teacher.bind(this)}>讲师管理(Teachers)</li>
                        <li onClick={this.worksheet.bind(this)}>工作职位管理(Worksheet)</li>
                        <li onClick={this.applylist.bind(this)}>用户报名总览(Applylist)</li>
                        <li onClick={this.users.bind(this)}>我的喵用户管理(Users)</li>
                        <li onClick={this.administrator.bind(this)}>管理员权限(Administrator)</li>
                    </ul>
                </div>
                <div className="lccontainer">

                    <div className="form-inline">
                        <select className="custom-select custom-select-4" ref='sels'>
                            <option>coursesheet</option>
                            <option>teachers</option>
                            <option>worksheet</option>
                            <option>applylist</option>
                            <option>administrator</option>
                        </select>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" ref='serword'/>
                        <button className="btn my-sm-0" type="submit" onClick={this.search.bind(this)}>Search</button>
                    </div>
                    <button className="btn my-sm-0 lcadd" type="submit" onClick={this.add.bind(this)}>AddData</button>

                    <DatagridComponent config={this.state.config} setshowup={this.showup.bind(this)} sql={this.state.sql} ref='setpage'></DatagridComponent>
                </div>
            </div>

            <ModalComponent config={this.state.configmodal} show={this.state.show} setshowdown={this.showdown.bind(this)} sql={this.state.sql} refresh={this.editrefresh.bind(this)} dataconfig={this.state.config} build={this.state.build} setbuild={this.setbuildstatus.bind(this)}></ModalComponent> 
        </div>
        return html
    }
}

const mapStateToProps = (state) => {
    return {
        // 一整个拿出来
        dataset: state.datagrid.datagrid,
        show: state.datagrid.show,
        error: state.datagrid.error,
        rowscount: state.datagrid.rowscount
    }
}
export default connect(mapStateToProps, actions)(HomeComponent)