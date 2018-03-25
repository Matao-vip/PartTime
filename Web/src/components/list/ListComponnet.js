import React from 'react'

export default class ListComponnet extends React.Component{
    render(){
        return (
            <div>
                <h1>列表页</h1>
                {this.props.children}
            </div>
        )
    }
}