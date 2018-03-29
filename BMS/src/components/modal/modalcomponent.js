import React, {Component} from 'react'
import DatagridComponent from '../datagrid/datagridcomponent'
import DatagridmodalComponent from '../datagridmodal/datagridmodalcomponent.js'
import * as actions from '../datagrid/datagridaction.js'
import {connect} from 'react-redux'
import './modal.scss'

class ModalComponent extends Component{
    showdown(){
        this.props.setshowdown()
        // 关闭后就直接写成false
        this.props.setbuild()
    }
    getKeys(item){
        return item ? Object.keys(item) : [];
    }
    // 处理newconfig
    dealconfig(_sql,_newconfig){
        this.props.refresh({
            url: 'keupdate',
            name: 'datagrid',
            data: {
                sql: this.props.sql,
                id: _newconfig.id*1,
                word: _newconfig
            }
        })
        window.alert('编辑成功');
        document.getElementsByClassName('lclink')[0].style.background = '#00B38B'
        this.props.refresh(this.props.dataconfig)
        // 刷新指定表数据        
    }
    componentDidupdate(){
        this.props.refresh(this.props.dataconfig)
    }
    save(){
        let newconfig = this.refs.dataedit.save();
        // 此处发起请求 更新数据库
        this.showdown();
        this.dealconfig(this.props.sql,newconfig)   
    }
    build(){
        // 在此处发起请求 读取所有输入框的值 除了id  
        let obj = this.refs.dataedit.save();
        let arr = Object.keys(obj);
        let idx = arr.indexOf('id');
        arr = arr.slice(idx+1)
        let obj1 = {};
        for(var i in arr){
            obj1[arr[i]] = obj[arr[i]]
        }
        this.props.refresh({
            url: 'keinsert',
            name: 'datagrid',
            method: 'post',
            data: {
                sql: this.props.sql,
                word: JSON.stringify(obj1)
            }
        })
        // window.alert('往'+this.props.sql+'表添加一条数据成功！')
        this.showdown()
        window.alert('添加成功')
        document.getElementsByClassName('lclink')[0].style.background = '#00B38B'
        this.props.refresh(this.props.dataconfig)
    }
    render(){
        // 判断传过来的类型
        let content = null;
        let html1 = null;
        if(this.props.config.type == 'datagridmodal'){
            // content = <DatagridComponent config={this.props.config}/>
            content = <DatagridmodalComponent ref='dataedit' config={this.props.config} sql={this.props.sql}></DatagridmodalComponent>     
            if(this.props.build == true){
                html1 = 
                <div>
                   <button type="button" className="btn btn-secondary" onClick={this.showdown.bind(this)}>Close</button>
                   <button type="button" className="btn btn-primary" onClick={this.build.bind(this)}>Build</button>
                </div> 
            }else{
                html1 =
                <div>
                    <button type="button" className="btn btn-secondary" onClick={this.showdown.bind(this)}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={this.save.bind(this)}>Save changes</button>
                </div> 
            }
        } else {
            content = <p>modal</p>
        }
        let html = (
            <div className="lcmodalmain">
                <div className="modal lcmodal" tabIndex="-1" style={{'display': "block"}}>
                    <div className="modal-dialog" style={{'maxWidth': 'none','margin': '50px 150px'}}>
                        <div className="modal-content"  style={{'overflow':'auto'}}>
                            <div className="modal-header">
                                <h5 className="modal-title">数据编辑</h5>
                                <button type="button" className="close">
                                <span onClick={this.showdown.bind(this)}>&times;</span>
                            </button>
                            </div>
                            <div className="modal-body" style={{'padding': 0 ,'maxHeight': '450px','overflow': 'auto'}}>
                                {content}
                            </div>
                            <div className="modal-footer">
                                {html1}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lcmask"></div>
            </div>
        )
        return this.props.show ? html : null
    }
}
const mapStateToProps = (state) => {
    return {
        rowscount: state.datagrid.rowscount
    }
}

export default connect(mapStateToProps, actions)(ModalComponent)