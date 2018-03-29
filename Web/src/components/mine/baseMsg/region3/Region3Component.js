import React,{Component} from 'react'
import $ from 'jquery'
import './region3.scss'

export default class Region3Component extends Component{
    componentDidUpdate(){
        if(this.props.showRegion){
            $.get("/src/assest/common/region.json",function(res){
                var data=res.regions;

                var province=$('#province')[0];
                var city=$('#city')[0];
                var county=$('#county')[0];
                // 生成省列表
                for(var i=0;i<data.length;i++){
                    var option_province=document.createElement('option');
                    option_province.value=data[i].name;
                    option_province.innerText=data[i].name;
                    province.appendChild(option_province);
                }

                // 根据选择的省生成相应的城市列表
                province.onclick=function(e){
                    for(var i=0;i<data.length;i++){
                        if(data[i].name == e.target.value){
                            var data_city=data[i].regions;
                            var option_city=data_city.map(function(item){
                                return `<option value="${item.name}">${item.name}</option>`
                            }).join('');
                            // 根据选择的城市生成相应的县级列表
                            city.onclick=function(evt){
                                for(var j=0;j<data_city.length;j++){
                                    if(data_city[j].name == evt.target.value){
                                        var data_county=data_city[j].regions;
                                        var option_count=data_county.map(function(items){
                                            return `<option value="${items.name}">${items.name}</option>`
                                        }).join('');
                                    }
                                }
                                county.innerHTML="<option value='请选择'>请选择</option>"+option_count;
                            }
                        }
                    }
                    city.innerHTML="<option value='请选择'>请选择</option>"+option_city;
                }
            },'json')
        }
    }
    saveRegion(e){
        var msg={
            province:$('#province').val(),
            city:$('#city').val(),
            county:$('#county').val()
        }
        msg=`${msg.province}-${msg.city}-${msg.county}`
        this.props.hideRegion(e,msg);
    }
    render(){
        var html=(
            <div id="locate">
                <div>
                    <p className="clfix"><label htmlFor="province">省份:</label><select name="province" id="province"></select></p>
                    <p className="clfix"><label htmlFor="city">城市:</label><select name="city" id="city"></select></p>
                    <p className="clfix"><label htmlFor="county">县区:</label><select name="county" id="county"></select></p>
                    <button onClick={this.saveRegion.bind(this)}>确定</button>
                    <button className="btn_no" onClick={this.props.hideRegion}>取消</button>
                </div>
            </div>
        )
        return this.props.showRegion ? html : null
    }
}