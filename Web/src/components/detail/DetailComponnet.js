import React from 'react'
export default class DetailComponnet extends React.Component{
    render(){
        return (
            <div>
                <h1>详情页</h1>
                {this.props.children}
            </div>
        )
    }
}