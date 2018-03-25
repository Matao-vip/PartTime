import React from 'react'
export default class Video_detailComponnet extends React.Component{
    render(){
        return (
            <div>
                <h1>视频列表  的  详情页</h1>
                {this.props.children}
            </div>
        )
    }
}