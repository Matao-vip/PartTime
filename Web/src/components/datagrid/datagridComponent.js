import React,{Component} from "react"
import {connect} from 'react-redux'

import SpinnerComponent from "../spinner/SpinnerComponent"
import * as actions from './datagridaction'

class DatagridComponent extends Component{
    componentWillMount(){
        this.props.refresh(this.props.config)
    }
    getKeys(obj){
        return obj ? Object.keys(obj) : [];
    }
    render(){
        let ds = this.props.dataset;
        let name = this.props.config.name
        if(name){
            ds = ds[name] ? ds[name].dataset : []
        }else{
            ds = ds.dataset || [];
        }
        var html=
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {
                            this.getKeys(ds[0]).map(key=>{
                                return <td key={key}>{key}</td>
                            })
                        } 
                    </tr>
                </thead>
                <tbody>
                    {
                        ds.map((item,idx)=>{
                            return <tr key={idx}>
                                {
                                    this.getKeys(item).map(key=>{
                                        return <td key={key}>{item[key]}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <SpinnerComponent show={this.props.show} />
        </div>
        return html
    }
}

var mapStoreToProps = (state)=>{
    return {
        dataset:state.datagrid,
        show:state.datagrid.show,
        error:state.datagrid.error
    }
}

export default connect(mapStoreToProps,actions)(DatagridComponent);