import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import './index_body.scss'
import http from '../../../utils/httpClient.js'
import CarouselComponent from './benner/carouselComponent.js'
import Index_footer from '../footer/index_footer.js'
import $ from 'jquery'
export default class Index_body extends React.Component{
    state = {
            dataset:[],
            showdel:false,
            showde2:false,
            showde3:false,
            seat:[],
            _type0:[]
    }
    componentWillMount(){
        http.get('index_word').then(res=>{
            var data = res.data.data;
            var gion= data.map((item) =>{
                return item.region;
            })
            var _type= data.map((item) =>{
                return item.type;
            })
            var set1 = Array.from(new Set(gion));
            var _type1 = Array.from(new Set(_type));    
            this.setState({
               dataset : data,
               seat: set1,
               _type0:_type1
            })            
        })
    }
    Alllist(){
        http.get('index_word').then(res=>{
            var data = res.data.data;
            this.setState({
               dataset : data,
            })            
        })
         $('.filter_box').css('display','none');
         $('.filter_header').css({
              'position': 'static'
         });
        $('.filter_content1').css('display','none');
        $('.filter_content2').css('display','none');
        this.refs.hkregion.innerHTML='全部';
        this.refs.hkregion2.innerHTML='类型';


    }
    //点击打开弹窗
    popup(e){
        var aaa = this.refs.hkregion.innerHTML;
        var bbb = this.refs.hkregion2.innerHTML;
        if(e.target.innerText==="区域" || e.target.innerText===aaa ){
            $('.filter_item1').css({
                'color':'#fe7418'
            });
            $('.filter_box').css('display','block');
            $('.filter_header').css({
                 'position': 'absolute',
                 'z-index':'99'
            });
            if(this.state.showdel===false){
                $('.filter_content1').slideDown();
                $('.filter_content2').slideUp();
                this.setState({showdel:true})
                // console.log(this.state.showdel,'1')
            }else{
                $('.filter_content1').slideUp();
                $('.filter_content2').slideUp();

                 $('.filter_box').css('display','none');
                 $('.filter_header').css({
                      'position': 'static'
                 });
                this.setState({showdel:false})
                // console.log(this.state.showdel,'1')
            }
        }else if(e.target.innerText==="类型" || e.target.innerText===bbb ){
            // console.log(e.target.innerText)
            $('.filter_item2').css({
                'color':'#fe7418'
            });
            $('.filter_box').css('display','block');
            $('.filter_header').css({
                 'position': 'absolute',
                 'z-index':'99'
            });
            if(!this.state.showde2 || e.target.innerText==="类型" ){
                $('.filter_content2').slideDown();
                this.setState({showde2:true})
                // console.log(this.state.showde2,'2')

            }else{
                $('.filter_content2').slideUp();
                $('.filter_content1').slideUp();

                 $('.filter_box').css('display','none');
                 $('.filter_header').css({
                      'position': 'static'
                 });
                this.setState({showde2:false})
                // console.log(this.state.showde2,'2')

            }
        }
    }
    //点击关闭弹窗
    Oclose(){
        $('.filter_box').css('display','none');
        $('.filter_header').css({
             'position': 'static'
        });
        if(this.state.showde3==false){
            $('.filter_content1').slideUp();
            $('.filter_content2').slideUp();
            this.setState({showde3:true})
            console.log(this.state.showde3)

        }else{
            $('.filter_content1').slideUp();
            $('.filter_content2').slideUp();
            this.setState({showde3:false})
            console.log(this.state.showde3)

        }
    }
    // 选择区域
    Fseat(item,e){
        // console.log(e.target.innerText);
        var _region=e.target.innerText;
        http.get('index_word',{region:_region}).then(res=>{
            var data = res.data.data;
            this.setState({
               dataset : data,
            })      
        })
         $('.filter_box').css('display','none');
         $('.filter_header').css({
              'position': 'static'
         });
        $('.filter_content1').css('display','none');
        $('.filter_content2').css('display','none');

        this.refs.hkregion.innerHTML=item;
        this.refs.hkregion2.innerHTML='类型';
    }
    //职业
    profession(item,e){
        var _type=e.target.innerText;
        var _region=$('.filter_item1 span').text();
        if(_region=='区域'){
            http.get('index_word',{type:_type}).then(res=>{
                var data = res.data.data;
                this.setState({
                   dataset : data,
                }) 
            })    
        }else{
            http.get('index_word',{region:_region,type:_type}).then(res=>{
                var data = res.data.data;
                this.setState({
                   dataset : data,
                }) 
            })    
        }
         $('.filter_box').css('display','none');
         $('.filter_header').css({
              'position': 'static'
         });
        $('.filter_content2').css('display','none');
        $('.filter_content1').css('display','none');

        this.refs.hkregion2.innerHTML=item;
    }
    
    render(){
        return (
            <div id="index_body">
                <div id="index_benner">
                    <CarouselComponent />
                </div>
                <div id= "index_nav">
                     <div className="entry_block">
                        <div className="entry_item entry_item_l">
                            <a>
                                <div className="entry_l">
                                    <div className="entry_tle">喵任务</div>
                                    <div className="entry_desc">手机网络兼职</div>
                                </div> 
                                <div className="entry_r">
                                    <span className="icon_task_wallet"></span>
                                </div>
                            </a>
                        </div> 
                        <div className="entry_item">
                            <Link to={`/Video`}>
                                <div className="entry_l">
                                    <div className="entry_tle">A猫学堂</div>
                                    <div className="entry_desc">精彩课程任你挑</div>
                                </div> 
                                <div className="entry_r">
                                    <span className="icon_acat"></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="filter_header">
                    <div className="filter_item filter_item1" onClick={this.popup.bind(this)}>
                        <span ref="hkregion">区域</span>
                    </div>
                    <div className="filter_item filter_item2" onClick={this.popup.bind(this)}>
                        <span ref="hkregion2">类型</span>
                    </div>
                    <div className="filter_item filter_item3">
                        <span>时间</span>
                    </div>
                </div>
                    <div className="filter_content filter_content1">
                        <div className="type_header">选择区域</div>
                        <div className="aa">
                            <div className ="aaa">
                                <a className="btn_item selected"  onClick={this.Alllist.bind(this)}>全部</a>
                            </div> 
                            <ul>
                                {
                                    this.state.seat.map((item,idx) => {
                                    return (
                                        <a  key ={idx} className="btn_item" onClick={this.Fseat.bind(this,item)} ref="Aitem">{item}</a>
                                        )}
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="filter_content filter_content2">
                        <div className="type_header">选择类型</div>
                        <div className="aa">
                            <div className ="aaa">
                                <a className="btn_item selected"  onClick={this.Alllist.bind(this)}>全部</a>
                            </div> 
                            <ul>
                                {
                                    this.state._type0.map((item,idx) => {
                                    return (
                                        <a  key ={idx} className="btn_item" onClick={this.profession.bind(this,item)} ref="Aitem">{item}</a>
                                        )}
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                
                    <div className="filter_box" onClick={this.Oclose.bind(this)}>
                    </div>
                <div  className="list-block m-list">
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
                    <Index_footer />
                </div>
                {this.props.children}
            </div>
        )   
    }
}