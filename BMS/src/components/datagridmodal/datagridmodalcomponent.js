import {connect} from 'react-redux'
import React, {Component} from 'react'
import SpinnerComponent from '../spinner/SpinnerComponent.js'

class DatagridmodalComponent extends Component{

	state = {
		dataset: this.props.config
	}
	getKeys(item){
		return item ? Object.keys(item) : [];
	}
	// 用于测试
	change(key,idx){
		let newdataset = {};
		let ds = this.state.dataset.data;
		let length = this.getKeys(ds).length;
		for(var i=0;i<length;i++){
			let ip = 'input' + i;
			newdataset[this.getKeys(ds)[i]] = this.refs[ip].value
		}
	}
	save(){
		let newdataset = {};
		let ds = this.state.dataset.data;
		let length = this.getKeys(ds).length;
		for(var i=0;i<length;i++){
			let ip = 'input' + i;
			newdataset[this.getKeys(ds)[i]] = this.refs[ip].value
		}
		return newdataset
	}
	render(){
		let ds = this.state.dataset.data;
		return (

			<div className="form-group lcform-group">
				{
					this.getKeys(ds).map((key, idx)=>{
						return (
							<label style={{'display': 'block','margin': '5px 50px 0 50px','fontSize': '13px','color':'#000'}} key={Math.random()}>&nbsp;&nbsp;{key}
							      <input type="text" className="form-control form-control-sm" key={Math.random()} onChange={this.change.bind(this,key,idx)} ref={'input'+idx} defaultValue={ds[key]?ds[key]:''} />
							</label>
						)
					})
				}  
			</div>
		)
	}
	componentDidMount(){
		this.refs.input0.disabled="disabled";
	}
}
export default DatagridmodalComponent