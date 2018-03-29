import React,{Component} from 'react'
import $ from 'jquery'

import './changeImg.scss'

export default class ChangeImgComponent extends Component{
    uploadImg(e){
        var formData = new FormData($( "#uploadForm" )[0]);  
        $.ajax({  
             url: 'http://localhost:1010/Muploadhead' ,  
             type: 'POST',  
             data: formData,  
             async: false,  
             cache: false,  
             contentType: false,  
             processData: false, 
             success:  (res)=> {
                if(res.status){
                    this.props.hideImg(e,res.data);
                }
             }
        })
    }
    render(){
        var html=
        <div className="Marco-modal">
            <div className="Marco-modalBody">
                <div className="Marco-modalHeader">
                    <h5>设置头像</h5>
                    <span className="Marco-modalClose" onClick={this.props.hideImg.bind(this)}>&times;</span>
                </div>
                <div className="Marco-modalMain">
                    <form id= "uploadForm">  
                          <input type="text" name="id" defaultValue={this.props.userid} style={{display:'none'}}/> 
                          <p>上传文件： <input type="file" name="head"/></p>  
                    </form>  
                </div>
                <div className="Marco-modalBtn">
                    <button className="btn btnSecondary" onClick={this.props.hideImg.bind(this)}>取消</button>
                    <button className="btn btnPrimary" onClick={this.uploadImg.bind(this)}>保存</button>
                </div>
            </div>
            <div className="Marco-modalShade"></div>
        </div>
        return this.props.showImg ? html : null
    }
}