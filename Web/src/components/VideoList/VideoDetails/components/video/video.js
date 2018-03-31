import React from 'react'
import { Link } from 'react-router'
import './video.css'
export default class Video extends React.Component{
    render(){
        return (
            <div className="m-console">
                <video src={"/src/assest/video/course.mp4"} width="100%" controls/>
            </div>
        )
    }
}
