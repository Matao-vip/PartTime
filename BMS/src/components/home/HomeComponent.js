import React from 'react'
import './Home.scss'

import DatagridComponent from '../datagrid/datagridcomponent.js'
import ModalComponent from '../modal/modalcomponent.js'
import * as actions from '../datagrid/datagridaction.js'
import {connect} from 'react-redux'
import $ from '../../common/jquery-3.2.1.min.js'
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
        build: false,
        headpic: '/uploadFile/default.jpg'
    }
    // 触发该事件显示modal
    showup(){
        this.setState({
            show: true
        })
    }
    setbg(event){
        let lis = document.getElementsByClassName('lcli')
        for(var i=0;i<6;i++){
            lis[i].style.background = '#797979'
        }
        event.target.style.background = '#00B38B'
        let links = document.getElementsByClassName('lclink');
        if(links[0]){
            for(var i=0;i<links.length;i++){
                links[i].style.background = '#fff'
            }
            links[0].style.background = '#00B38B'
        }
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
        this.setState({
            build: true
        })
        let obj = this.props.dataset.dataset[0];
        let _obj = JSON.parse(JSON.stringify(obj))
        _obj.id = 'id自动生成 禁止输入! 以下数据已默认填写~~'
        this.setcomfigmodal(_obj)
    }
    setbuildstatus(){
        this.setState({
            build: false
        })
    }
    setpage(){
        // console.log(this.refs.setpage)
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
            let lis = document.getElementsByClassName('lcli')
            for(var i=0;i<6;i++){
                lis[i].style.background = '#797979'
            }
            lis[0].style.background = '#00B38B';
            this.props.refresh(this.state.config)
        })
    }
    componentWillMount(){
        if(window.sessionStorage.getItem('username')){
            $.ajax({
                url: 'http://10.3.136.25:1010/keadmininfo',
                type: 'get',
                data: {admin: window.sessionStorage.getItem('username')},
                success: (res)=>{
                    this.setState({
                        headpic: res.data[0].headpic
                    },()=>{
                    })
                }
            })
            
        }else{
            this.props.router.push('/login')
        }
    }
    componentDidUpdate(){
        // if(this.props.rowscount==0){
        //     console.log(33)
        //     document.getElementsByClassName('lcdatagrid')[0].innerHTML = `<h3 style="text-align:center;margin-top:100px;">查无此字段，请换个关键字吧！</h3>`
        // }
    }
    quit(){
        window.sessionStorage.removeItem('username');
        let msg="你确定要退出吗？"
        if(confirm(msg)==true){
            window.location.reload() 
        }
    }
    upload(){
        document.getElementsByClassName('upload')[0].click();
        $($('.headupload')[0]).show()
    }
    uploadpic(){
        var formData = new FormData($( "#uploadform" )[0]);  
        console.log(formData)
        $.ajax({  
             url: 'http://10.3.136.25:1010/keupload',  
             type: 'POST',  
             data: formData,  
             async: false,  
             cache: false,  
             contentType: false,  
             processData: false, 
             success: (res)=>{  
                console.log(res)
                alert('头像上传成功')
                $($('.headupload')[0]).hide();
                this.setState({
                    headpic: '/uploadFile/'+res
                },()=>{
                    $.ajax({
                        url: 'http://10.3.136.25:1010/keupdatehead',
                        data: {admin: window.sessionStorage.getItem('username'),headpic: this.state.headpic},
                        success: (res)=>{
                            console.log(res)
                        }
                    })
                })
                // 修改数据库
             }
        })
        
        
    }
    render(){
        let html = 
        <div>
            <div className="lcheader">
                <h3>兼职喵后台管理</h3>
                <div className="headimg">
                    <form id='uploadform' style={{'display': 'none'}}>  
                        <input type="file" name="head" style={{'display': 'none'}} className="upload"/>  
                    </form>
                    <img src={'http://10.3.136.25:1010'+this.state.headpic=='http://10.3.136.25:1010/' ? '' : 'http://10.3.136.25:1010'+this.state.headpic} alt="" onClick={this.upload}/>
                    <button className='headupload' onClick={this.uploadpic.bind(this)} style={{'display': 'none'}}>上传头像</button>
                </div>
                <div className="user">
                    <span>当前用户&nbsp;&nbsp;</span>
                    <h6>{window.sessionStorage.getItem('username')}</h6>
                    <a onClick={this.quit}>&nbsp;&nbsp;退出</a>
                </div>

            </div>
            <div className="lcbody">
                <div className="lcnav">
                    <ul onClick={this.setbg}>
                        <li onClick={this.course.bind(this)} style={{'background':'#00B38B'}} className="lcli">课程管理(Coursesheet)</li>
                        <li onClick={this.teacher.bind(this)} className="lcli">讲师管理(Teachers)</li>
                        <li onClick={this.worksheet.bind(this)} className="lcli">工作职位管理(Worksheet)</li>
                        <li onClick={this.applylist.bind(this)} className="lcli">用户报名总览(Applylist)</li>
                        <li onClick={this.users.bind(this)} className="lcli">我的喵用户管理(Users)</li>
                        <li onClick={this.administrator.bind(this)} className="lcli">管理员权限(Administrator)</li>
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