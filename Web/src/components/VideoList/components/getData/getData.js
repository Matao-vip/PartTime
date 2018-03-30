import React,{Component} from 'react'
import { Link } from 'react-router'
import './getData.css'
import http from '../../../../utils/httpClient.js'
export default class Nav1 extends React.Component{
    
    state = {
        dataset:[],
        dataset1:[],
        dataset2:[],
        dataset3:[],
        dataset4:[],
        dataset5:[],
        spinnerShow: false
    }
    componentWillMount(){
        this.setState({
            spinnerShow: true
            
        })
        http.get('video').then((res) => {
            const aa = res.data.data;
            const da1=[];
            const da2=[];
            const da3=[];
            const da4=[];
            const da5=[];
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id==='t1'){
                    da1.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                    }); 
                }
            }
            da1.splice(0,1);
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id==='t2'){
                    da2.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                    }); 
                }
            }
            da2.splice(0,1);
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id==='t3'){
                    da3.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                    }); 
                }
            }
            da3.splice(0,1);
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id==='t4'){
                    da4.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                    }); 
                }
            }
            da4.splice(0,1);
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id==='t5'){
                    da5.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                    }); 
                }
            }
            da5.splice(0,1);

            this.setState({
                spinnerShow: false,
                dataset1: da1,
                dataset2: da2,
                dataset3: da3,
                dataset4: da4,
                dataset5: da5
            })
        })
    }

    render(){
        return (
            <div className="m-idx_double">
                <div className="m-idx_doubles">
                <Link to="/Video_detail/:id=1"><h2><span></span>职场就业</h2></Link>
                <div className="m-double_list" >
                	<ul className="clearfix">
                        {
                            this.state.dataset1.map(function(item){
                                return(
                            		<li key={item.id}>
                                    <Link to={'/videoDetails/'+item.id}>
                            			<div className="list_pic">
                            				<img src={item.videoImg} />
                            				<span className="shadow"></span>
                            				<span className="teacher">{item.number}人报名</span>
                            			</div>
                            			<h6>{item.videotitle}</h6>
                            			<p>
                            				<span className="price">￥{item.price}</span>
                            			</p>
                                    </Link>
                            		</li>
                                    )
                            })
                        }
                	</ul>
                </div>
                </div>

                <div className="m-idx_doubles">                
                <Link to="/Video_detail/:id=1"><h2><span></span>兼职干货</h2></Link>
                <div className="m-double_list" >
                    <ul className="clearfix">
                        {
                            this.state.dataset2.map(function(item){
                                return(
                                    <li key={item.id}>
                                    <Link to={'/videoDetails/'+item.id}>
                                        <div className="list_pic">
                                            <img src={item.videoImg} />
                                            <span className="shadow"></span>
                                            <span className="teacher">{item.number}人报名</span>
                                        </div>
                                        <h6>{item.videotitle}</h6>
                                        <p>
                                            <span className="price">￥{item.price}</span>
                                        </p>
                                        </Link>
                                    </li>
                                    )
                            })
                        }
                    </ul>
                </div>
                </div>

                <div className="m-idx_doubles">
                <Link to="/Video_detail/:id=1"><h2><span></span>技能提升</h2></Link>
                <div className="m-double_list" >
                    <ul className="clearfix">
                        {
                            this.state.dataset3.map(function(item){
                                return(
                                    <li key={item.id}>
                                    <Link to={'/videoDetails/'+item.id}>
                                        <div className="list_pic">
                                            <img src={item.videoImg} />
                                            <span className="shadow"></span>
                                            <span className="teacher">{item.number}人报名</span>
                                        </div>
                                        <h6>{item.videotitle}</h6>
                                        <p>
                                            <span className="price">￥{item.price}</span>
                                        </p>
                                    </Link>
                                    </li>
                                    )
                            })
                        }
                    </ul>
                </div>
                </div>

                <div className="m-idx_doubles">
                <Link to="/Video_detail/:id=1"><h2><span></span>兴趣爱好</h2></Link>
                <div className="m-double_list" >
                    <ul className="clearfix">
                        {
                            this.state.dataset4.map(function(item){
                                return(
                                    <li key={item.id}>
                                    <Link to={'/videoDetails/'+item.id}>
                                        <div className="list_pic">
                                            <img src={item.videoImg} />
                                            <span className="shadow"></span>
                                            <span className="teacher">{item.number}人报名</span>
                                        </div>
                                        <h6>{item.videotitle}</h6>
                                        <p>
                                            <span className="price">￥{item.price}</span>
                                        </p>
                                    </Link>
                                    </li>
                                    )
                            })
                        }
                    </ul>
                </div>
                </div>

                <div className="m-idx_doubles">
                <Link to="/Video_detail/:id=1"><h2><span></span>校园生活</h2></Link>
                <div className="m-double_list" >
                    <ul className="clearfix">
                        {
                            this.state.dataset5.map(function(item){
                                return(
                                    <li key={item.id}>
                                    <Link to={'/videoDetails/'+item.id}>
                                        <div className="list_pic">
                                            <img src={item.videoImg} />
                                            <span className="shadow"></span>
                                            <span className="teacher">{item.number}人报名</span>
                                        </div>
                                        <h6>{item.videotitle}</h6>
                                        <p>
                                            <span className="price">￥{item.price}</span>
                                        </p>
                                    </Link>
                                    </li>
                                    )
                            })
                        }
                    </ul>
                </div>
                </div>
                    
            </div>
            
        )
    }
}