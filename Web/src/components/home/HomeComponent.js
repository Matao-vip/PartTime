import React from 'react'

export default class HomeComponnet extends React.Component{
    render(){
        return(
            <div>
                <h1>首页</h1>
                {this.props.children}
            </div>
        ) 
    }
}