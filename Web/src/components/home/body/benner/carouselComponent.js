import React from 'React'
import ReactDOM from 'react-dom'
import { Carousel } from 'antd';
import './carousel.scss'
import '../../../../../node_modules/antd/lib/carousel/style/css.js'

export default class CarouselComponent extends React.Component{
    render(){
        return (
            <div className="">
                <Carousel autoplay>
                  <div><h3><img src='src/components/home/img/benner1.jpg'/></h3></div>
                  <div><h3><img src='src/components/home/img/benner2.jpg'/></h3></div>
                  <div><h3><img src='src/components/home/img/benner3.jpg'/></h3></div>
                  <div><h3><img src='src/components/home/img/benner1.jpg'/></h3></div>
                </Carousel>
            </div>
        )
    }
}
