import React from 'react'
import './LoginComponnet.css'
export default class LoginComponnet extends React.Component{
    render(){
        return (
            <div id="logo">
                <h1>登录</h1>
                {this.props.children}
            </div>
        )
    }
}