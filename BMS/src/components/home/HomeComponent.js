import React from 'react'
import './Home.scss'
export default class HomeComponnet extends React.Component{
    state={
        user: ''
    }
     componentWillMount(){
        if(window.sessionStorage.getItem('username') != null){
            console.log("已经登录");

        }else{
            this.props.router.push('/');
        }
     }
    render(){
        return(
            <div>
                <div className="header">
                    
                </div>
                <div className="body">
                    <div className="nav">
                    </div>
                    <div className="container">
                        
                    </div>
                </div>
                {this.props.children}
            </div>
        ) 
    }
}