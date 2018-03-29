import {connect} from 'react-redux'
import React, {Component} from 'react'
import SpinnerComponent from '../spinner/SpinnerComponent.js'
import * as actions from './datagridaction.js'
import './datagrid.scss'
class DatagridComponent extends Component{
	state = {
		page: 1
	}
	componentWillMount(){
		this.props.refresh(this.props.config)
	}
	getKeys(item){
		return item ? Object.keys(item) : [];
	}
	selectTr(item){
		this.props.setshowup()
		if(this.props.config.cb){
			this.props.config.cb(item)
		}
	}
	delrequest(_url,_params){
		let msg = "你确定要删除吗?";
		if(confirm(msg)==true){
			this.props.refresh({
				url: _url,
				data: _params,
				name: 'datagrid'
			})
			window.alert('删除成功')
			// 接下来就是刷新页面  记忆当前页面
			this.props.refresh(this.props.config)
		}else{
			console.log('已取消操作')
		}
	}
	del(item){
		switch(this.props.sql){
			case 'teachers':
				this.delrequest('kedel',{sql:this.props.sql,id:item.id})
				break;
			case 'coursesheet':
				this.delrequest('kedel',{sql:this.props.sql,id:item.id})
				break;
			case 'users':
				this.delrequest('kedel',{sql:this.props.sql,id:item.id})
				break;
			case 'worksheet':
				this.delrequest('kedel',{sql:this.props.sql,id:item.id})
				break;
			case 'applylist':
				this.delrequest('kedel',{sql:this.props.sql,id:item.id})
				break;
			case 'administrator':
				this.delrequest('kedel',{sql:this.props.sql,id:item.id})
				break;
			// default :
			// 	break;
		}
	}
	// setpage(){
	// 	this.setState({
	// 		page: 1
	// 	})
	// }
	goto(idx){
		this.props.refresh({
			url: this.props.config.url,
			name: this.props.config.name,
			data:{
				page: idx,
				qty: 6,
				sql: this.props.config.data.sql,
				word: this.props.config.data.word
			}	
		})
		this.setState({
			page: idx
		},()=>{
			let lis = document.getElementsByClassName('lclink');
			for(var i=0;i<lis.length;i++){
				lis[i].style.backgroundColor="#fff";
			}
			lis[this.state.page-1].style.backgroundColor="#00B38B";
		})
		// document.getElementsByClassName('lclink').[this.state.page-1].style.backgroundColor="#00B38B";
	}
	componentDidUpdate(){
		// let lis = document.getElementsByClassName('lclink');
		// for(var i=0;i<lis.length;i++){
		// 	lis[i].style.backgroundColor = '#fff';
		// 	console.log(44)
		// }
		// lis[0].style.backgroundColor = '#00B38B'
	}
	pageList(){
		let pagebtns=[];
		pagebtns[0] = <li className="page-item" key='1'>
					<a className="page-link lclink" onClick={this.goto.bind(this,1)} style={{'backgroundColor':'#00B38B'}}>1</a>
				</li>
		for(let i=2;i<=Math.ceil(this.props.rowscount/this.props.config.data.qty);i++){
			pagebtns.push(
				<li className="page-item" key={i}>
					<a className="page-link lclink" onClick={this.goto.bind(this,i)} >{i}</a>
				</li>)
		}
		return pagebtns
	}
	render(){
		// 可能有别名
		let ds = this.props.dataset;
		let name = this.props.config.name;
		if(name){
			// 是否有name
			ds = ds[name] ? ds[name].dataset : []
			if(ds==undefined){
				ds = []
			}
		}else{
			ds = ds.dataset || []
		}
		return (
			<div className="lcdatagrid">
				<table className="table table-bordered table-hover table-responsive" id="lcmodaltable">
				    <thead>
				        <tr>
				        	<th key={Math.random()}>another</th>
				        	{
				        		this.getKeys(ds[0]).map((key, idx) => {
				        			return <th key={idx}>{key}</th>
				        		})
				        	}
				        </tr>
				    </thead>
				    <tbody>
				        {
				        	ds.map((item) => {
				        	    return (
				        	        <tr key={item.id || item._id} onDoubleClick={this.selectTr.bind(this, item)} style={{'maxHeight': '70px'}}>
				        	            <td>
				        	            	<button onClick={this.selectTr.bind(this, item)}>edit</button>&nbsp;  
				        	            	<button onClick={this.del.bind(this,item)}>del</button>
				        	            </td>
				        	            {
				        	                this.getKeys(item).map((key) => {
				        	                    return <td key={Math.random()} style={{'overflow': 'hidden','height': '60px'}}>{item[key]}</td>
				        	                })  
				        	            }
				        	        </tr>
				        	    )
				        	})
				        }
				    </tbody>
				</table>
				<div className="lcpagination">
					<nav aria-label="..." style={{'display' : 'inline-block'}}>
						<ul className="pagination">
							{this.pageList()}
						</ul>
					</nav>
				</div>

				<SpinnerComponent show={this.props.show}/>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		// 一整个拿出来
		dataset: state.datagrid,
		show: state.datagrid.show,
		error: state.datagrid.error,
		rowscount: state.datagrid.rowscount
	}
}
export default connect(mapStateToProps, actions)(DatagridComponent)