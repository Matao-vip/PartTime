import React from 'react'
import './Video_detailComponnet.css'
import {Link} from 'react-router'
import http from '../../../utils/httpClient.js'
import $ from 'jquery'
export default class Video_detailComponnet extends React.Component{

    componentWillMount(){
        this.setState({
            spinnerShow: true    
        })
        http.get('video').then((res) => {
            const aa = res.data.data;
            const da1=[];
            const cs = this.props.location.pathname;
            const css='t'+cs.charAt(cs.length-1);
            this.number =css;
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id===this.number){
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
            this.setState({
                spinnerShow: false,
                dataset: da1,
                number: css,
                name: da1[0].couserType
            })      
            
        })

    }
    state = {   
        dataset:[],
        number:'',
        name:'',
        spinnerShow: false,
        moda:'none',
        modalShow2: false
    }
    display(){  
          $(".parent").toggle();
    } 
    display2(){  
          $(".parent2").toggle();
    } 
               
    video(){
        $('.parent').css('display','none');
        http.get('video').then((res) => {
            const aa = res.data.data;
            this.setState({
                spinnerShow: false,
                dataset: aa,
                name: '全部'
            })     
        })
    }  
    video1(){
        $('.parent').css('display','none');
        http.get('video').then((res) => {
            const aa = res.data.data;
            const da1=[];
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id=='t1'){
                    da1.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                        couseType_id: aa[i].couseType_id,
                    }); 
                }
            }
            this.setState({
                spinnerShow: false,
                dataset: da1,
                name: da1[0].couserType
            })
               
        })
    }
    video2(){
        $('.parent').css('display','none');
        http.get('video').then((res) => {
            const aa = res.data.data;
            const da1=[];
            const cs = this.props.location.pathname;
            const css='t'+cs.charAt(cs.length-1);
            this.number =css;
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id==='t2'){
                    da1.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                        couseType_id: aa[i].couseType_id,
                    }); 
                }
            }
            
            this.setState({
                spinnerShow: false,
                dataset: da1,
                number: css,
                name: da1[0].couserType
            })     
        })
    }
    video3(){
        $('.parent').css('display','none');
        http.get('video').then((res) => {
            const aa = res.data.data;
            const da1=[];
            const cs = this.props.location.pathname;
            const css='t'+cs.charAt(cs.length-1);
            this.number =css;
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id==='t3'){
                    da1.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                        couseType_id: aa[i].couseType_id,
                    }); 
                }
            }
            
            this.setState({
                spinnerShow: false,
                dataset: da1,
                number: css,
                name: da1[0].couserType
            })     
        })
    }
    video4(){
        $('.parent').css('display','none');
        http.get('video').then((res) => {
            const aa = res.data.data;
            const da1=[];
            const cs = this.props.location.pathname;
            const css='t'+cs.charAt(cs.length-1);
            this.number =css;
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id==='t4'){
                    da1.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                        couseType_id: aa[i].couseType_id,
                    }); 
                }
            }
            
            this.setState({
                spinnerShow: false,
                dataset: da1,
                number: css,
                name: da1[0].couserType
            })     
        })
    }
    video5(){
        $('.parent').css('display','none');
        http.get('video').then((res) => {
            const aa = res.data.data;
            const da1=[];
            const cs = this.props.location.pathname;
            const css='t'+cs.charAt(cs.length-1);
            this.number =css;
            for(var i = 0; i < aa.length; i++){
                if(aa[i].couseType_id==='t5'){
                    da1.push({
                        id: aa[i].id,
                        couserType: aa[i].couserType,
                        videoImg: aa[i].videoImg,
                        number: aa[i].number,
                        price: aa[i].price,
                        videotitle: aa[i].videotitle,
                        teacher: aa[i].teacher,
                        couseType_id: aa[i].couseType_id,
                    }); 
                }
            }
            
            this.setState({
                spinnerShow: false,
                dataset: da1,
                number: css,
                name: da1[0].couserType
            })     
        })
    }
    showup2(){
        this.setState({
            modalShow2:true,
        })
    }
    sort1(){
        $('.parent2').css('display','none');
        const cs = this.props.location.pathname;
        const css='t'+cs.charAt(cs.length-1);
         http.get('getCourseByOrder',{order:1}).then((res) => {
            const aa = res.data;
            const da1=[];
            for(var i = 0; i < aa.length; i++){
                
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
            this.setState({
                spinnerShow: false,
                dataset: da1,
                name: da1[0].couserType
            })
               
        })
    }
    sort2(){
        $('.parent2').css('display','none');
        const cs = this.props.location.pathname;
        const css='t'+cs.charAt(cs.length-1);
         http.get('getCourseByOrder',{order:0}).then((res) => {
            const aa = res.data;
            const da1=[];
            
            for(var i = 0; i < aa.length; i++){
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
            this.setState({
                spinnerShow: false,
                dataset: da1,
                name: da1[0].couserType
            })
               
        })
    }
    render(){
        return (
            <div className="content">
                	<div className="m-search">
                		<Link to="/Video"><h3>A猫学堂</h3></Link>
                		<div><span>搜索视频/直播</span></div>
                	</div>
                    <div id="main">
                    		<div className="m-sort_option">
                    			<div className="slt">
                    				<span className="tit" onClick={this.display.bind(this)}>{this.state.name}</span>
                                    <div id="cjq">   
                                        <div className="category_list" id="m_course_category_warp">
                                            <div className="parent" style={{display:'none'}}>
                                                <span className="liang" onClick={this.video.bind(this)}>全部</span>                                        
                                                <span className="" onClick={this.video1.bind(this)}>精品课堂</span>                                     
                                                <span className="" onClick={this.video2.bind(this)}>畅销好课</span>                                      
                                                <span onClick={this.video3.bind(this)}>职场就业</span>                              
                                                <span onClick={this.video4.bind(this)}>兼职干货</span>                            
                                                <span onClick={this.video5.bind(this)}>技能提升</span>
                                                <span>兴趣爱好</span>
                                                <span>技能提升</span>
                                            </div>
                                        </div>
                                        <div id="zhegai"></div>
                                    </div>
                    			</div>
                    			<div className="slt">
                    				<span className="tit" onClick={this.display2.bind(this)}>综合排序</span>
                                    <div id="cjq">   
                                        <div className="category_list2" id="m_course_category_warp">
                                            <div className="parent2" style={{display:'none'}}>
                                                <span className="liang" onClick={this.sort1.bind(this)}>商品降序</span>   
                                                <span className="" onClick={this.sort2.bind(this)}>商品升序</span>
                                            </div>
                                        </div>
                                    </div>
                    			</div>
                    		</div>
                    		<div className="m-category_list m-single_list">
                    			<ul className="clearfix" id="m_category_warp">
                                    {
                                        this.state.dataset.map(function(item){
                                            return(  
                                				<li key={item.id}>
                                                    <Link to={'/videoDetails/'+item.id}>
                                    					<div className="list_picc">
                                    						<img src={item.videoImg} className="lazy" />
                                    					</div>
                                    					<div className="list_info">
                                    						<h6>{item.videotitle}</h6>
                                    						<p><span className="price free">￥{item.price}</span></p>
                                    						<p className="clearfix">
                    											<span className="teacher">{item.number}人报名</span>
                    											<span className="org">绪作</span>
                    										</p>
                                    					</div>
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